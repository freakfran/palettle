'use client'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import React, {ChangeEvent, useEffect, useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";
import {pinata} from "@/utils/config";
import {useAccount, useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {Tag, TagInput} from "emblor";
import {formatDate} from "@/utils/common";
import {getUserByAddress} from "@/backend/actions/users";
import {paletteContractConfig} from "@/utils/pattle";
import {useRequest} from "ahooks";
import {insertArtwork, insertUserTag} from "@/backend/actions/token";
import {hexToNumber} from "viem";

const uploadArtSchema = z.object({
    file: z
        .instanceof(FileList)
        .refine((file) => file && file.length == 1, 'File is required.')
        .refine((file) => file?.[0].type.startsWith('image/'), 'File must be an image.'),
    tag: z.array(
        z.object({
            id: z.string(),
            text: z.string(),
        }),
    ).nonempty({
        message: "Can't be empty!",
    }),
    title: z.string(),
    description: z.string()
})


export default function UploadPicDialog({allTags}: { allTags: string[] }) {
    //用户地址
    const {address, isConnected} = useAccount();
    //图片地址
    const [img, setImg] = useState('')
    //标签
    const [tags, setTags] = useState<Tag[]>([]);
    const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
    const [error, setError] = useState<string | null>(null);

    //合约相关
    const {
        data: hash,
        isPending,
        error: writeContractError,
        writeContract
    } = useWriteContract();
    const {
        data: receipt,
        isLoading: isConfirming,
    } = useWaitForTransactionReceipt({
        hash,
    });
    //表单事件
    const form = useForm<z.infer<typeof uploadArtSchema>>({
        resolver: zodResolver(uploadArtSchema),
    })
    const fileRef = form.register("file");

    //上传metadata到ipfs
    const uploadFile = async (values: z.infer<typeof uploadArtSchema>) => {
        if (!isConnected || !address) {
            throw new Error("Please connect your wallet.");
        }
        const file = values.file[0];
        if (!file) {
            throw new Error("File is required.");
        }
        const user = await getUserByAddress(address)
        //先上传图片
        const keyRequest = await fetch("/api/key");
        const keyData = await keyRequest.json();
        const upload = await pinata.upload.file(file).key(keyData.JWT);
        const ipfsUrl = await pinata.gateways.convert(upload.IpfsHash);
        //上传metadata
        const keyRequestJson = await fetch("/api/key");
        const keyDataJson = await keyRequestJson.json();
        const tags = values.tag.map((tag) => (tag.text));
        const uploadJson = await pinata.upload.json({
            name: values.title,
            description: values.description,
            image: ipfsUrl,
            attribution: {
                author: user?.nickname,
                authorAddress: address,
                createTime: formatDate(new Date()),
                tags: tags.join(',')
            }

        }).key(keyDataJson.JWT);
        const ipfsJson = await pinata.gateways.convert(uploadJson.IpfsHash);
        writeContract({
            ...paletteContractConfig,
            functionName: 'mint',
            args: [address, ipfsJson],
        })
        return ipfsJson;
    };

    const saveToDatabase = async (tokenId: string) => {
        const values = form.getValues()
        const number = hexToNumber(tokenId as `0x${string}`).toString()
        const tagArr = tags.map((tag) => (tag.text))
        await insertArtwork(number, address!, values.title, values.description,tagArr)
        await insertUserTag(address!, tagArr)
    }

    const {
        loading: databaseLoading,
        run: databaseRun,
        error: databaseError
    } = useRequest(saveToDatabase, {
        manual: true,
        onSuccess: () => {
            window.location.reload()
        }
    })

    const {
        loading,
        run: upload,
        error: uploadError,
    } = useRequest(uploadFile, {
        manual: true,
    })

    useEffect(() => {
        if (receipt && receipt.logs.length > 0) {
            const eventEmitted = receipt.logs[0];
            const tokenId = eventEmitted.topics[3];
            if (tokenId) {
                databaseRun(tokenId);
            } else {
                setError("did not get tokenId");
            }
        }
    }, [databaseRun, receipt]);

    //错误处理
    useEffect(() => {
        if (uploadError) {
            setError("upload failed:" + uploadError.message);
        }
        if (writeContractError) {
            setError("mint failed:" + writeContractError.message);
        }
        if (databaseError) {
            setError("database error:" + databaseError.message);
        }
    }, [writeContractError, uploadError, databaseError]);


    //表单提交事件
    function onSubmit(values: z.infer<typeof uploadArtSchema>) {
        upload(values);
    }


    // 上传图片
    function handleImgChange(e: ChangeEvent<HTMLInputElement>) {
        setImg(URL.createObjectURL(e.target.files![0]));
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-sky-400 hover:bg-sky-500">Mint</Button>
            </DialogTrigger>

            <DialogContent className="sm:min-w-[425px] max-w-screen-sm">
                <DialogHeader>
                    <DialogTitle>Upload your artwork</DialogTitle>
                </DialogHeader>

                {
                    img &&
                    <div className="w-full">
                        <Image
                            src={img}
                            width={0}
                            height={0}
                            sizes="100vw"
                            alt="img"
                            className="w-full h-auto max-h-[350px] object-contain"
                        />
                    </div>
                }


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="file"
                            render={() => (
                                <FormItem>
                                    <FormLabel className="font-bold">Image</FormLabel>
                                    <FormControl>
                                        <Input type="file" {...fileRef} onChange={handleImgChange}/>
                                    </FormControl>
                                    <FormDescription>
                                        JPEG / JPG / PNG
                                    </FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="title"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Title</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="tag"
                            render={({field}) => (
                                <FormItem className="font-bold">
                                    <FormLabel>Tag</FormLabel>
                                    <FormControl>
                                        <TagInput
                                            {...field}
                                            tags={tags}
                                            setTags={(newTags) => {
                                                setTags(newTags);
                                                form.setValue('tag', newTags as [Tag, ...Tag[]]);
                                            }}
                                            activeTagIndex={activeTagIndex}
                                            setActiveTagIndex={setActiveTagIndex}
                                            maxTags={5}
                                            showCount={true}
                                            enableAutocomplete={true}
                                            autocompleteOptions={allTags.map((tag) => ({text: tag, id: tag}))}
                                        />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="description"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Description</FormLabel>
                                    <FormControl>
                                        <Textarea className="resize-none" {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button disabled={loading || databaseLoading || isPending || isConfirming}
                                    type="submit">Save</Button>
                            {error && <p className="text-red-500">{error}</p>}
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}