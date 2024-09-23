import type {Metadata} from "next";
import "./globals.css";
import '@rainbow-me/rainbowkit/styles.css';
import RainbowProvider from "@/context/RainbowProvider";
import React from "react";
import Banner from "@/components/banner/banner";

export const metadata: Metadata = {
    title: "Palette",
    description: "Wonderful digital arts",
};

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
        </RainbowProvider>
        </body>
        </html>
    );
}
