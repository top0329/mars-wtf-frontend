/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Header from "@/components/presale/header";
import AOS from "aos";
import Tokenomics from "@/components/main/tokenomics";
import Marquee from "react-fast-marquee";
import TopOwners from "@/components/presale/topOwners";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
import BuySuccess from "@/components/presale/congratulate";

const Sparkles = dynamic(() => import("@/components/ui/sparkle"), {ssr:false});

const SparklesCore = dynamic(() => import("@/components/ui/sparkles"), { ssr: false });
const Meteors = dynamic(() => import("@/components/ui/meteors"), {ssr: false});

const Presale = () => {

  const router = useRouter ();

  React.useEffect(() => {
    AOS.init();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Lecture = () => (
    <section
      className="presale-image"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <img src="/img/lecture.png" alt="" />
    </section>
  );

  const Marqee = () => (
    <section data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
        <Marquee direction="left" speed={100} pauseOnHover gradient gradientColor="#00000044">
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
  )

  return (
    <section>
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
      <Lecture/>
      <Tokenomics/>
      <Marqee/>
      <TopOwners/>
      
    </section>
  );
};

export default Presale;
