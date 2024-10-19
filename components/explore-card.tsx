'use client'
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";
import {useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {useRequest} from "ahooks";
import {getTokenByUri} from "@/backend/actions/token";
import {useState} from "react";
import {getUserByAddress} from "@/backend/actions/users";
import {formatEther} from "viem";

export interface ExploreCardProps {
    className?: string;
    tokenId: string;
}

export default function ExploreCard({
                                        className,
                                        tokenId
                                    }: ExploreCardProps) {
    const {data: jsonUrl} = useReadContract({
        ...paletteContractConfig,
        functionName: 'tokenURI',
        args: [BigInt(parseInt(tokenId))],
    })

    const {data: price} = useReadContract({
        ...paletteContractConfig,
        functionName: 'getPrice',
        args: [BigInt(parseInt(tokenId))],
    })
    const [authorAddress, setAuthorAddress] = useState('')
    const {data: metadata} = useRequest(getTokenByUri, {
        ready: !!jsonUrl,
        defaultParams: [jsonUrl!],
        onSuccess: (res) => {
            if (res.attribution.authorAddress) {
                setAuthorAddress(res.attribution.authorAddress)
            }
        }
    })

    const {data: author} = useRequest(getUserByAddress, {
        ready: !!authorAddress,
        defaultParams: [authorAddress]
    })

    return (
        metadata && author &&
        <div
            className={
                cn("bg-white flex flex-col break-words p-[20px] rounded-lg shadow-lg",
                    className)
            }
        >


            <div className="mb-2 flex items-center">
                <Avatar>
                    <AvatarImage src={author.avatar!} alt={author.nickname!}/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h6 className="ml-2 font-bold text-[14px]">{author.nickname}</h6>
            </div>


            <div className="w-auto h-80 overflow-hidden relative rounded-2xl mb-2">
                <Image src={metadata.image} alt={metadata.name} fill={true} style={{objectFit: "cover"}}/>
            </div>

            <div>
                <h6 className="font-bold text-lg">{metadata.name}</h6>
                <div className="flex justify-between my-2">
                    {/*<p className="font-medium text-[#6b6e6f] text-sm">{stock} in stock</p>*/}
                    <p className="font-medium text-green-700 text-sm">{price ? formatEther(price) + ' ETH' : ''}</p>
                </div>
            </div>

            <hr className="my-2"/>

            <Button variant="destructive">
                View
            </Button>

        </div>
    )
        ;
}
