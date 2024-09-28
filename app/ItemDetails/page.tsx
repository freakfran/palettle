import Image from "next/image";
import CountDown from 'ant-design-pro/lib/CountDown';

function Title() {
    return (
      <section className="item-detail section bg-light">
      <div className="container">
          <div className="row mt-4">
              <div className="col-lg-12">
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb default mb-0">
                          <li className="breadcrumb-item">
                              <a href="index1.html" className="text-muted">Home</a>
                          </li>
                          <li className="breadcrumb-item active text-primary" aria-current="page">Items Details</li>
                      </ol>
                  </nav>
              </div>
          </div>

          <div className="row align-items-center justify-content-center">
              <div className="col-lg-8">
                  <div className="inner-heading text-center">
                      <div className="mt-4">
                          <h1 className="fw-bold">Item Details</h1>
                          <p className="text-muted">{'>'}A New Place To Collect And Connect NFT Across The World. It’s
                              come with a creative design, <br/> home page options, different explore and digital asset
                              pages and items.</p>
                      </div>
                  </div>

                  <div className="heading-bottom-icon d-flex justify-content-center text-center">
                      <i className="mdi mdi-image-filter-vintage"></i>
                      <i className="mdi mdi-image-filter-vintage mx-2"></i>
                      <i className="mdi mdi-image-filter-vintage"></i>
                  </div>
              </div>
          </div>


          
      </div>
  </section>
  );
}


export default function Home() {
  const title = Title();
  
  return (
    <>
        {title}
    </>
  )
}