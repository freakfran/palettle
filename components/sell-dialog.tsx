'use client'

import {z} from "zod";
import {useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import React, {useEffect} from "react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import Image from "next/image";
import {paletteContractConfig} from "@/utils/pattle";
import {parseEther} from "viem";

const positiveNumberRegex = /^(0|[1-9]\d*)(\.\d+)?$/;

const sellSchema = z.object({
    tokenId: z.string().optional(),
    price: z.string().refine(value => positiveNumberRegex.test(value), {
        message: "must be a positive number.",
    }),
})

interface SellDialogProps {
    tokenId: bigint,
    img: string,
    isSellable: boolean,
    price: string
}

export default function SellDialog({tokenId, img, isSellable, price}: SellDialogProps) {
    const {
        data: hash,
        isPending,
        error,
        writeContract
    } = useWriteContract();

    const {isLoading: isConfirming, isSuccess: isConfirmed} =
        useWaitForTransactionReceipt({
            hash,
        })

    const form = useForm<z.infer<typeof sellSchema>>({
        resolver: zodResolver(sellSchema),
    })

    function onSubmit(values: z.infer<typeof sellSchema>) {
        writeContract({
            ...paletteContractConfig,
            functionName: 'setPriceAndSellable',
            args: [tokenId, parseEther(values.price), true],
        })
    }

    function stopSelling() {
        writeContract({
            ...paletteContractConfig,
            functionName: 'setPriceAndSellable',
            args: [tokenId, BigInt(0), false],
        })
    }

    useEffect(() => {
        if (isConfirmed) {
            window.location.reload()
        }
    }, [isConfirmed]);


    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-green-500 hover:bg-green-600 float-right ml-2 w-16">
                    {isSellable ? 'Modify' : 'Sell'}
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:min-w-[425px] max-w-screen-sm">
                <DialogHeader>
                    <DialogTitle>{isSellable ? 'Modify price' : 'Set a price'}</DialogTitle>
                </DialogHeader>

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

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="tokenId"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Token ID</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} value={tokenId.toString()} disabled/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="price"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel className="font-bold">Price in ETH</FormLabel>
                                    <FormControl>
                                        <Input {...field} placeholder={price}/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            {
                                isSellable &&
                                <Button
                                    variant="destructive"
                                    disabled={isPending || isConfirming}
                                    type="button"
                                    onClick={stopSelling}
                                >
                                    Stop Selling
                                </Button>
                            }

                            <Button disabled={isPending || isConfirming}
                                    type="submit">
                                Confirm
                            </Button>
                            {error && <p className="text-red-500">{error.message}</p>}
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}