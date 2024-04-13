/* eslint-disable @next/next/no-img-element */
import React from "react";
import Marquee from "react-fast-marquee";

const Header = () => {
  const progressRef = React.useRef<HTMLDivElement>(null);

  const [progress, setProgress] = React.useState<number>(95);

  React.useEffect(() => {
    if (!progressRef.current) return;
    var initialWidth = progress;
    var currentWidth = 0;
    var animationSpeed = 1;
    var intervalDuration = 10;
    var interval = setInterval(frame, intervalDuration);

    function frame() {
      if (currentWidth >= initialWidth) {
        clearInterval(interval);
      } else {
        currentWidth += animationSpeed;
        if (currentWidth > initialWidth) {
          currentWidth = initialWidth;
        }
        if (!progressRef.current) return;
        progressRef.current.style.width = currentWidth + "%";
        if (initialWidth > 0) {
          progressRef.current.style.background =
            "linear-gradient(8.6deg, #B5360C 6.57%, #DD5919 93.43%)";
        }
      }
    }

  }, [progress]);

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
            <ul>
              <li>
                <a href="">
                  <img src="/img/twitter.svg" alt="" />
                </a>
              </li>
              <li>
                <a href="">
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
            <h1 className="white">$MARSWTF</h1>
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
            <a href="#" className="white btn-primary">
              LAUNCH APP
            </a>
          </div>
        </div>
        <div
          className="flex justify-center relative z-10"
          data-aos="fade-down"
          data-aos-offset="300"
          data-aos-delay="300"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <img src="img/ufo.png" alt="" />
        </div>
      </section>
      <section className="max-w-[1300px] mt-[-160px] mx-auto p-left p-right">
        <div
          className="mars-content"
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="mars-bg space1 bg-[url('/img/mars-bg.png')]">
            <div className="mars-content-row1">
              <div className="flex items-center mars-item gap-12">
                <div className="margs-logo">
                  <img src="img/base-logo.svg" alt="" />
                </div>
                <div className="mars-text-l">
                  <span className="white">$MARSWTF 101</span>
                  <p className="white">CURRENT PRICE = 0.XXXX USD</p>
                </div>
              </div>
              <div className="mars-item text-center tab-space">
                <img src="img/martian.png" alt="" />
              </div>
              <div className="mars-item mars-text-r text-center">
                <span className="white">PRESALE LIVE NOW!</span>
                <p className="white">STAGE 3</p>
              </div>
            </div>
            <div className="mars-content-row2">
              <div className="mars-text-bottom">
                <div className="mars-text-1">
                  <p className="white">Total MARS sold: xx,xxx,xxx</p>
                </div>
                <div className="mars-text-2">
                  <p className="white">Sale Target: xx,xxx,xxx $MARS</p>
                </div>
              </div>
              <div className="progress-bar">
                <div className="progress-bar-inner" ref={progressRef}></div>
              </div>
            </div>
          </div>
          <div className="token">
            <img src="img/token1.png" alt="" />
          </div>
        </div>
      </section>
      
      <section className="mt-[25px]" data-aos="fade-up" data-aos-offset="200" data-aos-delay="200" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
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
    </header>
  );
};

export default Header;
