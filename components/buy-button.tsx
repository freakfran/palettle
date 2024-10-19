'use client'

import {Button} from "@/components/ui/button";

interface BuyButtonProps {
    tokenId: string
    className?:string
}

export default function BuyButton({tokenId,className}:BuyButtonProps){


    return (
        <Button className={className}>
            Buy
        </Button>
    )
}