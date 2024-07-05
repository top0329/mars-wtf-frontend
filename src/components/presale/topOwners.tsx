/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";
import Image from "next/image";

interface IHolder {
  wallet_address: string;
  amount: number;
  cnt: number;
}

const TopOwners = () => {
  const chart = React.useRef<HTMLCanvasElement>(null);

  const [holders, setHolders] = React.useState<IHolder[]>([]);

  React.useEffect(() => {
    if (!chart.current || holders.length === 0) return;
    const ctx: CanvasRenderingContext2D = chart.current.getContext(
      "2d"
    ) as CanvasRenderingContext2D;

    const _top10s = holders.slice(1, 11);
    const _total = _top10s.reduce(
      (accumulator: number, _user: IHolder) =>
        accumulator + Number(_user.amount),
      0
    );

    const centerX = chart.current.width / 2;
    const centerY = chart.current.height / 2;
    const radius = 175; // Adjust the radius
    const strokeWidth = 60; // Adjust the stroke width
    const borderThickness = 2; // Adjust the border thickness
    const gap = 0.05; // Adjust the gap between parts
    const colors = [
      "#CB0A16", //red
      "#EFB1EA", //pink
      "#F15A29", // orange
      "#662A75", //violet
      "#3E2274", //dark blue
      "#7e788b", //blue
      "#D1B4FF", //light gray
      "#C56D74", // dark orange
      "#67d626", //yello
      "#42C7E8", //sky
    ]; // Updated colors array

    let startAngle = -Math.PI / 2;
    for (let i = 0; i < 10; i++) {
      const percentage = Number(_top10s[i].amount) / _total;

      const endAngle = startAngle + 2 * Math.PI * percentage;

      // Draw the border for each part
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle - gap);
      ctx.lineWidth = strokeWidth + borderThickness * 5; // Adjust border thickness
      ctx.strokeStyle = "#2D2D2D"; // Adjust border color
      ctx.stroke();

      // Draw the donut part
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle - gap);
      ctx.lineWidth = strokeWidth;
      const partColor = colors[i];
      ctx.strokeStyle = partColor;
      ctx.stroke();

      startAngle = endAngle;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [holders]);

  React.useEffect(() => {
    axios
      .get(`https://marswtf-backend.onrender.com/api/holders`)
      .then(({ data: { holders } }) => {
        setHolders(holders);
      })
      .catch((err) => {
        console.log(err);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      <section className="section-roadmap bg-setting border-bottom p-left p-right bg-[url('/img/bg5.jpg')] px-20">
        <h2 className="heading-h2 text-center text-white">TOP 10 OWNERS</h2>
        <div
          className="flex lg:flex-row justify-center flex-col gap-10 lg:gap-20 w-full bg-[#0058C9] rounded-3xl mt-[50px] py-10 px-10 lg:px-20"
          style={{ border: "5px solid #2D2D2D" }}
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div
            className="donut"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <div className="canvas-logo">
              <img src="/img/token1.png" alt="" />
            </div>
            <canvas
              ref={chart}
              id="donutChart"
              width="512"
              height="512"
            ></canvas>
          </div>

          <div className="flex flex-col justify-center gap-1 w-full lg:w-1/2">
            {
              holders[0] &&
              <div className="flex gap-2 items-center text-white text-2xl lg:text-3xl">
                <Image
                  src={"/img/planets/1.svg"}
                  width={0}
                  alt=""
                  height={0}
                  sizes="100vw"
                  className="w-[65px] object-contain relative -translate-x-[10px]"
                />
                <a href={`https://basescan.org/address/${holders[1]?.wallet_address}`} target="_blank" className="truncate cursor-pointer hover:underline">{holders[1]?.wallet_address}</a>
              </div>
            }

            {holders.slice(2, 11).map((_holder: IHolder, index: number) => (
              <div
                key={_holder.wallet_address}
                className="flex text-xl gap-3 items-center text-white lg:text-2xl"
              >
                <Image
                  src={`/img/planets/${index + 2}.svg`}
                  width={0}
                  alt=""
                  height={0}
                  sizes="100vw"
                  className="w-[50px] aspect-square object-contain"
                />
                <a href={`https://basescan.org/address/${_holder.wallet_address}`} target="_blank" className="truncate cursor-pointer hover:underline">{_holder.wallet_address}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-roadmap bg-setting  p-left p-right px-20">
        <h2 className="heading-h2 text-center text-white">TOP 100 OWNERS</h2>
        <div
          className="flex justify-center flex-col gap-2 md:gap-3 lg:gap-5 w-full py-10 px-2 lg:px-20"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          {
            holders.map((_holder: IHolder, index: number) => (
              <div key={index} className="bg-[#0058C9] gap-2 px-3 py-2 lg:px-10 lg:py-5 rounded-3xl text-white text-sm md:text-xl lg:text-3xl w-full flex justify-between">
                <span>#{index+1}</span>
                  <a href={`https://basescan.org/address/${_holder.wallet_address}`} target="_blank" className="truncate hover:underline cursor-pointer">{_holder.wallet_address}</a>
                <div>10ETH</div>
              </div>
            ))
          }
        </div>
      </section>
      <section className="bg-setting -mt-[800px] section-mars-101 p-left p-right bg-[url('/img/bg4.jpg')]">
        <div className="text-style text-center h-[1000px]">
        </div>
      </section>
      <section className="text-lg md:text-2xl text-white p-10 flex gap-1 items-center justify-center flex-col md:flex-row">
        <p className="flex gap-1 items-center"><span className="text-sm md:text-xl pt-1">&copy;</span>COPYRIGHT2024</p>
        <p>MARSWTF, LLC</p>
      </section>
    </>
  );
};

export default TopOwners;
