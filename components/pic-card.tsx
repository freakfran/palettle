'use client'
import Image from "next/image";
import {useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {useRequest} from "ahooks";
import {getTokenByUri} from "@/backend/actions/token";
import {formatEther} from "viem";
import {getUserByAddress} from "@/backend/actions/users";
import {useState} from "react";
import {compressString} from "@/utils/common";
import Link from "next/link";
import {Avatar, AvatarImage} from "@/components/ui/avatar";

export interface PicCardProps {
    tokenId: string
}


export default function PicCard({tokenId}: PicCardProps) {
    const {data: jsonUrl} = useReadContract({
        ...paletteContractConfig,
        functionName: 'tokenURI',
        args: [BigInt(parseInt(tokenId))],
    })

    const {data: price} = useReadContract({
        ...paletteContractConfig,
        functionName: 'getPrice',
        args: [BigInt(parseInt(tokenId))],
    });
    //
    const [authorAddress, setAuthorAddress] = useState('')

    const {data: metadata} = useRequest(getTokenByUri, {
        defaultParams: [jsonUrl!],
        ready: !!jsonUrl,
        onSuccess: (res) => {
            if(res.attribution.authorAddress){
                setAuthorAddress(res.attribution.authorAddress)
            }
        }
    })


    const {data: author} = useRequest(getUserByAddress, {
        ready: !!authorAddress,
        defaultParams: [authorAddress]
    })


    return (
        price!==undefined && metadata && author &&
        <div
            className="bg-white relative flex flex-col break-words p-[20px]
                rounded-lg shadow-lg max-w-[250px]"
        >
            <div className="rounded-full bg-[rgba(238,87,76,0.3)]
                text-[#ee574c] text-[0.75em] font-bold p-2 w-fit ml-auto mb-2"
            >
                {metadata.attribution.tags.split(',')[0]}
            </div>

            <div className="w-[212px] h-[159px] overflow-hidden rounded-2xl mb-2 relative">
                <Link href={`/item/${tokenId}`}>
                    <Image
                        src={metadata.image}
                        alt={metadata.name}
                        fill
                        style={{objectFit: "cover"}}
                    />
                </Link>

            </div>

            <div>
                <h6 className="font-bold text-lg">{metadata.name}</h6>
                <p className="font-medium text-[#e46e2a] text-sm">
                    {
                        formatEther(price).toString() === '0' ? '' : formatEther(price).toString() + ' ETH'
                    }
                </p>

                <div className="mt-3 flex items-center">
                    <Link href={`/gallery/${authorAddress}`} className="mt-3 flex items-center" target="_blank">
                        <Avatar>
                            <AvatarImage src={author.avatar!} alt={author.nickname!}/>
                        </Avatar>
                        <h6 className="ml-2 font-bold text-[14px]">{compressString(author.nickname!,10)}</h6>
                    </Link>

                </div>
            </div>

        </div>
    )
}