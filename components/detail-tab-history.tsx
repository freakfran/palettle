"use client"
import {getUserByAddress} from "@/backend/actions/users";
import { useState } from "react";

interface DetailTabHistoryProps {
  buyer: string;
  historyPrice: bigint;
  time: bigint;
}
export default function DetailTabHistory({ buyer, historyPrice, time } : DetailTabHistoryProps) {
    const [author, setAuthor] = useState("");
    const [authorImg, setAuthorImg] = useState("");
    
    
    if (buyer) {
        const buyerImg = getUserByAddress(buyer)
    }
    setAuthorImg(buyerImg.avatar);
  return (
    <div>
      <div className="flex-shrink-0">
        <div className="">
          <img
            src={buyerImg}
            alt={nickname}
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
            {historyPrice} ETH
          </span>
          <span className="text-[#6b6e6f]">{buyer}</span>
        </p>
        <p className="mb-0 text-[#6b6e6f] text-sm mt-1">{time}</p>
      </div>
    </div>
  );
}
