/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import dynamic from "next/dynamic";
import WalletConnectButton from "./connectButton";
import Buy from "./buy";

import { useRouter } from "next/navigation";
import BuySuccess from "./congratulate";

const Header = () => {
  
  const router = useRouter ();
  //congratulations
  const [showConfetti, setShowConfetti] = React.useState<boolean>(false);

  const _renderMarquee = () => (
    <Marquee speed={100} pauseOnHover gradient gradientColor="#00000044">
      <div
        className="flex gap-[100px] md:gap-[200px] py-[10px] md:py-[30px] !pr-[100px] md:!pr-[200px] bg-[#DD5919] !border-x-0 !border-[5px]"
        style={{ border: "5px solid #2D2D2D" }}
      >
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
        <img
          src="/img/base-logo.svg"
          alt=""
          className="h-[40px] md:h-[60px]"
        />
      </div>
    </Marquee>
  );

  const onBuySuccess = (hash: string) => {
    setShowConfetti (true);
  }

  return (
    <header className="bg-cover bg-no-repeat bg-[100%] bg-[url('/img/bg1.jpg')]">
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
              <li>
                <a href="https://twitter.com/marscoin_wtf" target="_blank">
                  <img src="/img/twitter.svg" alt="" />
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
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <h1 className="text-white">$MARSWTF</h1>
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
            <WalletConnectButton/>
          </div>
        </div>
      </section>
      <section className="max-w-[1600px] px-3 sm:px-10 mx-auto w-full grid grid-cols-1 w1200:gap-0 gap-20 w1200:grid-cols-2 mt-32">
        <section
          className="logo"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="p-0 sm:pl-10 text-white text-center w1200:text-left">
            <h2 className="text-3xl lg:text-5xl">STAGE1</h2>
            <h1 className="text-5xl xs:text-5xl lg:text-7xl mt-5">
              $MARSWTF<br/>
              PRESALE
            </h1>
          </div>
          <div className="flex mt-10 items-center w1200:flex-row flex-col">
            <Image
              src={'/img/martian.svg'}
              width={0}
              alt=''
              height={0}
              sizes="100vw"
              className='w-[311px] object-contain'
            />
            <div className="text-white text-2xl flex lg:text-3xl flex-col gap-10 text-center w1200:text-left">
              <h3>YOUR MARS TICKET IS ABOUT TO BECOME A REALITY</h3>
              <h3>BUY NOW BEFORE THE PRICE INCREASES</h3>
            </div>
          </div>
        </section>
        <Buy onSuccess={onBuySuccess}/>
        
      </section>

      <section
        className="mt-20"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        { _renderMarquee () }
      </section>
      { showConfetti && <BuySuccess close={() => setShowConfetti (false)}/> }
    </header>
  );
};

export default Header;
