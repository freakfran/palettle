import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import SearchBar from "@/components/search-bar";
import PicCard, {PicCardProps} from "@/components/pic-card";
import MoveCarousel from "@/components/move-carousel";

/**
 * 搜索框+轮播图
 */
function renderTop() {
    const backgroundUrl = './bg-index.png';
    const arts: PicCardProps[] = [
        {
            image: 'https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/oEVmECroFzAwUFAvAKfAA9lADAlgoC9fIlt45h~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&s=PackSourceEnum_AWEME_DETAIL&sc=image&se=false&x-expires=1729767600&x-signature=9jlJn1UqJf2hvEmbSIfOxIkk84w%3D',
            title: '芙莉莲',
            tag: 'anime',
            price: '100',
            author: '_犬野子',
            authorImg: 'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okm6WAK6rCArtDIkClebACg1rs5AOTEe9AnKAq.jpeg?from=327834062'
        },
        {
            image: 'https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/oACDC8nx9AAhPQA0fADIIFCAQA8guGAJAlbexA~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&s=PackSourceEnum_AWEME_DETAIL&sc=image&se=false&x-expires=1729767600&x-signature=WVqF2sxejVhfDrkdZ%2Ba3o8K%2BcAs%3D',
            title: '111222',
            tag: 'anime',
            price: '150',
            author: '_犬野子',
            authorImg: 'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okm6WAK6rCArtDIkClebACg1rs5AOTEe9AnKAq.jpeg?from=327834062'
        },
        {
            image: 'https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/ocBfAvTD7gEPrAOkARAI9t4e3bCv5BACAnMCgW~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&s=PackSourceEnum_AWEME_DETAIL&sc=image&se=false&x-expires=1729767600&x-signature=SBXPyRHGu9BSbV8G6F0vEu%2BgFlE%3D',
            title: '女仆',
            tag: 'waifu',
            price: '10',
            author: '_犬野子',
            authorImg: 'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okm6WAK6rCArtDIkClebACg1rs5AOTEe9AnKAq.jpeg?from=327834062'
        },
        {
            image: 'https://i0.hdslb.com/bfs/new_dyn/a43a2be254e0c64de608de3cbfbc1e5f379292351.jpg@1052w_!web-dynamic.avif',
            title: '初音未来',
            tag: 'miku',
            price: '10',
            author: '极夜繁声',
            authorImg: 'https://i2.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg'
        },
        {
            image: 'https://i0.hdslb.com/bfs/new_dyn/a43a2be254e0c64de608de3cbfbc1e5f379292351.jpg@1052w_!web-dynamic.avif',
            title: '初音未来',
            tag: 'miku',
            price: '10',
            author: '极夜繁声',
            authorImg: 'https://i2.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg'
        },
        {
            image: 'https://i0.hdslb.com/bfs/new_dyn/a43a2be254e0c64de608de3cbfbc1e5f379292351.jpg@1052w_!web-dynamic.avif',
            title: '初音未来',
            tag: 'miku',
            price: '10',
            author: '极夜繁声',
            authorImg: 'https://i2.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg'
        },


    ];
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
                    <MoveCarousel items={arts}/>
                </div>
            </div>
        </section>
    );
}

function renderArtworks() {
    return (
        <section className="bg-[#f8f9fc] h-screen">
        </section>
    )
}

function renderCollections(){
    return (
        <section className="p-[120px]">
        </section>
    )
}


export default function Home() {
    const Top = renderTop();
    const Artworks = renderArtworks();
    const Collections = renderCollections();

    return (
        <>
            {Top}
            {Artworks}
            {Collections}
        </>

    )


}
