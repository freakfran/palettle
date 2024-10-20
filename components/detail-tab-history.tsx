"use client";
import { getUserByAddress } from "@/backend/actions/users";
import { useState } from "react";
import { useEffect } from "react";

interface DetailTabHistoryProps {
  buyer: string;
  historyPrice: bigint;
  time: bigint;
}
export default function DetailTabHistory({
  buyer,
  historyPrice,
  time,
}: DetailTabHistoryProps) {
  const [author, setAuthor] = useState("");
  const [authorImg, setAuthorImg] = useState("");
  const HistoryPrice = historyPrice.toString();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (buyer) {
          const buyerData = await getUserByAddress(buyer);
          if (buyerData && buyerData.avatar) {
            setAuthorImg(buyerData.avatar);
            setAuthor(buyerData.nickname!);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUser();
  }, [buyer]);

  return (
    <div>
      <div className="flex-shrink-0">
        <div className="">
          <img
            src={authorImg}
            alt={author}
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
            {HistoryPrice} ETH
          </span>
          <span className="text-[#010708]">{author}</span>
        </p>
        <p className="mb-0 text-[#6b6e6f] text-sm mt-1">{time}</p>
      </div>
    </div>
  );
}
