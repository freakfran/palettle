'use client'
import {getDefaultConfig, RainbowKitProvider} from "@rainbow-me/rainbowkit";
import {lineaSepolia} from "viem/chains";
import {http} from "viem";
import {QueryClient} from "@tanstack/query-core";
import React from "react";
import {WagmiProvider} from "wagmi";
import {QueryClientProvider} from "@tanstack/react-query";
import * as env from "@/utils/env"


const config = getDefaultConfig({
    appName: 'pattle',
    projectId: env.WALLETCONNECT_PROJECT_ID,
    chains: [lineaSepolia],
    transports: {
        [lineaSepolia.id]: http(env.LINEA_SEPOLIA_API_URL),
    },
    ssr: true,
});

const queryClient = new QueryClient();


export default function RainbowProvider({children}: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider locale={"en"}>
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}