import Image from "next/image";
import {cn} from "@/lib/utils";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Button} from "@/components/ui/button";

export interface ExploreCardProps {
    className?: string;
    author: string;
    authorImg: string;
    image: string;
    title: string;
    // stock: string;
    price: string;
}

export default function ExploreCard({
                                        className,
                                        author,
                                        authorImg,
                                        image,
                                        title,
                                        price,
                                    }: ExploreCardProps) {
    return (
        <div
            className={
                cn("bg-white flex flex-col break-words p-[20px] rounded-lg shadow-lg",
                    className)
            }
        >
            <div className="mb-2 flex items-center">
                <Avatar>
                    <AvatarImage src={authorImg} alt={author}/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h6 className="ml-2 font-bold text-[14px]">{author}</h6>
            </div>

            <div className="w-auto h-80 overflow-hidden relative rounded-2xl mb-2">
                <Image src={image} alt={title} fill={true} style={{objectFit: "cover"}}/>
            </div>

            <div>
                <h6 className="font-bold text-lg">{title}</h6>
                <div className="flex justify-between my-2">
                    {/*<p className="font-medium text-[#6b6e6f] text-sm">{stock} in stock</p>*/}
                    <p className="font-medium text-green-700 text-sm">{price} ETH</p>
                </div>
            </div>

            <hr className="my-2"/>

            <Button variant="destructive">
                View
            </Button>

        </div>
    );
}
