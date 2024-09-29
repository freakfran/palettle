
import DetailCard, {DetailCardProps} from "@/components/detail-card";
interface Title {
    items: DetailCardProps[]
}

function Title() {
    const art : DetailCardProps = 
    {
            title: 'Create And Sell Your NFTs',
            stock: '99',
            price: '99',
            image: 'https://p3-pc-sign.douyinpic.com/tos-cn-i-0813c001/oEVmECroFzAwUFAvAKfAA9lADAlgoC9fIlt45h~tplv-dy-aweme-images:q75.webp?biz_tag=aweme_images&from=327834062&s=PackSourceEnum_AWEME_DETAIL&sc=image&se=false&x-expires=1729767600&x-signature=9jlJn1UqJf2hvEmbSIfOxIkk84w%3D',
            author: '_犬野子',
            authorImg: 'https://p3-pc.douyinpic.com/aweme/100x100/aweme-avatar/tos-cn-i-0813c001_okm6WAK6rCArtDIkClebACg1rs5AOTEe9AnKAq.jpeg?from=327834062',
            seller: '芙莉莲',
    }

    
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
            <DetailCard key={art.title}
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
  
  return (
    <>
        {title}
    </>
  )
}