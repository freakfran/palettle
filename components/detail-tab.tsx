"use client"
import React, { useState } from "react";

interface DetailCardProps {
  authorImg: string
  name: string
  author: string
  details: string
}

export default function DetailTab({ authorImg, name, author,details } : DetailCardProps) {
  const tabContent = {
    tab1: (
      <div className="">
        <p className="text-[#6b6e6f]">
          {details}
        </p>
      </div>
    ),
    tab2: (
      <div className="flex flex-wrap">
        <div className="flex items-center rounded-3xl shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)] p-7 mt-5">
          <div className="flex-shrink-0">
            <div className="avatar-md">
              <img
                src={authorImg}
                alt={name}
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
                src={authorImg}
                alt={name}
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

  const [SellTab, setSellTab] = useState<"tab1" | "tab2">("tab1");
  const handleTabClick = (newTab: "tab1" | "tab2") => {
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
              History
            </button>
          </li>
        </ul>
        <div className="mt-4 ps-3">{tabContent[SellTab]}</div>
    </div>
  );
}
