import {
    metaMaskWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { type Chain } from 'viem'

import {
    getDefaultWallets,
    getDefaultConfig,
} from "@rainbow-me/rainbowkit";

import { sepolia, arbitrum, bsc, base } from "wagmi/chains";
import { Config } from "wagmi";

const { wallets } = getDefaultWallets();

export const chains: Chain[] = [
    // arbitrum,
    // bsc,
    // base,
    sepolia,
    // ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [sepolia] : []),
]

export const config: Config = getDefaultConfig({
    appName: "RainbowKit demo",
    projectId: "e89228fed40d4c6e9520912214dfd68b",
    wallets: [
        ...wallets,
        {
            groupName: "Other",
            wallets: [metaMaskWallet],
        },
    ],
    //@ts-ignore
    chains: chains,
    ssr: true,
});