'use client'
import PicCard, {PicCardProps} from "@/components/pic-card";
import Autoplay from "embla-carousel-autoplay"
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import React from "react";

interface MoveCarouselProps {
    items: PicCardProps[]
}

export default function MoveCarousel({items}: MoveCarouselProps) {
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
        >
            <CarouselContent>
                {items.map(pic => (
                    <CarouselItem key={pic.title} className="basis-1/4">
                        <PicCard image={pic.image}
                                 title={pic.title}
                                 tag={pic.tag}
                                 price={pic.price}
                                 author={pic.author}
                                 authorImg={pic.authorImg}/>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}