"use client";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ExploreCard from "./explore-card";
import {useState} from "react";
import {useInfiniteScroll} from "ahooks";
import {fetchArtworksBySearch} from "@/backend/actions/token";
import {Button} from "@/components/ui/button";

interface TabsPanelProps {
    tags: string[];
}

export default function TabsPanel({tags}: TabsPanelProps) {
    const [selected, setSelected] = useState("ALL");

    const {
        data: answer,
        loadMore,
        loadingMore
    } = useInfiniteScroll(
        (d) =>
            fetchArtworksBySearch(
                d ? d?.limit : 8,
                d ? d?.offset + d?.limit : 0,
                undefined,
                selected === "ALL" ? undefined : selected,
            ),
        {
            reloadDeps: [selected]
        }
    );

    return (
        <Tabs
            defaultValue="ALL"
            className="ml-auto mr-auto w-full "
            onValueChange={(value) => setSelected(value)}
        >
            <div className="mb-5">
                <div>
                    <h2 className="font-bold text-3xl text-[#183b56]">Explore</h2>
                </div>
            </div>
            <TabsList className="h-auto rounded-full w-fit p-4">
                <TabsTrigger key="ALL" className="" value="ALL">
                    ALL
                </TabsTrigger>
                {tags.map((tag) => (
                    <TabsTrigger key={tag} className="text-base ml-8" value={tag}>
                        {tag}
                    </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent className="flex flex-wrap gap-5" value={selected}>
                {answer &&
                    answer.list.map((tokenId, index) => (
                        <ExploreCard className="mb-5 flex-[0_0_calc(25%-20px)]" key={index} tokenId={tokenId} />
                    ))}

            </TabsContent>
            {
                answer?.total > answer?.limit + answer?.offset ? (
                    <div className="text-center mt-3">
                        <Button className="ml-auto mr-auto" variant="destructive" onClick={loadMore}
                                disabled={loadingMore}>
                            {loadingMore ? 'Loading...' : 'Load more'}
                        </Button>
                    </div>
                ) : null
            }
        </Tabs>
    );
}
