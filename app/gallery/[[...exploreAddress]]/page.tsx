'use client'
import {Separator} from "@/components/ui/separator";
import UploadPicDialog from "@/components/upload-pic-dialog";
import {useAccount, useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import GalleryContainer from "@/components/gallery-container";
import {getUserByAddress} from "@/backend/actions/users";
import {useRequest} from "ahooks";
import {fetchAllTags} from "@/backend/actions/token";
import {useEffect, useState} from "react";
import {Avatar, AvatarImage} from "@/components/ui/avatar";


export default function GalleryPage({params}: { params: { exploreAddress: string } }) {
    const {isConnected, address} = useAccount();

    const {data: allTags, loading: loadingTags} = useRequest(fetchAllTags)
    const [isMy, setIsMy] = useState(false);

    const {data: tokenIds} = useReadContract({
        ...paletteContractConfig,
        functionName: 'getUserTokenIds',
        args: [params.exploreAddress ? params.exploreAddress[0] as `0x${string}` : address!],
        query: {
            enabled: params.exploreAddress!==undefined || address!==undefined,
        }
    });


    const {data, run} = useRequest(getUserByAddress, {
        manual: true
    })

    useEffect(() => {
        if (address) {
            if (!params.exploreAddress || params.exploreAddress[0] === address) {
                setIsMy(true)
                run(address)
            } else {
                setIsMy(false)
                run(params.exploreAddress[0])
            }
        }
    }, [params.exploreAddress, address, run]);


    return (
        data &&
        <div className="p-[120px] flex flex-col items-center">
            <div className="shadow-md w-full p-[120px]">
                <div className="mb-16 flex items-center">
                    <Avatar className="w-[100px] h-[100px]">
                        <AvatarImage src={data.avatar!} alt="avatar"/>
                    </Avatar>
                    <p className="ml-10 font-bold text-gray-400 text-lg">
                        {data.description ? data.description : ''}
                    </p>
                </div>
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-4xl">
                        {
                            isMy ? 'Your ' : data?.nickname + '\'s '
                        }Artworks
                    </h2>
                    {isConnected && !loadingTags && isMy && <UploadPicDialog allTags={allTags!}/>}
                </div>
                <Separator/>
                {tokenIds && <GalleryContainer isMy={isMy} tokenIds={tokenIds}/>}
            </div>
        </div>
    )
}