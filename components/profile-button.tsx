'use client'
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {getUserByAddress} from "@/backend/actions/users";
import {useRequest} from "ahooks";
import {useReadContract} from "wagmi";
import {paletteContractConfig} from "@/utils/pattle";
import {getTokenByUri} from "@/backend/actions/token";

interface ProfileButtonProps {
    address: string
}

export default function ProfileButton({address}: ProfileButtonProps) {

    // 根据用户地址获取用户
    const {data: user,loading} = useRequest(
        async () => await getUserByAddress(address),
        {
            manual: false,
        }
    );

    // 获取用户头像tokenUri
    const {data: tokenUri,error} = useReadContract({
        ...paletteContractConfig,
        functionName: 'tokenURI',
        args: [BigInt(user ? user.avatarId! : 0)],
        query: {
            enabled: !loading
        }
    });

    if(error){
        console.log(error)
    }

    //获取元数据
    const {data: metadata} = useRequest(
        async () => await getTokenByUri(tokenUri!),
        {
            ready: !!tokenUri,
        }
    );


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
        </DropdownMenu>
    )
}