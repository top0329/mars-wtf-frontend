/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Sparkles from "../ui/sparkle";
import { useRouter } from "next/navigation";
import { Contract, providers } from "ethers";
import { chains, contracts } from "@/constants/config";
import { NFT } from "@/types/chain";

const NFTCard = () => {
    const [nfts, setNfts] = React.useState<NFT[]>([]);
    const router = useRouter ();

    const initialize = async () => {
        const chainId = 11155111;
        const _chain = chains[chainId];
        // web3 provider
        const provider = new providers.JsonRpcProvider(_chain.rpc);
        const { address: contractAddress, abi } = contracts[chainId].nft;
        const _contract = new Contract(contractAddress, abi, provider);
        
        const _tokenNumber = await _contract.tokenNumber ();
        // get nfts
        const _nfts: NFT[] = await Promise.all(new Array(Number(_tokenNumber)).fill("").map(async(item: string, index: number) => {
            const _tokenURI = await _contract.tokenURI(index);
            const _response = await fetch(_tokenURI);
            const _data = await _response.json();
            return _data;
        }));
        setNfts (_nfts);  
    }

    React.useEffect(() => {
        initialize();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            id="videos"
            className="mt-40 flex flex-col items-center mx-2 md:mx-20"
        >
            <div className="container px-5">
                <div className="title">
                    <h2 className="md:text-5xl text-3xl text-center text-white">Mars NFTs</h2>
                </div>
                <div className="w-full sm:w-[460px] mx-auto">
                    <Swiper
                        effect={'cards'}
                        slidesPerView={1}

                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        {
                            nfts.length === 1 && 
                                <SwiperSlide key='vice'>
                                    <div className="w-full aspect-[1/1.2] relative">
                                        <Image
                                            src={nfts[0].image}
                                            alt='me'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='aspect-[1/1.2] w-full'
                                        />
                                        <div className="absolute left-0 top-0 w-full h-full p-5 text-black/60">
                                            <div className="bg-white/40 p-2 text-center rounded-lg text-sm md:text-xl lg:text-2xl">{nfts[0].name}</div>
                                        </div>
                                        {/* <Icon onClick={() => onPlay(_movie.snippet.title, `https://www.youtube.com/watch?v=${_movie.snippet.resourceId.videoId}`)} icon="logos:youtube-icon" className="absolute left-1/2 top-1/2 text-5xl md:text-8xl -translate-x-1/2 -translate-y-1/2 hover:opacity-60 cursor-pointer" /> */}
                                    </div>
                                </SwiperSlide>
                        }
                        {
                            nfts.map((_nft: NFT, index: number) => (
                                <SwiperSlide key={'mars_nft' + index}>
                                    <div className="w-full aspect-[1/1.2] relative">
                                        <Image
                                            src={_nft.image}
                                            alt='me'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            className='aspect-[1/1.2] w-full'
                                        />
                                        <div className="absolute left-0 top-0 w-full h-full p-5 text-black/60">
                                            <div className="bg-white/40 p-2 text-center rounded-lg text-sm md:text-xl lg:text-2xl">{_nft.name}</div>
                                        </div>
                                        {/* <Icon onClick={() => onPlay(_movie.snippet.title, `https://www.youtube.com/watch?v=${_movie.snippet.resourceId.videoId}`)} icon="logos:youtube-icon" className="absolute left-1/2 top-1/2 text-5xl md:text-8xl -translate-x-1/2 -translate-y-1/2 hover:opacity-60 cursor-pointer" /> */}
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
            <Sparkles>
                <a onClick={() => router.push("/nft")} className="btn-primary text-white mb-24 cursor-pointer mt-10">
                    Mars NFT
                </a>
            </Sparkles>
        </section>
    );
};

export default NFTCard;
