"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import AOS from "aos";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles"), { ssr: false });
const Meteors = dynamic(() => import("@/components/ui/meteors"), { ssr: false });

import { useRouter } from "next/navigation";
import Sparkles from "@/components/ui/sparkle";
import FreeMint from "@/components/main/mint";
import WalletConnectButton from "@/components/presale/connectButton";
import { NFT } from "@/types/utils";
import NftItem from "@/components/nft/mintItem";
import { SERVER_URL } from "@/constants/config";
import axios from "axios";
import NFTLoader from "@/components/nft/loader";

export default function Home() {

    const router = useRouter();
    const [showMintModal, setShowMintModal] = React.useState<boolean>(false);
    const [nfts, setNfts] = React.useState<NFT[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true);
    const [nft, setNft] = React.useState<NFT|undefined>(undefined);

    React.useEffect(() => {
        AOS.init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const intialize = async () => {
        try {
            setIsLoading (true);
            const data = await axios.get(`${SERVER_URL}/nft/nfts`);
            setNfts (data.data);
        } catch (err) {

        } finally {
            setIsLoading (false);
        }
    }
    React.useEffect(() => {
        intialize ();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const onMint = (_nft: NFT) => {
        setNft (_nft);
        setShowMintModal (true);
    }

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
                {showMintModal && nft && <FreeMint data={nft} intialize={intialize} close={() => setShowMintModal(false)} />}
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
                                <li>
                                    <a href="https://t.me/mars_wtf" target="_blank">
                                    <img src="/img/telegram.svg" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            className="logo"
                            data-aos="fade-down"
                            data-aos-offset="200"
                            data-aos-delay="200"
                            data-aos-duration="500"
                            data-aos-easing="ease-in-out"
                            data-aos-once="true"
                        >
                            <h1 className="text-white">mint mars NFT</h1>
                        </div>
                        <div
                            className="button"
                            data-aos="fade-left"
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
                    <div className="w-full md:text-4xl text-sm text-white">{nfts.length}/5000</div>
                    <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-3">
                        {
                            isLoading ? <NFTLoader/> :
                            nfts.map((_nft: NFT, index: number) => <NftItem key={'nft' + index} isLoading={false} onMint={onMint} {..._nft} /> )
                        }
                    </div>
                </div>

            </div>
        </main>
    );
}
