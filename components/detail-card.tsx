import Image from "next/image";
import DetailSelect from "@/components/detail-select";
export interface DetailCardProps {
  title: string;
  stock: string;
  price: string;
  image: string;
  author: string;
  authorImg: string;
  seller: string;
}

export default function DetailCard({
  title,
  stock,
  price,
  image,
  author,
  authorImg,
  seller,
}: DetailCardProps) {
  return (
    <div className="row mt-5 align-items-center">
      <div className="col-lg-6">
        <div className="back-home-image pe-4">
          <Image src={image} alt={title} />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="backhome-content mt-4 mt-lg-0">
          <h2 className="fw-bold">Create And Sell Your NFTs</h2>
          <div className="d-flex mt-3 align-items-center">
            <a>
              <span className="badge rounded-pill bg-white box-shadow text-dark f-16 fw-normal py-2 px-3">
                <i className="mdi mdi-heart text-danger f-18 me-2 align-middle"></i>
                2.35K
              </span>
            </a>

            <div className="icon d-flex ms-auto">
              <div className="like">
                <a>
                  <i className="mdi mdi-heart"></i>
                </a>
              </div>
              <div className="menu ms-3">
                <div className="dropdown">
                  <a>
                    <i className="mdi mdi-dots-vertical"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="selected-menu mt-3">
            <DetailSelect />
          </div>

          <div className="tab-box my-4">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <button className="nav-link active">Details</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">Bid</button>
              </li>
              <li className="nav-item">
                <button className="nav-link">History</button>
              </li>
            </ul>
            <div className="tab-content mt-4 ps-3">
              <div className="tab-pane fade show active">
                <p className="text-muted">
                  Welcome to Digital Art Gallery! I've been mining my brains out
                  to bring you these seeds of the metaverse...We offer a wide
                  range of non-fungible tokens, including art,
                  censorship-resistant domain names and other collectibles.
                </p>
              </div>
              <div className="tab-pane fade">
                <p className="text-muted">
                  {" "}
                  Today we want to share a design, NFT is a new method of
                  payment on the Internet using electronic currency. Each of the
                  NFTs is unique and exists.{" "}
                </p>
              </div>
              <div className="tab-pane fade">
                <div className="nav-in-box d-flex align-items-center box-shadow p-4">
                  <div className="flex-shrink-0">
                    <div className="avatar-md">
                      <Image
                        src={image}
                        alt={title}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p className="mb-0 text-dark">
                      Bid Accepted By
                      <span className="text-primary fw-bold">2 ETH </span>{" "}
                      <span className="text-muted">@mazanov_sky</span>
                    </p>
                    <p className="mb-0 text-muted">21/04/2021, 10:05 </p>
                  </div>
                </div>

                <div className="nav-in-box d-flex align-items-center box-shadow p-4 mt-3">
                  <div className="flex-shrink-0">
                    <div className="avatar-md">
                      <Image
                        src={image}
                        alt={title}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <p className="mb-0 text-dark">
                      Bid Accepted By
                      <span className="text-primary fw-bold">1 ETH </span>{" "}
                      <span className="text-muted">@ayoub_fennouni</span>
                    </p>
                    <p className="mb-0 text-muted">21/04/2021, 10:05 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="avatar-xs border rounded-circle border-3 border-white">
                    <Image
                      src={image}
                      alt={title}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-2">
                  <p className="mb-0 f-14 fw-semibold">@mucky_fennouni..</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center">
                <div className="flex-shrink-0">
                  <div className="avatar-xs border rounded-circle border-3 border-white">
                    <Image
                      src={image}
                      alt={title}
                      className="img-fluid rounded-circle"
                    />
                  </div>
                </div>
                <div className="flex-grow-1 ms-2">
                  <p className="mb-0 f-14 fw-semibold">ayoub_fennouni..</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row ">
            <div className="col-lg-6">
              <h6 className="fw-bold mb-1">Minimum bid</h6>
              <p className="fw-semibold">
                4.00036 <span className="text-muted"> ETH / $3268.42</span>
              </p>
            </div>
          </div>

          <div className="d-flex">
            <button className="btn btn-primary">Buy Now</button>
            <button className="btn btn-outline-primary ms-2">Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}
