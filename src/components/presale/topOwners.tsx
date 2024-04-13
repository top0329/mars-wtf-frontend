/* eslint-disable @next/next/no-img-element */
import React from "react";

const TopOwners = () => {
  const chart = React.useRef<HTMLCanvasElement>(null);

  const [progress, setProgress] = React.useState<number>(95);

  React.useEffect(() => {
    if (!chart.current) return;
    const canvas = document.getElementById("donutChart");
    const ctx: CanvasRenderingContext2D = chart.current.getContext(
      "2d"
    ) as CanvasRenderingContext2D;
    const centerX = chart.current.width / 2;
    const centerY = chart.current.height / 2;
    const radius = 175; // Adjust the radius
    const strokeWidth = 60; // Adjust the stroke width
    const borderThickness = 2; // Adjust the border thickness
    const parts = [25, 15, 10, 6, 4, 10, 5, 25]; // Adjust the values
    const total = parts.reduce((acc, val) => acc + val, 0);
    const gap = 0.05; // Adjust the gap between parts
    const colors = [
      "#EFB1EA", //pink
      "#F15A29", // orange
      "#662A75", //violet
      "#3E2274", //blue
      "#D1B4FF", //light gray
      "#42C7E8", //sky
      "#C56D74", // dark orange
      "#CB0A16", //red
    ]; // Updated colors array

    let startAngle = -Math.PI / 2;
    for (let i = 0; i < parts.length; i++) {
      const percentage = parts[i] / total;
      const endAngle = startAngle + 2 * Math.PI * percentage;

      // Draw the border for each part
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineWidth = strokeWidth + borderThickness * 5; // Adjust border thickness
      ctx.strokeStyle = "#2D2D2D"; // Adjust border color
      ctx.stroke();

      // Draw the donut part
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.lineWidth = strokeWidth;
      const partColor = colors[i];
      ctx.strokeStyle = partColor;
      ctx.stroke();

      startAngle = endAngle + gap;
    }
  }, [progress]);

  return (
    <section className="section-roadmap bg-setting border-bottom p-left p-right bg-[url('/img/bg5.jpg')] px-20">
      <h2 className="heading-h2 text-center white">TOP 10 OWNERS</h2>
      
      <div
        className="flex w-full bg-[#0058C9] rounded-3xl mt-[200px] py-32 px-20"
        style={{border:"5px solid #2D2D2D"}}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
          <canvas ref={chart} id="donutChart" width="512" height="512"></canvas>
      </div>
    </section>
  );
};

export default TopOwners;
