"use client"
import React, { useState } from "react";
import { DetailCardProps } from "@/components/detail-card";

export default function DeatailTab({
  author,
}: DetailCardProps) {
  const art: DetailCardProps = {
    title: "Create And Sell Your NFTs",
    like: "99k",
    price: "99",
    image:
      "https://i0.hdslb.com/bfs/new_dyn/a43a2be254e0c64de608de3cbfbc1e5f379292351.jpg@1052w_!web-dynamic.avif",
    author: "_犬野子",
    authorImg:
      "https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okm6WAK6rCArtDIkClebACg1rs5AOTEe9AnKAq.jpeg?from=327834062",
    seller: "芙莉莲",
  };

  const tabContent = {
    tab1: (
      <div className="">
        <p className="text-[#6b6e6f]">
          Welcome to Digital Art Gallery! I've been mining my brains out to
          bring you these seeds of the metaverse...We offer a wide range of
          non-fungible tokens, including art, censorship-resistant domain names
          and other collectibles.
        </p>
      </div>
    ),
    tab2: (
      <div className="">
        <p className="text-[#6b6e6f]">
          {" "}
          Today we want to share a design, NFT is a new method of payment on the
          Internet using electronic currency. Each of the NFTs is unique and
          exists.{" "}
        </p>
      </div>
    ),
    tab3: (
      <div className="flex flex-wrap">
        <div className="flex items-center rounded-3xl shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)] p-7 mt-5">
          <div className="flex-shrink-0">
            <div className="avatar-md">
              <img
                src={art.authorImg}
                alt={art.title}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex-grow-1 ms-3">
            <p className="mb-0 text-[#000000] text-sm">
              Bid Accepted By
              <span className="text-[#ee574c] font-bold ms-1 text-xs">
                2 ETH{" "}
              </span>{" "}
              <span className="text-[#6b6e6f]">{author}</span>
            </p>
            <p className="mb-0 text-[#6b6e6f] text-sm mt-1">
              21/04/2021, 10:05{" "}
            </p>
          </div>
        </div>

        <div className="flex items-center rounded-3xl shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)] p-7 mt-5">
          <div className="flex-shrink-0">
            <div className="">
              <img
                src={art.authorImg}
                alt={art.title}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex-grow-1 ms-3">
            <p className="mb-0 text-[#000000] text-sm">
              Bid Accepted By
              <span className="text-[#ee574c] font-bold ms-1 text-xs">
                1 ETH{" "}
              </span>{" "}
              <span className="text-[#6b6e6f]">{author}</span>
            </p>
            <p className="mb-0 text-[#6b6e6f] text-sm mt-1">
              21/04/2021, 10:05{" "}
            </p>
          </div>
        </div>
      </div>
    ),
  };

  const [SellTab, setSellTab] = useState<"tab1" | "tab2" | "tab3">("tab1");
  const handleTabClick = (newTab: "tab1" | "tab2" | "tab3") => {
    setSellTab(newTab);
  };

  return (
    <div className="shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)]
    p-5 bg-white mt-6 mb-6 rounded-3xl">
        <ul className="justify-start flex flex-wrap">
          <li className="text-[#183b56] ">
            <button
              className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              onClick={() => handleTabClick("tab1")}
            >
              Details
            </button>
          </li>
          <li className="text-[#183b56] ">
            <button
              className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              onClick={() => handleTabClick("tab2")}
            >
              Bid
            </button>
          </li>
          <li className="text-[#183b56] ">
            <button
              className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              onClick={() => handleTabClick("tab3")}
            >
              History
            </button>
          </li>
        </ul>
        <div className="mt-4 ps-3">{tabContent[SellTab]}</div>
    </div>
  );
}
