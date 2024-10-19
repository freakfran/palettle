"use client"
import Image from "next/image";
import ClickableButton from "./clickable-button";
import DetailTab from "./detail-tab";
import {useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {useState} from "react";
import {useRequest} from "ahooks";
import {Metadata} from "@/types";
import {getUserByAddress} from "@/backend/actions/users";

export interface DetailCardProps {
    tokenId: bigint
}

export default function DetailCard({tokenId}: DetailCardProps) {
    const imageStyle = {
        width: "550px",
        height: "720px",
        borderRadius: "3%",
        minWidth: "550px",
        minHeight: "720px",
    };

    const [authorImg, setAuthorImg] = useState("");


    const {data: jsonUrl} = useReadContract({
        ...paletteContractConfig,
        functionName: "tokenURI",
        args: [tokenId],
    });

    const {data: getprice} = useReadContract({
        ...paletteContractConfig,
        functionName: "getPrice",
        args: [tokenId]
    });

    const price = getprice?.toString();

    const {data: owner} = useReadContract({
        ...paletteContractConfig,
        functionName: "ownerOf",
        args: [tokenId]
    })

    async function fetchArtwork(url: string) {
        const data = await fetch(url);
        const metadata: Metadata = await data.json();
        if (metadata.attribution.authorAddress) {
            const author = await getUserByAddress(metadata.attribution.authorAddress)
            if (author && author.avatar) {
                setAuthorImg(author.avatar)
            }
        }
        return metadata;
    }

    const {data: artwork} = useRequest(fetchArtwork, {
        ready: !!jsonUrl,
        defaultParams: [jsonUrl!],
    })


    return (
        artwork && (
            <div className="flex mt-5 justify-center mx-auto align-center">
                <div className="">
                    <Image
                        src={artwork.image}
                        alt={artwork.name}
                        width={0}
                        height={0}
                        sizes="300vw"
                        style={imageStyle}
                    />
                </div>
                <div className="mt-4 ms-12 ml-2">
                    <h2 className="text-[#183b56] font-bold text-3xl leading-6 mb-7 mt-12">
                        {artwork.name}
                    </h2>
                    <div className="mt-3 flex justify-start">
                        <div className="flex ms-96">
                            <div className="Like">

                                {
                                    artwork.attribution.tags.split(",").map((tag,index) => (
                                    <ClickableButton
                                        key={index}
                                        text={tag}
                                        classname="shadow-[0_3px_10px_0px_rgba(31,134,239,0.3)]
                bg-[#fff] p-2 w-fit rounded-full text-sm m-2 pr-3 pl-3"
                                    />

                                ))
                                }
                            </div>

                        </div>
                    </div>
                    <DetailTab authorImg={authorImg} name={artwork.name} author={artwork.attribution.author}
                               details={artwork.description}/>

                    <div className="flex flex-wrap">
                        <div className="pl-10 pr-10 p-3">
                            <div className="flex items-center">
                                <div className="">
                                    <div className="">
                                        <Image
                                            src={authorImg}
                                            alt="author"
                                            width={25}
                                            height={25}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className="mb-0 text-[#183b56] text-xs">
                                        {artwork.attribution.author}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pl-10 pr-10 p-3">
                            <div className="flex items-center">
                                <div className="">
                                    <div className=" ">
                                        <Image
                                            src={authorImg}
                                            alt="author"
                                            width={25}
                                            height={25}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                    <p className="mb-0 text-[#183b56] text-xs">
                                        {owner}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <div className="row ">
                        <div className="mt-3">
                            <h6 className="fw-bold text-[#183b56] font-bold mb-1 text-sm">
                                BID
                            </h6>
                            <p className="text-[#183b56] text-sm mt-2">
                                <p>
                                    {price}
                                    <span className="text-[#6b6e6f]"> ETH</span>
                                </p>

                            </p>
                        </div>
                    </div>

                    <div className="flex justify-start mt-4">
                        <button
                            className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)] text-[#fff]
      bg-[#ee574c] pl-7 pr-7 p-3 w-fit rounded-full text-xs m-2 font-sans"
                        >
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}
