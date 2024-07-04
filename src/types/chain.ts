export interface CHAIN {
    name: string,
    ticker: string,
    symbol: string,
    rpc: string,
    chainId: number,
    explorer: string,
}

export interface CONTRACT {
    presale: {
        address: string,
        abi: any
    },
    usdc: {
        address: string,
        abi: any
    },
    mars: {
        address: string,
        abi: any
    },
    nft: {
        address: string,
        abi: any
    }
}