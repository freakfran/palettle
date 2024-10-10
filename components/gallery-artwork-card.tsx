'use client'
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {Metadata} from "@/types";
import {useRequest} from "ahooks";

interface GalleryArtworkCardProps {
    tokenId: bigint
}

export default function GalleryArtworkCard({tokenId}: GalleryArtworkCardProps) {

    const {data: jsonUrl} = useReadContract({
        ...paletteContractConfig,
        functionName: 'tokenURI',
        args: [tokenId],
    })

    async function fetchArtwork(url: string) {
        const data = await fetch(url)
        const metadata: Metadata = await data.json()
        console.log(metadata)
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
                <p className="font-bold">{artwork.name}</p>
                <div className="rounded-full bg-[rgba(238,87,76,0.3)]
                                            text-[#ee574c] text-[0.75em] font-bold p-2 w-[75px]
                                            text-center overflow-hidden ml-auto"
                >
                    {
                        artwork.attribution.tags &&
                        artwork.attribution.tags.split(',')[0]
                    }
                </div>
            </div>
            <Button className="bg-sky-400 hover:bg-sky-500 float-right ml-2">
                View
            </Button>

        </div>
    )
}