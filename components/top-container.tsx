'use client'
import {fetchRecommendArtworks} from "@/backend/actions/token";
import MoveCarousel from "@/components/move-carousel";
import {useAccount} from "wagmi";
import {useRequest} from "ahooks";


export default function TopContainer() {
    const backgroundUrl = './bg-index.png';
    const {address} = useAccount()

    const {data: tokenIds} = useRequest(async () => {
        return (await fetchRecommendArtworks(address)).map(item => item.id)
    },{
        refreshDeps: [address],
    })

    return (
        tokenIds &&
        <section
            className="overflow-hidden relative min-h-[100vh]
                flex items-center bg-white pt-[150px]
                bg-center
                bg-no-repeat"
            style={{backgroundImage: `url(${backgroundUrl})`}}
        >
            <div className="container ml-auto mr-auto">
                <div className="flex flex-wrap h-1/2 bg-transparent mb-5">
                    <div className="w-1/2">
                        <h1 className="text-[3.5rem] font-bold">
                            Illuminate Your <span className="text-[#ee574c]"> Life </span> with Art
                        </h1>
                        {/*<SearchBar/>*/}
                    </div>
                </div>
                <div className="flex flex-wrap h-1/2 bg-transparent mt-10">
                    <MoveCarousel tokenIds={tokenIds}/>
                </div>
            </div>
        </section>
    );
}