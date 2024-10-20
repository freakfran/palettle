'use client'
import {getUserByAddress} from "@/backend/actions/users";
import Image from "next/image";
import {useRequest} from "ahooks";
import {formatEther} from "viem";
import Link from "next/link";

interface DetailTabHistoryProps {
    buyer: string;
    seller: string;
    historyPrice: bigint;
    time: bigint;
}


export default function DetailTabHistory({buyer, seller, historyPrice, time}: DetailTabHistoryProps) {
    const isAuthor = buyer === '0x0000000000000000000000000000000000000000';

    const {data: user} = useRequest(getUserByAddress, {
        defaultParams: [isAuthor ? seller : buyer],
    })


    return (
        (user) &&
        <div className="flex items-center">
            <div className="flex-shrink-0">
                <Link href={`/gallery/${user.address!}`} target="_blank" className="">
                    <Image
                        src={user.avatar!}
                        alt={user.nickname!}
                        width={50}
                        height={50}
                        className="rounded-full"
                    />
                </Link>
            </div>
            <div className="flex-grow-1 ms-3">
                <p className="mb-0 text-[#000000] text-sm">
                    {isAuthor ? 'Created By ' : 'Bought By '}
                    {
                        !isAuthor &&
                        <span className="text-[#ee574c] font-bold ms-1 text-xs">
                        {formatEther(historyPrice)} ETH
                        </span>
                    }
                    <Link href={`/gallery/${user.address!}`} target="_blank" className="text-[#010708]">@{user.nickname!}</Link>
                </p>
                <p className="mb-0 text-[#6b6e6f] text-sm mt-1">{new Date(Number(time) * 1000).toLocaleString('en-US', {timeZone: 'UTC'})}</p>
            </div>
        </div>
    );
}
