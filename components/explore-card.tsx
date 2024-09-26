import Image from "next/image";

export interface ExploreCardProps {
  author: string;
  authorImg: string;
  image: string;
  title: string;
  stock: string;
  price: string;
}

export default function ExploreCard({
  author,
  authorImg,
  image,
  title,
  stock,
  price,
}: ExploreCardProps) {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl p-6 border-0">
        <div className="items-center justify-start flex-row flex ">
          <div className="h-8 w-8">
            <Image
              src={image} alt={title} width={400} height={300}
            />
          </div>
          <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">{author}</h6>
        </div>
        <div className="card-image mt-3">
          <Image src={image} alt={title} width={400} height={300} />
        </div>
        <div className="body-content mt-3">
          <h6 className="fw-bold">{title}</h6>
          <div className="d-flex">
            <p className="text-muted">{stock} in stock</p>
            <p className="ms-auto text-muted">
              Price : <span className="text-success">{price} ETH</span>
            </p>
          </div>
          <hr />
          <div className="d-flex mt-3 align-items-center">
            <div className="history">
              <i className="mdi mdi-restart f-20 align-middle"></i>View History
            </div>
            <div className="bid-button ms-auto">
              <button className="btn btn-sm btn-primary rounded-pill">
                Bid
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
