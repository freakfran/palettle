import Image from "next/image";
import ClickableButton from "./clickable-button";
import DetailSelect from "@/components/detail-select";
import DeatailTab from "./detail-tab";
import { DropdownMenuRadioGroupDemo } from "./dropdown-menu";
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
    <div className="flex mt-5 justify-center mx-auto align-center">
      <div className="">
        <Image
          src={image}
          alt={title}
          width={0}
          height={0}
          sizes="300vw"
          style={{ width: "auto", height: "auto" }}
          className="rounded-3xl"
        />
      </div>
      <div className="mt-4 ms-12 ml-2">
        <h2 className="text-[#183b56] font-bold text-3xl leading-6 mb-7 mt-12">
          Create And Sell Your NFTs
        </h2>
        <div className="mt-3 flex justify-start">
          <div>
            <ClickableButton
              text="2.35k"
              classname="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
                      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
            />
          </div>
          <div className="flex ms-96">
            <div className="like">
              <ClickableButton
                text="Like"
                classname="shadow-[0_3px_10px_0px_rgba(31,134,239,0.3)]
                bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              />
            </div>
            <div className="ms-2 mt-2">
              <DropdownMenuRadioGroupDemo text="Menu" />
            </div>
          </div>
        </div>

        <div className="selected-menu mt-3">
          <DetailSelect />
        </div>

        <div
          className="shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)]
          p-5 bg-white mt-6 mb-6 rounded-3xl"
        >
          <ul className="justify-start flex flex-wrap">
            <li className="text-[#183b56] ">
              <ClickableButton
                text="Details"
                classname="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              />
            </li>
            <li className="text-[#183b56]">
              <ClickableButton
                text="Bid"
                classname="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              />
            </li>
            <li className="text-[#183b56]">
              <ClickableButton
                text="History"
                classname="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)]
      bg-[#fff] p-2 w-fit rounded-full text-sm m-2"
              />
            </li>
          </ul>
          <div className="mt-4 ps-3">
            <div className="">
              <p className="text-[#6b6e6f]">
                Welcome to Digital Art Gallery! I've been mining my brains out
                to bring you these seeds of the metaverse...We offer a wide
                range of non-fungible tokens, including art,
                censorship-resistant domain names and other collectibles.
              </p>
            </div>
            <div className="">
              <p className="text-[#6b6e6f]">
                {" "}
                Today we want to share a design, NFT is a new method of payment
                on the Internet using electronic currency. Each of the NFTs is
                unique and exists.{" "}
              </p>
            </div>
            <div className="flex flex-wrap">
              <div className="flex items-center rounded-3xl shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)] p-7 mt-5">
                <div className="flex-shrink-0">
                  <div className="avatar-md">
                    <Image src={authorImg} alt={title} width={50} height={50} className="rounded-full"/>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 text-[#000000] text-sm">
                    Bid Accepted By
                    <span className="text-[#ee574c] font-bold ms-1 text-xs">2 ETH </span>{" "}
                    <span className="text-[#6b6e6f]">@mazanov_sky</span>
                  </p>
                  <p className="mb-0 text-[#6b6e6f] text-sm mt-1">21/04/2021, 10:05 </p>
                </div>
              </div>

              <div className="flex items-center rounded-3xl shadow-[0px_3px_10px_0px_rgba(24,59,86,0.08)] p-7 mt-5">
                <div className="flex-shrink-0">
                  <div className="">
                    <Image src={authorImg} alt={title} width={50} height={50} className="rounded-full"/>
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <p className="mb-0 text-[#000000] text-sm">
                    Bid Accepted By
                    <span className="text-[#ee574c] font-bold ms-1 text-xs">1 ETH </span>{" "}
                    <span className="text-[#6b6e6f]">@ayoub_fennouni</span>
                  </p>
                  <p className="mb-0 text-[#6b6e6f] text-sm mt-1">21/04/2021, 10:05 </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="pl-10 pr-10 p-3">
            <div className="flex items-center">
              <div className="">
                <div className="">
                <Image src={authorImg} alt={title} width={25} height={25} className="rounded-full"/>
                </div>
              </div>
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 text-[#183b56] text-xs">@mucky_fennouni..</p>
              </div>
            </div>
          </div>
          <div className="pl-10 pr-10 p-3">
            <div className="flex items-center">
              <div className="">
                <div className=" ">
                <Image src={authorImg} alt={title} width={25} height={25} className="rounded-full"/>
                </div>
              </div>
              <div className="flex-grow-1 ms-2">
                <p className="mb-0 text-[#183b56] text-xs">ayoub_fennouni..</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="row ">
          <div className="mt-3">
            <h6 className="fw-bold text-[#183b56] font-bold mb-1 text-sm">Minimum bid</h6>
            <p className="text-[#183b56] text-sm mt-2">
              4.00036 <span className="text-[#6b6e6f]"> ETH / $3268.42</span>
            </p>
          </div>
        </div>

        <div className="flex justify-start mt-4">
          <button className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)] text-[#fff]
      bg-[#ee574c] pl-7 pr-7 p-3 w-fit rounded-full text-xs m-2 font-sans">BUY NOW</button>
          <button className="shadow-[0_3px_10px_0px_rgba(24,59,86,0.08)] text-[#ee574c]
      pl-7 pr-7 p-3 w-fit rounded-full text-xs m-2 font-sans">PlACE BID</button>
        </div>
      </div>
    </div>
  );
}
