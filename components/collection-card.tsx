import Image from "next/image";
import Link from "next/link";

export interface CollectionCardProps {
    images: string[];
    title: string;
    author: string;
    authorImg: string;
    price: string;
}


export default function CollectionCard({images, title, author, authorImg, price}: CollectionCardProps) {
    return (
        <div className="basis-1/4 h-[500px] flex flex-col">
            <div className="p-5 rounded-xl bg-slate-200 h-4/5" id="pics">
                <div className="rounded-xl overflow-hidden h-full">
                    <div className="flex justify-between"
                         style={{height: `${images.length === 2 ? '50%' : '33.3%'}`}}
                         id="topPics">

                        {images.slice(1).map((image, index) => (
                            <div
                                className="relative h-full"
                                style={{width: `${images.length === 2 ? '100%' : images.length === 3 ? '47%' : '30%'}`}}
                                key={index}>
                                <Image src={image} alt={title} fill={true} style={{objectFit: "cover"}}/>
                            </div>
                        ))}


                    </div>

                    <div className="overflow-hidden pt-4 relative bg-slate-100 mt-4"
                         style={{height: `${images.length === 2 ? '50%' : '66.7%'}`}} id="bottemPic">
                        <Image src={images[0]} alt={title} fill={true} style={{objectFit: "cover"}}/>
                    </div>
                </div>

            </div>

            <div className="h-1/5 mt-3">
                <div className="flex">
                    <h6 className="font-bold text-lg">{title}</h6>
                    <p className="font-medium text-[#e46e2a] text-sm ml-auto pt-1">{price} ETH</p>
                </div>
                <div className="flex items-center">
                    <p className="text-gray-400 text-sm font-bold overflow-ellipsis">
                        {images.length} items · by &nbsp;
                    </p>
                    <Link className="inline-block rounded-full w-10 h-10 relative overflow-hidden leading-10" href="/">
                        <Image
                            src={authorImg}
                            alt={author}
                            fill={true}
                            style={{objectFit: "cover"}}
                        />
                    </Link>
                    &nbsp;
                    <p className="text-sm font-bold overflow-ellipsis">{author}</p>
                </div>

            </div>
        </div>
    )
}