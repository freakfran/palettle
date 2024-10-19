'use client'

import {Button} from "@/components/ui/button";
import {useWaitForTransactionReceipt, useWriteContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {useToast} from "@/hooks/use-toast";
import {useEffect} from "react";

interface BuyButtonProps {
    tokenId: string
    className?: string
}

export default function BuyButton({tokenId, className}: BuyButtonProps) {
    const { toast } = useToast()
    const {
        data: hash,
        isPending,
        error,
        writeContract
    } = useWriteContract();

    const {isLoading: isConfirming, isSuccess: isConfirmed,error:transactionError    } =
        useWaitForTransactionReceipt({
            hash,
        });

    function buy() {
        writeContract({
            ...paletteContractConfig,
            functionName: 'buy',
            args: [BigInt(parseInt(tokenId))]
        })
    }

    useEffect(() => {
        if(error){
            toast(
                {
                    variant: "destructive",
                    title: "Error",
                    description: error.message,
                }
            )
        }else if (transactionError){
            toast(
                {
                    variant: "destructive",
                    title: "Error",
                    description: transactionError.message,
                }
            )
        }else if (isConfirmed){
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
            onClick={() => buy()}
            disabled={isPending || isConfirming}
        >
            {isPending || isConfirming ? 'pending...' : 'Buy'}
        </Button>
    )
}