import type { CHAIN, CONTRACT } from "@/types/chain";
import NFT_ABI from '@/constants/abis/marsNft.json';
export const PINATA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiI5NDlhYmU4Ni1lZTE5LTRiNTgtYjMwMS0wYzcyYzNhMGJjOWMiLCJlbWFpbCI6IncuYm9ubmVzQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiJmNmVhMzViMTg3MmViMjM5OWU1ZCIsInNjb3BlZEtleVNlY3JldCI6ImNiMWVmYjQyZjVmOTFjZDgzYzhhNWRhMmEyYWU5YzIzYzM0YzE0ZDU4OWRhODI3NjljZTg3MGJmNWU2NGMyOWYiLCJpYXQiOjE2OTQ2NjI5Nzd9.sUhRsFf1vXuCAvI8Sgl_K7gzUaASXGpGe5nST4rz8uo"

export const NetworkId = {
    SEPOLIA: 11155111,
    BASE: 8453,
    SCROLL: 534352,
};

export const BASE_URL = 'https://marswtf-backend.onrender.com';
// export const BASE_URL = 'http://localhost:5000';
export const USDC_ADDRESS = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";

export const EARLY_LIQUIDITY_ADDRESSES = {
    [NetworkId.BASE]: "0x21E17d7D4f6B6e4116591730CEec05EC63cF9924",//verified & adjusted
    [NetworkId.SEPOLIA]: "0xB3C3cc967e8B0eCEF0349207B0C4e8CfCff93AB3"//verified
};
export const TOKEN_ADDRESSES = {
    [NetworkId.BASE]: "0xD76e5a10702156c4155443EC93Ff634b6F12a312",//verified & adjusted
    [NetworkId.SEPOLIA]: "0x10B70F96Eccba753231D853157386579301622eF"//verified
}


export const chains: Record<number, CHAIN> = {
    11155111: {
        name: "Sepolia test network",
        ticker: 'SEPOLIA',
        symbol: "ETH",
        rpc: "https://ethereum-sepolia-rpc.publicnode.com",
        chainId: 11155111,
        explorer: 'https://sepolia.etherscan.io'
    },
    8453: {
        name: "BASE",
        ticker: 'BASE',
        symbol: "ETH",
        rpc: "https://mainnet.base.org",
        chainId: 8453,
        explorer: 'https://basescan.org'
    },
}

export const contracts: Record<number, CONTRACT> = {
    11155111: {
        presale: {
            address: '',
            abi: '',
        },
        usdc: {
            address: '',
            abi: '',
        },
        mars: {
            address: '',
            abi: '',
        },
        nft: {
            address: '0xA9F7B854c755369c330F269e3bF6bb22E0BE2517',
            abi: NFT_ABI
        }
    },
    // 8453: {
    //     presale: {
    //         address: '',
    //         contract: '',
    //     },
    //     usdc: {
    //         address: '',
    //         contract: '',
    //     },
    //     mars: {
    //         address: '',
    //         contract: '',
    //     },
    //     nft: {
    //         address: '',
    //         contract: ''
    //     }
    // },
}

