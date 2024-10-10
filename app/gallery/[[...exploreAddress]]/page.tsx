'use client'
import {Separator} from "@/components/ui/separator";
import UploadPicDialog from "@/components/upload-pic-dialog";
import {useAccount, useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import GalleryContainer from "@/components/gallery-container";
import {getUserByAddress} from "@/backend/actions/users";
import {useRequest} from "ahooks";


export default function GalleryPage({params}: { params: { exploreAddress: string } }) {
    const {isConnected, address} = useAccount();

    const {data: tokenIds} = useReadContract({
        ...paletteContractConfig,
        functionName: 'getUserTokenIds',
        args: [address!],
        query: {
            enabled: isConnected && !!address,
        }
    });


    const {data, run} = useRequest(getUserByAddress, {
        manual: true
    })

    const isMy = !params.exploreAddress || params.exploreAddress === address
    if (!isMy) {
        run(params.exploreAddress!)
    }


    return (
        <div className="p-[120px] flex flex-col items-center">
            <div className="shadow-md w-full p-[120px]">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-4xl">{isMy ? 'Your ' : data?.nickname + '\'s '}Artworks</h2>
                    {isConnected && <UploadPicDialog/>}
                </div>
                <Separator/>
                {tokenIds && <GalleryContainer tokenIds={tokenIds}/>}
            </div>
        </div>
    )
}