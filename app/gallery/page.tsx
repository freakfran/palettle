'use client'
import {Separator} from "@/components/ui/separator";
import UploadPicDialog from "@/components/upload-pic-dialog";
import {useAccount, useReadContract} from "wagmi";
import {useInfiniteScroll} from "ahooks";
import {useEffect, useState} from "react";
import {getArtworksByAuthor} from "@/backend/actions/token";
import {Button} from "@/components/ui/button";
import {Artwork} from "@/types";
import {paletteContractConfig} from "@/utils/pattle";
import GalleryArtworkCard from "@/components/gallery-artwork-card";


export default function GalleryPage() {
    const {isConnected, address} = useAccount();

    const {
        data,
        loadMore,
        reload,
        loadingMore,
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
        if (address) {
            reload();
        }
    }, [address, reload]);


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
                                    <GalleryArtworkCard
                                        key={index}
                                        artwork={artwork}
                                        tokenLength={tokenLengths && tokenLengths[index] ? tokenLengths[index].toString() : '0'}/>
                                ))}
                            </div>
                            {data?.nextId && (
                                <div className="text-center mt-3">
                                    <Button className="ml-auto mr-auto" variant="destructive" onClick={loadMore}
                                            disabled={loadingMore}>
                                        {loadingMore ? 'Loading...' : 'Load more'}
                                    </Button>
                                </div>

                            )}
                        </div>

                    )

                }


            </div>
        </div>
    )
}