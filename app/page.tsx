import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";
import SearchBar from "@/components/search-bar";
import PicCard, {PicCardProps} from "@/components/pic-card";
import MoveCarousel from "@/components/move-carousel";
import CollectionCard, {CollectionCardProps} from "@/components/collection-card";

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

function renderCollections() {
    const collections: CollectionCardProps[] = [
        {
            images: [
                'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
                'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg'
            ],
            title: 'Example01',
            author: 'Leonardo da Vinci',
            authorImg: 'https://cdn.britannica.com/06/200006-131-ABB681CF/Leonardo-da-Vinci-Italian-Renaissance-Florence-Engraving-1500.jpg',
            price: '999',
        },
        {
            images: [
                'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
                'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg',
                'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
            ],
            title: 'Example02',
            author: 'Yoneyama Mai',
            authorImg: 'https://i0.hdslb.com/bfs/article/b699ec61f29846d5b421c83f0a30b94487e871cc.jpg@1256w_1256h_!web-article-pic.avif',
            price: '888',
        },
        {
            images: [
                'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
                'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg',
                'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
                'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg'
            ],
            title: 'Example03',
            author: 'Ask',
            authorImg: 'https://img.moegirl.org.cn/common/1/10/Ask01.jpg',
            price: '777',
        }
    ]
    return (
        <section className="p-[120px]">
            <div className="container">
                <div className="flex justify-between">
                    <div>
                        <h2 className="font-bold text-4xl">Collections</h2>
                    </div>
                    <div
                        className="rounded-full bg-[#ee574c] text-[12px] text-white font-bold
                        py-[12px] px-[30px] w-fit cursor-pointer">
                        View all
                    </div>
                </div>
                <div className="mt-12 flex justify-between">
                    {collections.map((collection, index) =>
                        <CollectionCard key={index} {...collection}/>)
                    }
                </div>

            </div>
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
