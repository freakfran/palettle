import {Separator} from "@/components/ui/separator";
import UploadPicDialog from "@/components/upload-pic-dialog";


export default function Gallery() {
    return (
        <div className="p-[120px] flex flex-col items-center">
            <div className="shadow-md w-full p-[120px]">
                <div className="flex justify-between items-center mb-5">
                    <h2 className="font-bold text-4xl">Your Artworks</h2>
                    <UploadPicDialog/>
                </div>
                <Separator/>


            </div>
        </div>
    )
}