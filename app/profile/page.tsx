'use client'

import {useAccount} from "wagmi";
import {useRouter} from "next/navigation";
import React, {ChangeEvent, useEffect, useState} from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useRequest} from "ahooks";
import {getUserByAddress, updateUserByAddress} from "@/backend/actions/users";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {DEFAULT_AVATAR} from "@/utils/env";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import {pinata} from "@/utils/config";
import {Avatar, AvatarImage} from "@/components/ui/avatar";


const profileSchema = z.object({
    nickname: z.string().min(1),
    introduction: z.string().optional(),
    file: z.unknown()
        .transform(value => {
            return value as FileList
        })
        .refine((file) => file && file.length == 1, 'File is required.')
        .refine((file) => file?.[0].type.startsWith('image/'), 'File must be an image.')
        .optional()
})


async function updateUser(address: string, values: z.infer<typeof profileSchema>) {
    let avatar = undefined
    const introduction = values.introduction ? values.introduction : ''
    const nickname = values.nickname
    if (values.file) {
        const file = values.file[0];
        const keyRequest = await fetch("/api/key");
        const keyData = await keyRequest.json();
        const upload = await pinata.upload.file(file).key(keyData.JWT);
        avatar = await pinata.gateways.convert(upload.IpfsHash);
    }
    await updateUserByAddress(address, nickname, avatar, introduction);
}


export default function Profile() {
    const {isConnected, address} = useAccount();
    const router = useRouter();

    const [img, setImg] = useState(DEFAULT_AVATAR)

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
    })
    const fileRef = form.register("file");

    const {loading, error, run} = useRequest(updateUser, {
        manual: true,
        onSuccess: () => {
            router.push("/")
        }
    })

    const {data: user} = useRequest(getUserByAddress, {
        defaultParams: [address!],
        ready: !!address,
        onSuccess: (res) => {
            if (res?.avatar) {
                setImg(res.avatar)
            }
        }
    })

    function handleImgChange(e: ChangeEvent<HTMLInputElement>) {
        setImg(URL.createObjectURL(e.target.files![0]));
    }

    function onSubmit(values: z.infer<typeof profileSchema>) {
        if (address) {
            run(address, values);
        }
    }


    useEffect(() => {
        if (!isConnected) {
            router.push("/")
        }
    }, [isConnected, router]);


    return (
        user &&
        <div className="bg-white p-[90px]">
            <div className="w-1/2 ml-auto mr-auto border-2 p-16 rounded-lg">
                {
                    img &&
                    <Avatar
                        className="ml-auto mr-auto min-h-[200px] min-w-[200px]"
                    >
                        <AvatarImage
                            src={img}
                            alt="img"
                        />
                    </Avatar>

                }
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="file"
                            render={() => (
                                <FormItem>
                                    <FormLabel className="font-bold">Avatar</FormLabel>
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
                            name="nickname"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Nickname</FormLabel>
                                    <FormControl>
                                        <Input placeholder={user.nickname!} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="introduction"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Introduction</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder={user.description!} {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <Button className="ml-auto block" variant="default" disabled={loading}
                                type="submit">Save</Button>
                        {error && <p className="text-red-500">{error.message}</p>}
                    </form>
                </Form>
            </div>

        </div>
    )
}