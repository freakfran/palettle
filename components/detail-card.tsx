import Image from "next/image";
import DetailSelect from "@/components/detail-select";

export default function DetailCard() {
    return (
        <div className="row mt-5 align-items-center">
              <div className="col-lg-6">
                  <div className="back-home-image pe-4">
                      <Image src="static/picture/img-15.png" alt="" className=" image-fill"/>
                  </div>
              </div>
              <div className="col-lg-6">
                  <div className="backhome-content mt-4 mt-lg-0">
                      <h2 className="fw-bold">Create And Sell Your NFTs</h2>
                      <div className="d-flex mt-3 align-items-center">
                          <a href=""><span className="badge rounded-pill bg-white box-shadow text-dark f-16 fw-normal py-2 px-3">
                                  <i className="mdi mdi-heart text-danger f-18 me-2 align-middle"></i>2.35K
                              </span></a>

                          <div className="icon d-flex ms-auto">
                              <div className="like">
                                  <a href=""><i className="mdi mdi-heart"></i></a>
                              </div>
                              <div className="menu ms-3">
                                  <div className="dropdown">
                                      <a href="" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i className="mdi mdi-dots-vertical">
                                          </i></a>
                                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                          <li><a className="dropdown-item" href="#">Action</a></li>
                                          <li><a className="dropdown-item" href="#">Another action</a></li>
                                          <li><a className="dropdown-item" href="#">Something else here</a></li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                      
                      <div className="selected-menu mt-3">
                        <DetailSelect/>
                      </div>

                      <div className="tab-box my-4">
                          <ul className="nav nav-pills" id="pills-tab" role="tablist">
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Details</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Bid</button>
                              </li>
                              <li className="nav-item" role="presentation">
                                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">History</button>
                              </li>
                          </ul>
                          <div className="tab-content mt-4 ps-3" id="pills-tabContent">
                              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                  <p className="text-muted">Welcome to Digital Art Gallery! I've been mining my brains out
                                      to bring you these seeds of the metaverse...We offer a wide range of
                                      non-fungible tokens, including art, censorship-resistant domain names and other
                                      collectibles.</p>
                              </div>
                              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                  <p className="text-muted"> Today we want to share a design, NFT is a new method of
                                      payment on the Internet using electronic currency. Each of the NFTs is unique
                                      and exists. </p>
                              </div>
                              <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                  <div className="nav-in-box d-flex align-items-center box-shadow p-4">
                                      <div className="flex-shrink-0">
                                          <div className="avatar-md">
                                              <Image src="static/picture/img-1.jpg" alt="..." className="img-fluid rounded-circle"/>
                                          </div>
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                          <p className="mb-0 text-dark">Bid Accepted By<span className="text-primary fw-bold">
                                                  2 ETH </span> <span className="text-muted">@mazanov_sky</span></p>
                                          <p className="mb-0 text-muted">21/04/2021, 10:05 </p>
                                      </div>
                                  </div>

                                  <div className="nav-in-box d-flex align-items-center box-shadow p-4 mt-3">
                                      <div className="flex-shrink-0">
                                          <div className="avatar-md">
                                              <Image src="static/picture/img-5.jpg" alt="..." className="img-fluid rounded-circle"/>
                                          </div>
                                      </div>
                                      <div className="flex-grow-1 ms-3">
                                          <p className="mb-0 text-dark">Bid Accepted By<span className="text-primary fw-bold">
                                                  1 ETH </span> <span className="text-muted">@ayoub_fennouni</span></p>
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
                                          <Image src="static/picture/img-1.jpg" alt="" className="img-fluid rounded-circle"/>
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
                                          <Image src="static/picture/img-21.jpg" alt="" className="img-fluid rounded-circle"/>
                                      </div>
                                  </div>
                                  <div className="flex-grow-1 ms-2">
                                      <p className="mb-0 f-14 fw-semibold">ayoub_fennouni..</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <hr className="my-4"/>
                      <div className="row ">
                          <div className="col-lg-6">
                              <h6 className="fw-bold mb-1">Minimum bid</h6>
                              <p className="fw-semibold">4.00036 <span className="text-muted"> ETH / $3268.42</span></p>
                          </div>
                          <div className="col-lg-6 text-right">
                              <h6 className="mb-0 fw-bold">Countdown</h6>
                              <div className="countdown" id="countdown">
                                  <ul className="d-flex ps-0">
                                      <li className="d-flex"><span id="days"></span><span className="align-middle">:</span></li>
                                      <li className="d-flex"><span id="hours"></span><span className="align-middle"> : </span>
                                      </li>
                                      <li className="d-flex"><span id="minutes"></span><span className="align-middle"> :
                                          </span></li>
                                      <li className="d-flex"><span id="seconds"></span></li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                      <div className="d-flex">
                          <button className="btn btn-primary">Buy Now</button>
                          <button className="btn btn-outline-primary ms-2">Place Bid</button>
                      </div>

                  </div>
              </div>
          </div>
    )
}