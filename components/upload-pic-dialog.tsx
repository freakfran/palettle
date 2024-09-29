'use client'
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ChangeEvent, useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import Image from "next/image";
import {pinata} from "@/utils/config";
import {useRequest} from "ahooks";
import {insertArtwork} from "@/backend/actions/token";
import {useAccount} from "wagmi";

const uploadArtSchema = z.object({
    file: z
        .instanceof(FileList)
        .refine((file) => file?.length == 1, 'File is required.')
        .refine((file) => file?.[0].type.startsWith('image/'), 'File must be an image.'),
    tag: z.string(),
    title: z.string(),
    description: z.string()
})


export default function UploadPicDialog() {
    const {address} = useAccount()
    const [img, setImg] = useState('')

    const form = useForm<z.infer<typeof uploadArtSchema>>({
        resolver: zodResolver(uploadArtSchema),
    })

    const fileRef = form.register("file");

    const uploadFile = async (values: z.infer<typeof uploadArtSchema>) => {
        const file = values.file[0];
        if (!file) {
            throw new Error("File is required.");
        }
        const keyRequest = await fetch("/api/key");
        const keyData = await keyRequest.json();
        const upload = await pinata.upload.file(file).key(keyData.JWT);
        const ipfsUrl = await pinata.gateways.convert(upload.IpfsHash);
        await insertArtwork(ipfsUrl, values.title, address!, values.description, values.tag);
        return ipfsUrl;
    };

    const {
        data: ipfsUrl,
        run,
        loading,
        error
    } = useRequest(uploadFile, {manual: true})

    if (error) {
        console.log(error)
    }
    if (ipfsUrl) {
        console.log(ipfsUrl);
        window.location.reload()
    }


    function onSubmit(values: z.infer<typeof uploadArtSchema>) {
        run(values);
    }

    function handleImgChange(e: ChangeEvent<HTMLInputElement>) {
        setImg(URL.createObjectURL(e.target.files![0]));
    }


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-sky-400 hover:bg-sky-500">Upload</Button>
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
                                        <Input {...field}/>
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
                            <Button disabled={loading} type="submit">Save</Button>
                            {error && <p className="text-red-500">{error.message}</p>}
                        </DialogFooter>

                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}