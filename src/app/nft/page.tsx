"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import AOS from "aos";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles"), { ssr: false });
const Meteors = dynamic(() => import("@/components/ui/meteors"), { ssr: false });

import { useRouter } from "next/navigation";
import Sparkles from "@/components/ui/sparkle";
import WalletConnectButton from "@/components/presale/connectButton";
import { NFT } from "@/types/utils";
import NFTItem from "@/components/nft/nftItem";
import { Contract, providers } from "ethers";
import { chains, contracts } from "@/constants/config";
import NFTLoader from "@/components/nft/loader";


export default function Home() {

  const router = useRouter();
  const [showMintModal, setShowMintModal] = React.useState<boolean>(false);
  const [nfts, setNfts] = React.useState<NFT[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    AOS.init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const initialize = async () => {
    try {
      setIsLoading(true);
      const chainId = 11155111;
      const _chain = chains[chainId];
      // web3 provider
      const provider = new providers.JsonRpcProvider(_chain.rpc);
      const { address: contractAddress, abi } = contracts[chainId].nft;
      const _contract = new Contract(contractAddress, abi, provider);

      const _tokenNumber = await _contract.tokenNumber();
      // get nfts
      const _nfts: NFT[] = await Promise.all(new Array(Number(_tokenNumber)).fill("").map(async (item: string, index: number) => {
        const _tokenURI = await _contract.tokenURI(index);
        const _response = await fetch(_tokenURI);
        const _data = await _response.json();
        return {
          _id: index + '',
          name: String(_data.name),
          description: String(_data.description),
          image: String(_data.image)
        };
      }));
      console.log(_nfts)
      setNfts(_nfts);

    } catch {

    } finally {
      setIsLoading(false);
    }
  }

  React.useEffect(() => {
    initialize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showMintModal]);

  return (
    <main className="min-h-screen">
      <div className="fixed left-0 right-0 top-0 bottom-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={50}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        <Meteors poistion="top" />
        <Meteors poistion="left" />
      </div>
      <div className="flex flex-col items-center">
        <section className="container p-left p-right text-center">
          <div className="header-row mt-2 md:mt-20">
            <div
              className="social-media"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <ul className="lg:!gap-3">
                <li>
                  <a onClick={() => router.push("/")} className="cursor-pointer">
                    <img src="/img/home.svg" alt="" />
                  </a>
                </li>
                <a className="text-white  cursor-pointer text-[10px] xxs:text-xs lg:text-3xl rounded-md xxs:rounded-lg lg:rounded-xl bg-[#CB4913] hover:bg-[#cb6c13f1]" onClick={() => router.push('/nft/mint')}>
                  MINT
                </a>
              </ul>
            </div>
            <div
              className="logo"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h1 className="text-white">Mars NFT</h1>
            </div>
            <div
              className="button"
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <Sparkles>
                <WalletConnectButton />
              </Sparkles>
            </div>
          </div>
        </section>

        <div className="my-auto flex h-full w-full max-w-7xl flex-col gap-2 p-4">

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-20">
            {/* {nfts.map((_nft: NFT) => (
              <PlaceListItem key={_nft._id} isLoading={false} {..._nft} />
            ))} */}
            {
                isLoading ? <NFTLoader/> :
                nfts.map((_nft: NFT, index: number) => <NFTItem key={'nft' + index} isLoading={false} {..._nft} /> )
            }
          </div>
        </div>

      </div>
    </main>
  );
}
