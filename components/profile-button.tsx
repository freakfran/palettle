'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {getOrInsertUserByAddress} from "@/backend/actions/users";
import {useRequest} from "ahooks";
import {useDisconnect} from "wagmi";
import {compressString} from "@/utils/common";
import Link from "next/link";

interface ProfileButtonProps {
    address: string
}

export default function ProfileButton({address}: ProfileButtonProps) {

    // 根据用户地址获取用户
    const {data: user} = useRequest(
        async () => await getOrInsertUserByAddress(address),
        {
            manual: false,
        }
    );

    const {disconnect} = useDisconnect()


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    {
                        user && <AvatarImage src={user.avatar!} alt="Profile picture"/>
                    }
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>

            {
                user &&
                <DropdownMenuContent className="max-w-36 p-2">
                    <DropdownMenuLabel className="">{compressString(user.nickname!, 10)}</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Link href={`/profile`}>
                                Profile
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={`/gallery`}>
                                Gallery
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator/>
                    <DropdownMenuItem onClick={() => disconnect()}>
                        Disconnect
                    </DropdownMenuItem>
                </DropdownMenuContent>
            }
        </DropdownMenu>
    )
}