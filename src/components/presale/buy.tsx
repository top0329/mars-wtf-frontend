import React from "react";
import Image from "next/image";

const Buy = () => {
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
    <section
      data-aos="fade-left"
      data-aos-offset="200"
      data-aos-delay="200"
      data-aos-duration="500"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      className="flex justify-center"
    >
      <div
        className="flex flex-col justify-start max-w-[500px] bg-gradient-to-t via-[#037DA9] via-[30%] from-[#06063A] to-[#00D7FD] text-white w-full rounded-3xl"
        style={{ border: "7px solid #2D2D2D" }}
      >
        <div className="bg-[url('/img/swap-back.png')] rounded-2xl bg-cover bg-[100%_100%]">
          <div
            className="w-full px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-1 sm:gap-3"
            style={{ borderBottom: "7px solid #2D2D2D" }}
          >
            <h3 className="text-xl sm:text-3xl">50/100 $MARS SOLD</h3>
            <div className="progress-bar w-full">
              <div className="progress-bar-inner" ref={progressRef}></div>
            </div>
            <h3 className="text-lg sm:text-2xl">CURRENT PRICE = 1.23 USD</h3>
          </div>
          <div className="px-4 py-6 sm:px-6 sm:py-8 flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-3xl">YOU PAY</h3>
              <div className="flex gap-1 sm:gap-3 items-center">
                <Image
                  src={"/img/usdc.svg"}
                  width={0}
                  alt=""
                  height={0}
                  sizes="100vw"
                  className="sm:w-[70px] w-[55px] object-contain"
                />
                <div className="flex flex-col justify-center item-center">
                  <div className="flex items-center  sm:gap-1">
                    <input
                      placeholder="0.0"
                      className="bg-transparent w-[100px] text-xl sm:text-2xl outline-none border-none"
                    />
                    <h3 className="text-2xl sm:text-3xl">USDC</h3>
                  </div>
                  <h3 className="text-xl sm:text-2xl">
                    <span className="text-[15px] xl:text-lg">
                      CURRENT BALANCE:
                    </span>{" "}
                    800
                  </h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl sm:text-3xl">YOU RECEIVE</h3>
              <div className="flex gap-1 sm:gap-3 items-center">
                <Image
                  src={"/img/wtf.png"}
                  width={0}
                  alt=""
                  height={0}
                  sizes="100vw"
                  className="sm:w-[70px] w-[55px] object-contain"
                />
                <div className="flex flex-col justify-center item-center">
                  <div className="flex items-center  sm:gap-1">
                    <input
                      placeholder="0.0"
                      className="bg-transparent w-[100px] text-xl sm:text-2xl outline-none border-none"
                    />
                    <h3 className="text-2xl sm:text-3xl">MWTF</h3>
                  </div>
                  <h3 className="text-xl sm:text-2xl">
                    <span className="text-[15px] xl:text-lg">
                      CURRENT BALANCE:
                    </span>{" "}
                    800
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="px-4 py-6 sm:px-6 sm:py-8 pt-5">
            <button className="wallet-button w-full flex justify-center items-center rounded-xl p-5 sm:text-2xl">
              CONNECT WALLET
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Buy;
