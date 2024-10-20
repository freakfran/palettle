'use client'

import {Button} from "@/components/ui/button";
import {useSendTransaction, useWaitForTransactionReceipt} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {useToast} from "@/hooks/use-toast";
import {useEffect} from "react";
import {encodeFunctionData} from "viem";

interface BuyButtonProps {
    tokenId: bigint
    price: bigint
    className?: string
}

export default function BuyButton({tokenId, price, className}: BuyButtonProps) {
    const {toast} = useToast()
    const {
        data: hash,
        isPending,
        error,
        sendTransaction
    } = useSendTransaction();

    const {isLoading: isConfirming, isSuccess: isConfirmed, error: transactionError} =
        useWaitForTransactionReceipt({
            hash,
        });

    function buy() {
        sendTransaction({
            to: paletteContractConfig.address,
            value: price,
            data: encodeFunctionData({
                abi: paletteContractConfig.abi,
                functionName: 'buy',
                args: [tokenId],
            })
        })
    }

    useEffect(() => {
        if (error) {
            console.log(error)
            toast(
                {
                    variant: "destructive",
                    title: "Error",
                    description: error.message,
                }
            )
        } else if (transactionError) {
            toast(
                {
                    variant: "destructive",
                    title: "Error",
                    description: transactionError.message,
                }
            )
        } else if (isConfirmed) {
            toast(
                {
                    description: 'bought successfully!',
                }
            );
            window.location.reload()
        }
    }, [error, isConfirmed, toast, transactionError]);


    return (
        <Button
            className={className}
            onClick={buy}
            disabled={isPending || isConfirming}
            variant="destructive"
        >
            {isPending || isConfirming ? 'pending...' : 'BUY NOW'}
        </Button>
    )
}