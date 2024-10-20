"use client";
import Image from "next/image";
import ClickableButton from "./clickable-button";
import DetailTab from "./detail-tab";
import {useAccount, useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {useRequest} from "ahooks";
import {getUserByAddress} from "@/backend/actions/users";
import {formatEther} from "viem";
import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";
import {getTokenByUri} from "@/backend/actions/token";
import {useState} from "react";
import {isBlank} from "@/utils/common";
import BuyButton from "@/components/buy-button";

export interface DetailCardProps {
    tokenId: bigint;
}

export default function DetailCard({tokenId}: DetailCardProps) {

    const {isConnected,address} = useAccount()

    const [authorAddress,setAuthorAddress] = useState('');

    const {data: jsonUrl} = useReadContract({
        ...paletteContractConfig,
        functionName: "tokenURI",
        args: [tokenId],
    });

    const {data: price} = useReadContract({
        ...paletteContractConfig,
        functionName: "getPrice",
        args: [tokenId],
    });

    const {data: isSellable} = useReadContract({
        ...paletteContractConfig,
        functionName: "getIsSellable",
        args: [tokenId],
    });


    const {data: ownerAddress} = useReadContract({
        ...paletteContractConfig,
        functionName: "ownerOf",
        args: [tokenId],
    });

    const {data: artwork} = useRequest(getTokenByUri, {
        ready: !!jsonUrl,
        defaultParams: [jsonUrl!],
        onSuccess: (res) => {
            if (res.attribution.authorAddress) {
                setAuthorAddress(res.attribution.authorAddress);
            }
        }
    });


    const {data: owner} = useRequest(getUserByAddress, {
        defaultParams: [ownerAddress!],
        ready: !!ownerAddress,
    })

    const {data: author} = useRequest(getUserByAddress, {
        defaultParams: [authorAddress!],
        ready: !isBlank(authorAddress),
    })

    return (
        artwork && (
            <div className="flex mt-5 justify-center mx-auto align-center">
                <div className="w-[600px] h-[720px] rounded-sm overflow-hidden relative">
                    <Image
                        src={artwork.image}
                        alt={artwork.name}
                        fill
                        style={{objectFit: "cover"}}
                    />
                </div>
                <div className="mt-4 ms-12 ml-2">
                <h2 className="text-[#183b56] font-bold text-3xl leading-6 mb-7 mt-12">
                        {artwork.name}
                    </h2>
                    <div className="mt-3 flex justify-end ms-96">
                        {artwork.attribution.tags.split(",").map((tag, index) => (
                            <ClickableButton
                                key={index}
                                text={tag}
                                classname="shadow-[0_3px_10px_0px_rgba(31,134,239,0.3)]
                bg-[#fff] p-2 w-fit rounded-full text-sm m-2 pr-3 pl-3"
                            />
                        ))}
                    </div>
                    <DetailTab
                        details={artwork.description}
                        tokenId={tokenId}
                    />

                    <div className="flex flex-wrap">
                        {
                            author &&
                            <div className="pl-10 pr-10 p-3">
                                <div className="flex items-center">
                                    <p className="text-sm font-bold">Author:&nbsp;</p>
                                    <Link href={`/gallery/${author.address}`} className="">
                                        <div className="">
                                            <Avatar className="w-[25px] h-[25px]">
                                                <AvatarImage
                                                    src={author.avatar!}
                                                    alt="author"
                                                />
                                            </Avatar>
                                        </div>
                                    </Link>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 text-xs">
                                            {author.nickname}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }

                        {
                            owner &&
                            <div className="pl-10 pr-10 p-3">
                                <div className="flex items-center">
                                    <p className="text-sm font-bold">Owner:&nbsp;</p>
                                    <Link href={`/gallery/${owner.address}`} className="">
                                        <div className="">
                                            <Avatar className="w-[25px] h-[25px]">
                                                <AvatarImage
                                                    src={owner.avatar!}
                                                    alt="author"
                                                />
                                            </Avatar>
                                        </div>
                                    </Link>
                                    <div className="flex-grow-1 ms-2">
                                        <p className="mb-0 text-[#183b56] text-xs">
                                            {owner.nickname}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <hr className="my-4"/>
                    <div className="row ">
                        <div className="mt-3 flex">

                            <div className="text-[#183b56] text-sm pl-3">

                                {isSellable ?
                                    (price ?
                                        <>
                                            <h6 className="fw-bold text-[#183b56] font-bold mb-1 text-sm">
                                                PRICE :
                                            </h6>
                                            <p>
                                                {formatEther(price)}
                                                <span className="text-[#6b6e6f]"> ETH</span>
                                            </p>
                                        </>
                                        : '') :
                                    <p className="text-green-700 font-bold">Not for sale</p>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-start mt-4">
                        {
                            isSellable && isConnected && ownerAddress && ownerAddress !== address && price &&
                            <BuyButton
                                price={price}
                                tokenId={tokenId}
                                className="text-[#fff]
                                bg-[#ee574c] pl-7 pr-7 p-3 w-fit
                                rounded-full text-xs m-2 font-sans"
                            />
                        }

                    </div>
                </div>
            </div>
        )
    );
}
