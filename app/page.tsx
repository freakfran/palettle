'use client'
import TopContainer from "@/components/top-container";
import ArtworkContainer from "@/components/artwork-container";


/**
 * 作品集
 */
// function renderCollections() {
//     const collections: CollectionCardProps[] = [
//         {
//             images: [
//                 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
//                 'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg'
//             ],
//             title: 'Example01',
//             author: 'Leonardo da Vinci',
//             authorImg: 'https://cdn.britannica.com/06/200006-131-ABB681CF/Leonardo-da-Vinci-Italian-Renaissance-Florence-Engraving-1500.jpg',
//             price: '999',
//         },
//         {
//             images: [
//                 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
//                 'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg',
//                 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
//             ],
//             title: 'Example02',
//             author: 'Yoneyama Mai',
//             authorImg: 'https://i0.hdslb.com/bfs/article/b699ec61f29846d5b421c83f0a30b94487e871cc.jpg@1256w_1256h_!web-article-pic.avif',
//             price: '888',
//         },
//         {
//             images: [
//                 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
//                 'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg',
//                 'https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg',
//                 'https://cdn.britannica.com/04/95904-050-7EB39FC8/Last-Supper-wall-painting-restoration-Leonardo-da-1999.jpg'
//             ],
//             title: 'Example03',
//             author: 'Ask',
//             authorImg: 'https://img.moegirl.org.cn/common/1/10/Ask01.jpg',
//             price: '777',
//         }
//     ]
//     return (
//         <section className="p-[120px]">
//             <div className="container">
//                 <div className="flex justify-between">
//                     <div>
//                         <h2 className="font-bold text-4xl">Collections</h2>
//                     </div>
//                     <div
//                         className="rounded-full bg-[#ee574c] text-[12px] text-white font-bold
//                         py-[12px] px-[30px] w-fit cursor-pointer">
//                         View all
//                     </div>
//                 </div>
//                 <div className="mt-12 flex justify-between">
//                     {collections.map((collection, index) =>
//                         <CollectionCard key={index} {...collection}/>)
//                     }
//                 </div>
//
//             </div>
//         </section>
//     )
// }

/**
 * 作者
 */
// function renderCreators() {
//     const creators: CreatorProps[] = [
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//         {
//             image: 'https://i0.hdslb.com/bfs/face/ae3de0cc8211ca2141e821615397464ddd6e9b62.jpg',
//             name: '极夜繁声',
//             value: '1.5 ETH'
//         },
//     ]
//
//
//     return (
//         <section className="p-[120px] flex flex-col items-center">
//             <div className="container">
//                 <div className="flex justify-between">
//                     <div>
//                         <h2 className="font-bold text-4xl">Artists</h2>
//                     </div>
//                 </div>
//                 <CreatorCarousel className="mt-12" creators={creators}/>
//             </div>
//         </section>
//     )
// }


export default function Home() {

    return (
        <>
            <TopContainer/>
            <ArtworkContainer/>
            {/*{Collections}*/}
            {/*{Creators}*/}
        </>

    )


}
