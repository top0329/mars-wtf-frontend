"use client";
/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import AOS from "aos";
import Marquee from "react-fast-marquee";

import Header from "@/components/main/header";
import Tokenomics from "@/components/main/tokenomics";
import RoadMap from "@/components/main/roadMap";
import FAQ from "@/components/main/faq";
import Footer from "@/components/main/footer";
import { SparklesCore } from "@/components/ui/sparkles";

import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter ();

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
      </div>
      <Header />
      <section className="bg-setting section-presale p-left p-right bg-[url('/img/bg2.jpg')]">
        <div className="container mb-64">
          <h2 className="heading-h2 text-center white">PRESALE LIVE</h2>
        </div>
        <div
          className="container2"
          data-aos="fade-down"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="presale-row align-middle">
            <span className="white">0x00000000000000000000</span>
            <button value="" id="copy" className="btn-primary white">
              COPY
            </button>
          </div>
        </div>
      </section>
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
      <div className="button-large">
        <a href="" className="btn-primary white mb-24">
          LAUNCH APP
        </a>
      </div>
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
