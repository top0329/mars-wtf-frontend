"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import AOS from "aos";
import Marquee from "react-fast-marquee";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react/dist/iconify.js";

import Header from "@/components/main/header";
import Tokenomics from "@/components/main/tokenomics";
import RoadMap from "@/components/main/roadMap";
import FAQ from "@/components/main/faq";
import Footer from "@/components/main/footer";
import Address from "@/components/main/address";
import NFTCard from "@/components/main/nft";

const SparklesCore = dynamic(() => import("@/components/ui/sparkles"), { ssr: false });
const Meteors = dynamic(() => import("@/components/ui/meteors"), {ssr: false});

import { useRouter } from "next/navigation";
import Sparkles from "@/components/ui/sparkle";

export default function Home() {

  const router = useRouter ();

  React.useEffect(() => {
    AOS.init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Header />
      <Address/>
      <section
        className="presale-image"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <img src="/img/presalelive.png" alt="" />
      </section>
      <Tokenomics />
      <NFTCard/>
      {/* <div className="button-large relative z-30 ">
        <Sparkles>
          <a onClick={() => router.push("/nft")} className="btn-primary text-white mb-24 cursor-pointer">
            Mars NFT
          </a>
        </Sparkles>
      </div> */}
      <section data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
        <Marquee direction="right" speed={100} pauseOnHover gradient gradientColor="#00000044">
          <div className="flex gap-[100px] md:gap-[200px] py-[10px] md:py-[30px] !pr-[100px] md:!pr-[200px] bg-[#DD5919] !border-x-0 !border-[5px]" style={{ border: "5px solid #2D2D2D" }}>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
            <img src="img/logo-mars.png" alt="" className="w-[50px] md:w-[100px]"/>
          </div>
        </Marquee>
      </section>
      <RoadMap/>
      <section className="bg-setting bg-[url('/img/bg6.jpg')]">
        <FAQ/>
        <section data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
          <Marquee speed={100} pauseOnHover gradient gradientColor="#00000044">
            <div className="flex gap-[100px] md:gap-[200px] py-[10px] md:py-[30px] !pr-[100px] md:!pr-[200px] bg-[#DD5919] !border-x-0 !border-[5px]" style={{ border: "5px solid #2D2D2D" }}>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
              <img src="/img/base-logo.svg" alt="" className="h-[40px] md:h-[60px]"/>
            </div>
          </Marquee>
        </section>
      </section>
      <Footer/>
    </main>
  );
}
