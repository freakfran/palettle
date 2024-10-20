"use client";
import React, {useState} from "react";
import DetailTabHistory from "./detail-tab-history";
import {paletteContractConfig} from "@/utils/pattle";
import {useReadContract} from "wagmi";


interface DetailCardProps {
    details: string;
    tokenId: bigint;
}

export default function DetailTab({details, tokenId}: DetailCardProps) {
    const {data: history} = useReadContract({
        ...paletteContractConfig,
        functionName: "getHistory",
        args: [tokenId],
    });

    const [sellTab, setSellTab] = useState<"tab1" | "tab2">("tab1");

    return (
        <div
            className="shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)]
    p-5 bg-white mt-6 mb-6 rounded-3xl"
        >
            <ul className="justify-start flex flex-wrap">
                <li className="text-[#183b56] ">
                    <button
                        className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
                        bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
                        style={{
                            backgroundColor: sellTab === "tab1" ? "#183b56" : "#fff",
                            color: sellTab === "tab1" ? "white" : "black",
                        }}
                        onClick={() => setSellTab("tab1")}
                    >
                        Details
                    </button>
                </li>
                <li className="text-[#183b56] ">
                    <button
                        className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
                        bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
                        style={{
                            backgroundColor: sellTab === "tab2" ? "#183b56" : "#fff",
                            color: sellTab === "tab2" ? "white" : "black",
                        }}
                        onClick={() => setSellTab("tab2")}
                    >
                        History
                    </button>
                </li>
            </ul>
            <div className="mt-4 ps-3">
                {sellTab === "tab1" ?
                    <div className="">
                        <p className="text-[#6b6e6f]">{details}</p>
                    </div> :
                    history ? (
                        <div className="flex flex-wrap">
                            <div
                                className="flex items-center rounded-3xl
                                shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)] p-7 mt-5">
                                {
                                    history.map((item, index) => {
                                        return <DetailTabHistory
                                            key={index}
                                            seller={item.seller}
                                            buyer={item.buyer}
                                            historyPrice={item.price}
                                            time={item.timestamp}
                                        />
                                    }

                                    )
                                }
                            </div>
                        </div>
                    ) : ''
                }
            </div>
        </div>
    );
}
