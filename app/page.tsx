import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import SearchBar from "@/components/search-bar";
import PicCard from "@/components/pic-card";

export default function Home() {
    const backgroundUrl = './bg-index.png'
    return (
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
                        <SearchBar/>
                    </div>
                </div>
                <div className="flex flex-wrap h-1/2 bg-transparent">
                    <PicCard
                        image={'https://i0.hdslb.com/bfs/new_dyn/a43a2be254e0c64de608de3cbfbc1e5f379292351.jpg@1052w_!web-dynamic.avif'}
                        title={'miku'}
                        tag={'初音未来'}
                        price={'10'}
                        author={'极夜繁声'}
                        authorImg={'https://i2.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg'}/>
                </div>
            </div>
        </section>
    );
}
