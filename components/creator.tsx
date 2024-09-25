import Image from "next/image";

export interface CreatorProps {
    name: string;
    image: string;
    value: string;
}

export default function Creator({name, image, value}: CreatorProps) {
    return (
        <div className="bg-white rounded-full flex p-5">
            <Image className="rounded-full" src={image} alt={name} width={70} height={70}/>
            <div className="flex flex-col justify-evenly">
                <div className="text-xl font-bold overflow-ellipsis">
                    {name}
                </div>

                <div className="text-sm font-bold text-[#1d9b7b]">
                    {value}
                </div>
            </div>
        </div>
    )
}