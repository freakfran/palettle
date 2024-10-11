'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {Metadata} from "@/types";
import {useRequest} from "ahooks";
import {useState} from "react";
import {getUserByAddress} from "@/backend/actions/users";
import SellDialog from "@/components/sell-dialog";
import {formatEther} from "viem";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import {compressString} from "@/utils/common";
import Link from "next/link";

interface GalleryArtworkCardProps {
    tokenId: bigint
    isMy: boolean
}

export default function GalleryArtworkCard({tokenId,isMy}: GalleryArtworkCardProps) {

    const [authorImg, setAuthorImg] = useState('')

    const {data: jsonUrl} = useReadContract({
        ...paletteContractConfig,
        functionName: 'tokenURI',
        args: [tokenId],
    })


    const {data: isSellable} = useReadContract({
        ...paletteContractConfig,
        functionName: 'getIsSellable',
        args: [tokenId]
    })

    const {data: price} = useReadContract({
        ...paletteContractConfig,
        functionName: 'getPrice',
        args: [tokenId],
        query: {
            enabled: isSellable
        }
    })

    async function fetchArtwork(url: string) {
        const data = await fetch(url)
        const metadata: Metadata = await data.json()
        if (metadata.attribution.authorAddress) {
            const author = await getUserByAddress(metadata.attribution.authorAddress)
            if (author && author.avatar) {
                setAuthorImg(author.avatar)
            }
        }
        return metadata
    }

    const {data: artwork} = useRequest(fetchArtwork, {
        ready: !!jsonUrl,
        defaultParams: [jsonUrl!],
    })


    return (
        artwork &&
        <div
            className="rounded-lg border shadow-md p-5 mt-10">
            <div className="w-full h-[450px] rounded-lg overflow-hidden relative">
                <Image
                    src={artwork.image}
                    alt={artwork.name}
                    fill
                    style={{objectFit: "cover"}}
                />
            </div>
            <div className="flex justify-between items-center mt-3 mb-3">
                <p className="font-bold">
                    {artwork.name}
                    {
                        isSellable && price &&
                        <p className="text-gray-400 text-sm">
                            {formatEther(price)} ETH
                        </p>
                    }
                </p>
                <div className="rounded-full bg-[rgba(238,87,76,0.3)]
                                            text-[#ee574c] text-[0.75em] font-bold p-2 w-[75px]
                                            text-center overflow-hidden ml-auto"
                >
                    {
                        artwork.attribution.tags ?
                            artwork.attribution.tags.split(',')[0] : 'Empty'
                    }
                </div>
            </div>
            {
                authorImg &&
                <div className="flex flex-row items-center float-left">
                    <p>By&nbsp;</p>
                    <Link href={`/gallery/${artwork.attribution.authorAddress}`}>
                        <Avatar>
                            <AvatarImage src={authorImg} alt="author"/>
                        </Avatar>
                    </Link>
                    <p>&nbsp; {compressString(artwork.attribution.author, 10)}</p>
                </div>
            }
            <Button className="bg-sky-400 hover:bg-sky-500 float-right ml-2 w-16">
                View
            </Button>
            {
                isSellable !== undefined && isMy &&
                <SellDialog
                    isSellable={isSellable}
                    tokenId={tokenId}
                    img={artwork.image}
                    price={price ? formatEther(price) : ''}
                />
            }
        </div>
    )
}