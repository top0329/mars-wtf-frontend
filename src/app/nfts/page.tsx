"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles"), { ssr: false });
const Meteors = dynamic(() => import("@/components/ui/meteors"), {ssr: false});

import { useRouter } from "next/navigation";
import Sparkles from "@/components/ui/sparkle";
import FreeMint from "@/components/main/mint";
import WalletConnectButton from "@/components/presale/connectButton";

export default function Home() {

  const router = useRouter ();
  const [showMintModal, setShowMintModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    AOS.init();
  }, []);
  
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

        <Meteors poistion="top"/>
        <Meteors poistion="left"/>
      </div>
      <header className="bg-cover bg-no-repeat bg-[100%] bg-[url('/img/bg1.jpg')]">
      { showMintModal && <FreeMint close={() => setShowMintModal(false)}/> }
      <section className="container p-left p-right text-center">
        <div className="header-row">
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
              <a className="text-white  cursor-pointer text-[10px] xxs:text-xs lg:text-3xl rounded-md xxs:rounded-lg lg:rounded-xl bg-[#CB4913] hover:bg-[#cb6c13f1]" onClick={() => setShowMintModal (true)}>
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
              <WalletConnectButton/>  
            </Sparkles>
          </div>
        </div>
        <div
          className="flex justify-center relative z-10 min-h-[730px]"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <Sparkles top={30} left={10} right={90} bottom={100} interval={100}>
            <img className="bounce-effect" src="img/ufo.png" alt="" />
          </Sparkles>
        </div>
      </section>
      
      <section 
        className="mt-[25px]" 
        data-aos="fade-up" 
        data-aos-offset="200" 
        data-aos-delay="200" 
        data-aos-duration="500" 
        data-aos-easing="ease-in-out" 
        data-aos-once="true"
      >
        <Marquee speed={100} pauseOnHover gradient gradientColor="#00000044">
          <div className="flex gap-[100px] md:gap-[200px] py-[10px] md:py-[30px] !pr-[100px] md:!pr-[200px] bg-[#DD5919] !border-x-0 !border-[5px]" style={{ border: "5px solid #2D2D2D" }}>
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
            <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]" />
          </div>
        </Marquee>
      </section>
    </header>
      
    </main>
  );
}
