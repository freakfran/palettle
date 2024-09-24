import Image from "next/image";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

interface PicCardProps {
    image: string,
    title: string,
    tag: string,
    price: string,
    author: string,
    authorImg: string
}


export default function PicCard({image, title, tag, price, author, authorImg}: PicCardProps) {
    return (
        <div
            className="bg-white relative flex flex-col break-words p-[20px]
                rounded-lg shadow-lg"
        >
            <div className="rounded-full bg-[rgba(238,87,76,0.3)]
                text-[#ee574c] text-[0.75em] font-bold p-2 w-fit ml-auto mb-2"
            >
                {tag}
            </div>

            <div className="max-w-[212px] max-h-[159px] overflow-hidden rounded-2xl mb-2">
                <Image src={image} alt={title} width={212} height={159}/>
            </div>

            <div>
                <h6 className="font-bold text-lg">{title}</h6>
                <p className="font-medium text-[#e46e2a] text-sm">{price} ETH</p>

                <div className="mt-3 flex items-center">
                    <Image className="rounded-full" src={authorImg} alt={author} width={40} height={40}/>
                    <h6 className="ml-2 font-bold text-[14px]">{author}</h6>
                </div>
            </div>

        </div>
    )
}