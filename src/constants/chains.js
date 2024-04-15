import {
  polygon,
  // avalanche,
  bsc,
  classic,
  optimism,
  arbitrum,
  mantle,
  base,
  scroll,
  goerli,
  sepolia,
} from "wagmi/chains";


const beraTestnet = {
  id: 80_085,
  name: "Berachain Artio",
  iconUrl: "/chain_logos/bera_test.avif",
  iconBackground: "#fff",
  nativeCurrency: { name: "Berachain Artio", symbol: "BERA", decimals: 18 },
  rpcUrls: {
    default: {
      http: ["https://rpc.ankr.com/berachain_testnet"],
    },
  },
  blockExplorers: {
    default: { name: "BERA_EXPLORER", url: "https://artio.beratrail.io/" },
  },
  // contracts: {
  //   multicall3: {
  //     address: "0xca11bde05977b3631167028862be2a173976ca11",
  //     blockCreated: 11_907_934,
  //   },
  // },
};

const avalanche = {
  id: 43_114,
  name: 'Avalanche',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11_907_934,
  //   },
  // },
}

export const customChains = [
  polygon,
  bsc,
  avalanche,
  {
    ...classic,
    iconUrl: "/chain_logos/etc.svg",
  },
  // classic,
  // optimism,
  // arbitrum,
  {
    ...mantle,
    iconUrl: "/chain_logos/mantle.avif",
  },
  // base,
  {
    ...scroll,
    iconUrl: "/chain_logos/scroll.svg",
  },
  beraTestnet,
  sepolia,
  goerli,
];

