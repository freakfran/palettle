'use client'
import {getDefaultConfig, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {mainnet, sepolia} from "viem/chains";
import {http} from "viem";
import {QueryClient} from "@tanstack/query-core";
import React from "react";
import {WagmiProvider} from "wagmi";
import {QueryClientProvider} from "@tanstack/react-query";


const config = getDefaultConfig({
    appName: 'pattle',
    projectId: `${process.env.WALLETCONNECT_PROJECT_ID}`,
    chains: [sepolia, mainnet],
    transports: {
        [mainnet.id]: http(`${process.env.MAINNET_API_URL}`),
        [sepolia.id]: http(`${process.env.SEPOLIA_API_URL}`),
    },
    ssr: true,
});

const queryClient = new QueryClient();


export default function RainbowProvider({children}: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}