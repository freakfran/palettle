import Breadcrumb from "@/components/bread-crumb";
import DetailCard, { DetailCardProps } from "@/components/detail-card";


export default function Page() {
  const art: DetailCardProps = {
    title: "Create And Sell Your NFTs",
    like: "99k",
    price: "99",
    image:
      "https://i0.hdslb.com/bfs/new_dyn/a43a2be254e0c64de608de3cbfbc1e5f379292351.jpg@1052w_!web-dynamic.avif",
    author: "_犬野子",
    authorImg:
      "https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okm6WAK6rCArtDIkClebACg1rs5AOTEe9AnKAq.jpeg?from=327834062",
    seller: "芙莉莲",
  };

  return (
    <section
      className="overflow-hidden relative min-h-[100vh]
                flex items-center bg-[#f8f9fc] pt-[80px]
                bg-center
                bg-no-repeat"
    >
      <div className="mx-[370px]">
        <div className="mt-20">
          <Breadcrumb />
        </div>
        <div className="m-auto">
            <div className="text-center ">
              <div className="mt-4">
                <h1 className="font-bold text-[#183b56] leading-6 mb-7 text-4xl mt-10 font-serif">Item Details</h1>
                <p className="text-[#6b6e6f] text-sm">
                  {">"}A New Place To Collect And Connect NFT Across The World.
                  It’s come with a creative design, <br /> home page options,
                  different explore and digital asset pages and items.
                </p>
              </div>
            </div>
        </div>
        <DetailCard
          key={art.title}
          title={art.title}
          like={art.like}
          price={art.price}
          image={art.image}
          author={art.author}
          authorImg={art.authorImg}
          seller={art.seller}
        />
      </div>
    </section>
  );
}