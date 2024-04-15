export const NetworkId = {
  POLYGON: 137,
  RINKEBY: 4,
  ETHEREUM: 1,
  ETHERGEM: 1987,
  AVALANCHE: 43114,
  BSC: 56,
  GNOSIS: 100,
  ETC: 61,
  KLAYTN: 8217,
  ARBITRUM: 42161,
  OPTIMISM: 10,
  MANTLE: 5000,
  GOERLI: 5,
  SEPOLIA: 11155111,
  BASE: 8453,
  SCROLL: 534352,
  BERA_TEST: 80085
};

export const BASE_URL = 'https://marswtf-backend.onrender.com';
// export const BASE_URL = 'http://localhost:5000';

export const USDC_ADDRESS = "0x94a9D9AC8a22534E3FaCa9F4e7F2E2cf85d5E4C8";

export const supportedChainIds = [ NetworkId.POLYGON, NetworkId.BSC, NetworkId.ETC, NetworkId.GNOSIS, NetworkId.ETHERGEM, NetworkId.AVALANCHE, NetworkId.MOONRIVER, NetworkId.EVMOS, NetworkId.ARBITRUM, NetworkId.OPTIMISM]

export const EARLY_LIQUIDITY_ADDRESSES = {
  [NetworkId.BSC]: "0xf58D78F353C67a1FeDf1C8dc60cF09c88B3b8ACc", //verified & adjusted
  [NetworkId.AVALANCHE]: "0xf58D78F353C67a1FeDf1C8dc60cF09c88B3b8ACc", //verified & adjusted
  [NetworkId.POLYGON]: "0x58dD4052c3d4e4f020365AE4dfAE16d1Fdd1f763",//verified & adjusted
  [NetworkId.ETC]: "0xf58D78F353C67a1FeDf1C8dc60cF09c88B3b8ACc", //verified & adjusted
  [NetworkId.MANTLE]: "0xf58D78F353C67a1FeDf1C8dc60cF09c88B3b8ACc",//verified & adjusted
  
  [NetworkId.BASE]: "0x21E17d7D4f6B6e4116591730CEec05EC63cF9924",//verified & adjusted
  [NetworkId.BERA_TEST]: "0xD76e5a10702156c4155443EC93Ff634b6F12a312",//verified & adjusted

  [NetworkId.SEPOLIA]: "0xB3C3cc967e8B0eCEF0349207B0C4e8CfCff93AB3"//verified
};
export const TOKEN_ADDRESSES = {
  [NetworkId.BSC]: "0x2861171F7a3dD05DC2E875374841D5C49a8e5dCB",//verified & adjusted
  [NetworkId.AVALANCHE]: "0x7DA6DF0e81a6eD9F98B3fd374CF6bE4f3099216E",//verified & adjusted
  [NetworkId.POLYGON]: "0x08E7733a6D2a7Fc0363Dae117F8608AAb518F996",//verified & adjusted
  [NetworkId.ETC]: "0x7DA6DF0e81a6eD9F98B3fd374CF6bE4f3099216E",//verified & adjusted
  [NetworkId.MANTLE]: "0x7DA6DF0e81a6eD9F98B3fd374CF6bE4f3099216E",//verified & adjusted

  [NetworkId.BASE]: "0xD76e5a10702156c4155443EC93Ff634b6F12a312",//verified & adjusted
  [NetworkId.BERA_TEST]: "0x21E17d7D4f6B6e4116591730CEec05EC63cF9924",//verified & adjusted

  [NetworkId.SEPOLIA]: "0x10B70F96Eccba753231D853157386579301622eF"//verified
}

export const baseUrl = "https://bidify.cloud/api"
// export const baseUrl = "http://localhost:8080/api"
export const getLogUrl = {
  [NetworkId.POLYGON]: "https://api.polygonscan.com/api?module=logs&action=getLogs",
  [NetworkId.AVALANCHE]: "https://api.snowtrace.io/api?module=logs&action=getLogs",
  [NetworkId.RINKEBY]: "https://api-rinkeby.etherscan.io/api?module=logs&action=getLogs",
  [NetworkId.ETHERGEM]: "https://blockscout.egem.io/api?module=logs&action=getLogs",
  [NetworkId.BSC]: "https://api.bscscan.com/api?module=logs&action=getLogs",
  [NetworkId.EVMOS]: "https://evm.evmos.org/api?module=logs&action=getLogs",
  [NetworkId.MOONRIVER]: "https://api-moonriver.moonscan.io/api?module=logs&action=getLogs",
  [NetworkId.GNOSIS]: "https://blockscout.com/xdai/mainnet/api?module=logs&action=getLogs",
  [NetworkId.ETC]: "https://blockscout.com/etc/mainnet/api?module=logs&action=getLogs",
  [NetworkId.zkSyncTestnet]: "https://zksync2-testnet.zkscan.io/api?module=logs&action=getLogs",
  [NetworkId.zkSyncMainnet]: "https://zksync2-mainnet.zkscan.io/api?module=logs&action=getLogs",
}
export const snowApi = {
  43114: "Y72B4EMH42SYS5C3RGGIDJM9HPQKYUSUTH",
  137: "XKIRV2YEWTDJIXRQSXB42PT78P1879NTJT",
  4: "1GT2QR7K76T2EAU72UEP43M82W72TMQAU6",
  56: "WYSBB1UFVWFNRVRMCRZ6PMI5XD3K1D2A9F"
}

export const PINATA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIyZmRmYThiMi1hZjBmLTQ3ODktODc3Zi0zMDA5YjJlYzliZWYiLCJlbWFpbCI6ImphbmlzbGVlMTIwNEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiM2NjM2IwNTQ5YmY4YjhiMjgxODMiLCJzY29wZWRLZXlTZWNyZXQiOiJkOTg3NmE1M2IxMzlhYzhlZmFjNTE5ODgxYmM2ZTNmNTAxZGY5MTgxZTYzOTJmODM0ZmYwNDRiYjFkZjE1NTc3IiwiaWF0IjoxNzA3MDU4NzA0fQ.a1DwUMFUIPsH6h2dI0UfrNdeLc0TLIlx27ADU3Fo0E8";
export const PINATA_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS"

