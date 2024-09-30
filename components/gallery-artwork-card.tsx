import {Artwork} from "@/types";
import Image from "next/image";
import {Button} from "@/components/ui/button";

interface GalleryArtworkCardProps {
    artwork: Artwork
    tokenLength: string
}

export default function GalleryArtworkCard({artwork, tokenLength}: GalleryArtworkCardProps) {
    return (
        <div
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
            <p className="text-gray-500 float-left">{tokenLength} minted</p>
            <Button className="bg-sky-400 hover:bg-sky-500 float-right ml-2">
                View
            </Button>
            <Button variant="destructive" className="float-right">
                Mint
            </Button>

        </div>
    )
}