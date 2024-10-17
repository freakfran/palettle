'use client'
import PicCard from "@/components/pic-card";
import Autoplay from "embla-carousel-autoplay"
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import React from "react";

interface MoveCarouselProps {
    tokenIds: string[]
}



export default function MoveCarousel({tokenIds}: MoveCarouselProps) {
    const plugin = React.useRef(
        Autoplay({
            delay: 2000,
            jump:true
        })
    )
    return (
        <Carousel
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
            className="w-full"
        >
            <CarouselContent>
                {tokenIds.map(id => (
                    <CarouselItem key={id} className="basis-1/4">
                        <PicCard tokenId={id}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}