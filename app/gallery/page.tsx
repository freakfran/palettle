'use client'
import {Separator} from "@/components/ui/separator";
import UploadPicDialog from "@/components/upload-pic-dialog";
import {useAccount, useReadContract} from "wagmi";
import {useInfiniteScroll} from "ahooks";
import {useEffect, useState} from "react";
import {getArtworksByAuthor} from "@/backend/actions/token";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Artwork} from "@/types";
import {paletteContractConfig} from "@/utils/pattle";
import {err} from "pino-std-serializers";


export default function GalleryPage() {
    const {isConnected, address} = useAccount();

    const {
        data,
        loadMore,
        reload,
        loadingMore,
        error
    } = useInfiniteScroll(
        (d) =>
            getArtworksByAuthor(address!, 6, d?.nextId),
        {
            manual: true,
        }
    );

    const [artworkIds, setArtworkIds] = useState<bigint[]>([]);

    useEffect(() => {
        if (data && data.list && data.list.length > 0) {
            setArtworkIds(data.list.map(item => BigInt(item.artworkId ? item.artworkId : 0)))
        }
    }, [data]);

    const {data: tokenLengths} = useReadContract(
        {
            ...paletteContractConfig,
            functionName: 'getArtworksTokenIdLength',
            args: [artworkIds],
            query: {
                enabled: artworkIds.length > 0
            }
        }
    )



    useEffect(() => {
        console.log(error)
    }, [error]);

    useEffect(() => {
        if (address) {
            reload();
        }
    }, [address]);


    return (
        <div className="p-[120px] flex flex-col items-center">
            <div className="shadow-md w-full p-[120px]">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-4xl">Your Artworks</h2>
                    {isConnected && <UploadPicDialog/>}
                </div>
                <Separator/>

                {
                    data && data.list && data.list.length > 0 && (
                        <div>
                            <div className="grid grid-cols-3">
                                {data.list.map((artwork: Artwork, index) => (
                                    <div key={index}
                                         className="rounded-lg border shadow-md p-5 mt-10">
                                        <div className="w-full h-[450px] rounded-lg overflow-hidden relative">
                                            <Image
                                                src={artwork.url}
                                                alt={artwork.title}
                                                fill
                                                style={{objectFit: "cover"}}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center mt-3 mb-3">
                                            <p className="font-bold">{artwork.title}</p>
                                            <div className="rounded-full bg-[rgba(238,87,76,0.3)]
                                            text-[#ee574c] text-[0.75em] font-bold p-2 w-[75px]
                                            text-center overflow-hidden ml-auto"
                                            >
                                                {artwork.tag}
                                            </div>
                                        </div>
                                        <p className="text-gray-500 float-left">{tokenLengths ? tokenLengths[index].toString() : 0} minted</p>
                                        <Button className="bg-sky-400 hover:bg-sky-500 float-right ml-2">
                                            View
                                        </Button>
                                        <Button variant="destructive" className="float-right">
                                            Mint
                                        </Button>

                                    </div>
                                ))}
                            </div>
                            {data?.nextId && (
                                <Button onClick={loadMore} disabled={loadingMore}>
                                    {loadingMore ? 'Loading...' : 'Load more'}
                                </Button>
                            )}
                        </div>

                    )

                }


            </div>
        </div>
    )
}