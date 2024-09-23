'use client'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {ConnectButton} from "@rainbow-me/rainbowkit";
import Image from "next/image";
import {usePathname} from "next/navigation";

export default function Banner() {
    const pathname = usePathname();
    return (
        <NavigationMenu className="p-2 max-w-full">
            <NavigationMenuList className="flex w-screen flex-row items-start justify-start">
                <NavigationMenuItem className="flex-1 pl-20 cursor-pointer">
                    <Link href="/" legacyBehavior passHref>
                        <Image src="/logo.png" alt='logo' width='50' height='50'/>
                    </Link>
                </NavigationMenuItem>
                <div className="flex-1 flex justify-center space-x-4 pl-52">
                    <NavigationMenuItem>
                        <Link href="/arts" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                ArtWorks
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/rank" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Ranking
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/creators" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Creators
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </div>

                <NavigationMenuItem className="flex-1 flex justify-end pr-20">
                   <ConnectButton/>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}