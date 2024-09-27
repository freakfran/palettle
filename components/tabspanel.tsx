'use client'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import ExploreCard, {ExploreCardProps} from "./explore-card";
import {useState} from "react";

interface TabsPanelProps {
    tags: string[];
}

function getArtworks(tag: string) {
    const seed = tag.length;

    const artworks: ExploreCardProps[] = [];
    for (let i = 0; i < 8; i++) {
        artworks.push({
            author: "test",
            authorImg: `https://picsum.photos/id/${seed + i}/200/300`,
            image: `https://picsum.photos/id/${seed + i + 1}/200/300`,
            price: "0.08",
            stock: "3",
            title: "Cool art",
        })
    }

    return artworks;
}

export default function TabsPanel({tags}: TabsPanelProps) {
    const [selected, setSelected] = useState('ALL');

    const answer = getArtworks(selected);
    return (
        <Tabs defaultValue="ALL"
              className="ml-auto mr-auto w-full"
              onValueChange={(value) => setSelected(value)}>
            <TabsList className="w-full h-auto">
                <TabsTrigger key="ALL" className="text-3xl" value="ALL">
                    ALL
                </TabsTrigger>
                {tags.map(tag => (
                    <TabsTrigger key={tag} className="text-3xl ml-8" value={tag}>
                        {tag}
                    </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent className="columns-4" value={selected}>
                {
                    answer &&
                    answer.map((artwork, index) => (
                        <ExploreCard
                            className="mb-5"
                            key={index}
                            {...artwork}
                        />
                    ))
                }
            </TabsContent>


        </Tabs>
    );
}
