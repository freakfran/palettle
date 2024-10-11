'use client'


import {useInfiniteScroll} from "ahooks";
import GalleryArtworkCard from "@/components/gallery-artwork-card";
import {Button} from "@/components/ui/button";

interface GalleryContainerProps {
    tokenIds: readonly bigint[],
    isMy: boolean
}

export default function GalleryContainer({tokenIds,isMy}: GalleryContainerProps) {
    async function getLoadMoreList(page: number, pageSize: number) {
        const start = (page - 1) * pageSize;
        const end = page * pageSize;
        return {
            list: tokenIds.slice(start, end),
            total: tokenIds.length,
        };
    }

    const PAGE_SIZE = 6;
    const {
        data,
        loadMore,
        loadingMore
    } = useInfiniteScroll((d) => {
        const page = d ? Math.ceil(d.list.length / PAGE_SIZE) + 1 : 1;
        return getLoadMoreList(page, PAGE_SIZE);
    });

    const hasMore = data && data.list.length < data.total;

    return (
        data && (
            <div>
                <div className="grid grid-cols-3">
                    {data.list.map((tokenId: bigint, index) => (
                        <GalleryArtworkCard
                            key={index}
                            tokenId={tokenId}
                            isMy={isMy}
                        />
                    ))}
                </div>
                {hasMore && (
                    <div className="text-center mt-3">
                        <Button className="ml-auto mr-auto" variant="destructive" onClick={loadMore}
                                disabled={loadingMore}>
                            {loadingMore ? 'Loading...' : 'Load more'}
                        </Button>
                    </div>
                )}
            </div>
        )
    )
}