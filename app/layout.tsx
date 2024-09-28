import type {Metadata} from "next";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import RainbowProvider from "@/context/RainbowProvider";
import React from "react";
import Banner from "@/components/banner";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Palette",
    description: "Wonderful digital arts",
};

function Footer() {
    return (
        <footer className="p-[120px] bg-[#f8f9fc]">
            <div className="flex justify-around">
                <div>
                    <div className="flex">
                        <Image src='/logo.png' alt='logo' width={70} height={70}/>
                        <p className="font-bold text-4xl pt-2">Palette</p>
                    </div>
                    <div className="mt-2">
                        <p className="text-[#6b6e6f] text-[18px]">
                            Palette is a marketplace <br/> for digital art.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="font-bold text-[18px] mb-2">
                        Follow us
                    </div>
                    <Link href='https://github.com/freakfran/palettle'>
                        <Image src='/github.svg' alt='github' width='40' height='40'/>
                    </Link>
                </div>
            </div>
            <hr className="mt-10" />
            <div className="text-center mt-10">
                Copyright © 2024.Palette all rights reserved.
            </div>

        </footer>
    )
}

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <RainbowProvider>
            <Banner/>
            {children}
            <Footer/>
        </RainbowProvider>
        </body>
        </html>
    );
}