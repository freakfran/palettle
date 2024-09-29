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
import {getUserByAddress} from "@/backend/actions/users";
import {useRequest} from "ahooks";
import {useDisconnect, useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {getTokenByUri} from "@/backend/actions/token";
import {compressString} from "@/utils/common";
import Link from "next/link";

interface ProfileButtonProps {
    address: string
}

export default function ProfileButton({address}: ProfileButtonProps) {

    // 根据用户地址获取用户
    const {data: user, loading} = useRequest(
        async () => await getUserByAddress(address),
        {
            manual: false,
        }
    );

    // 获取用户头像tokenUri
    const {data: tokenUri, error} = useReadContract({
        ...paletteContractConfig,
        functionName: 'tokenURI',
        args: [BigInt(user ? user.avatarId! : 0)],
        query: {
            enabled: !loading
        }
    });

    if (error) {
        console.log(error)
    }

    //获取元数据
    const {data: metadata} = useRequest(
        async () => await getTokenByUri(tokenUri!),
        {
            ready: !!tokenUri,
        }
    );

    const {disconnect} = useDisconnect()


    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    {
                        metadata && <AvatarImage src={metadata.image} alt="Profile picture"/>
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
                            <Link href={`/profile/${address}`}>
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