'use client'

import Creator, {CreatorProps} from "@/components/creator";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";

interface CreatorCarouselProps {
    className?: string;
    creators: CreatorProps[]
}

export default function CreatorCarousel({creators,className}: CreatorCarouselProps) {
    const plugin = React.useRef(
        Autoplay({
            delay: 2000,
            jump:true
        })
    )


    return (
        <Carousel className={className}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {creators.map(creator => (
                    <CarouselItem key={creator.name} className="basis-1/5">
                        <Creator name={creator.name} value={creator.value} image={creator.image}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}