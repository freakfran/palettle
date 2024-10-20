import DetailCard from "@/components/detail-card";
interface PageProps {
  params: { tokenId: string }
}
export default function Page({ params } : PageProps ) {
    const tokenId = BigInt(parseInt(params.tokenId))
  
  
  
  return (
    <section
      className="overflow-hidden relative min-h-[100vh]
                flex items-center bg-[#f8f9fc] pt-[80px]
                bg-center
                bg-no-repeat"
    >
      <div className="mx-[370px]">
      <DetailCard tokenId={tokenId}/>
      </div>
    </section>
  )
}