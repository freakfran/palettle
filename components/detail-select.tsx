import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

  
export default function DetailSelect (){
    return (
    <Select defaultValue="Wallet">
      <SelectTrigger className="w-[180px]">
      <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Wallet">Set up Your Wallet</SelectItem>
        <SelectItem value="Collection">Create Your Collection</SelectItem>
        <SelectItem value="List">List them for sale</SelectItem>
        <SelectItem value="lifetime">least once in your lifetime</SelectItem>
      </SelectContent>
    </Select>
    )
  }