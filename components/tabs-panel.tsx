"use client";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ExploreCard from "./explore-card";
import {useRef, useState} from "react";
import {useInfiniteScroll} from "ahooks";
import {fetchArtworksBySearch} from "@/backend/actions/token";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import {isBlank} from "@/utils/common";

interface TabsPanelProps {
    tags: string[];
}

export default function TabsPanel({tags}: TabsPanelProps) {
    const [selected, setSelected] = useState("ALL");
    const [search, setSearch] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);


    const {
        data: answer,
        loadMore,
        loadingMore
    } = useInfiniteScroll(
        (d) =>
            fetchArtworksBySearch(
                d ? d?.limit : 8,
                d ? d?.offset + d?.limit : 0,
                isBlank(search) ? undefined : search,
                selected === "ALL" ? undefined : selected,
            ),
        {
            reloadDeps: [selected, search],
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

            <div className="relative pr-10 mb-5 w-1/2">
                <Input
                    className="relative py-[15px] pl-[15px] pr-[50px] h-[55px] w-full text-lg bg-white"
                    placeholder="Search..."
                    name="search"
                    id="search"
                    ref={inputRef}
                />
                <Search className="absolute top-[15px] right-[55px] cursor-pointer" onClick={()=>{
                    if (inputRef.current) {
                        setSearch(inputRef.current.value)
                    }
                }}/>
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
                        <ExploreCard className="mb-5 flex-[0_0_calc(25%-20px)]" key={index} tokenId={tokenId}/>
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
