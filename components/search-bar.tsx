import {Input} from "@/components/ui/input";
import {Search} from "lucide-react";


export default function SearchBar() {
    return (
        <div className="relative pr-10">
            <Input
                className="relative py-[15px] pl-[15px] pr-[50px] h-[55px] w-full text-lg"
                placeholder="Search..."
            />
            <Search className="absolute top-[15px] right-[55px] cursor-pointer"/>
        </div>
    )
}