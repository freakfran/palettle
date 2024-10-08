import Breadcrumb from "@/components/bread-crumb";
import DetailCard, { DetailCardProps } from "@/components/detail-card";
interface Title {
  items: DetailCardProps[];
}

function Title() {
  const art: DetailCardProps = {
    title: "Create And Sell Your NFTs",
    stock: "99",
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
                flex items-center bg-white pt-[40px]
                bg-center
                bg-no-repeat"
    >
      <div className="container m-14">
        <div className="">
          <Breadcrumb />
        </div>
        <div className="flex items-center justify-center flex-wrap mx-auto mt-auto box-border">
          <div className="relative ">
            <div className="block text-center ">
              <div className="mt-4">
                <h1 className="font-bold text-[#183b56] leading-6 mb-7 text-4xl">Item Details</h1>
                <p className="text-[#6b6e6f] text-sm">
                  {">"}A New Place To Collect And Connect NFT Across The World.
                  It’s come with a creative design, <br /> home page options,
                  different explore and digital asset pages and items.
                </p>
              </div>
            </div>

            <div className="heading-bottom-icon d-flex justify-content-center text-center">
              <i className="mdi mdi-image-filter-vintage"></i>
              <i className="mdi mdi-image-filter-vintage mx-2"></i>
              <i className="mdi mdi-image-filter-vintage"></i>
            </div>
          </div>
        </div>
        <DetailCard
          key={art.title}
          title={art.title}
          stock={art.stock}
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

export default function Home() {
  const title = Title();

  return <>{title}</>;
}
