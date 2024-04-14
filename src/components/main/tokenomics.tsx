/* eslint-disable @next/next/no-img-element */
import React from "react";

const Tokenomics = () => {
  const chart = React.useRef<HTMLCanvasElement>(null);

  const [progress, setProgress] = React.useState<number>(95);

  React.useEffect(() => {
    if (!chart.current) return;
    const canvas = document.getElementById("donutChart");
    const ctx: CanvasRenderingContext2D = chart.current.getContext("2d") as CanvasRenderingContext2D;
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
  }, [progress]);

  return (
    <section className="section-tokenomices !pb-0 p-left p-right">
      <div className="container">
        <div className="title">
          <h2 className="heading-h2 text-center text-white">TOKENOMICS</h2>
        </div>
        <div className="donut-chart-bg">
          <div className="donut-chart-ui">
            <div
              className="left-list"
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <ul id="legendLeft">
                <li>
                  <span className="number">25%</span>
                  <span className="text">AIRDROPT</span>
                </li>
                <li>
                  <span className="number">12%</span>
                  <span className="text">private sale</span>
                </li>
                <li>
                  <span className="number">17%</span>
                  <span className="text">contributors</span>
                </li>
                <li>
                  <span className="number">2%</span>
                  <span className="text">Exchange Launchpool</span>
                </li>
              </ul>
            </div>
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
                <img src="img/logo-mars.png" alt="" />
              </div>
              <canvas ref={chart} id="donutChart" width="512" height="512"></canvas>
            </div>
            <div
              className="right-list"
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <ul id="legendRight">
                <li>
                  <span className="number">30%</span>
                  <span className="text">LP BURNED</span>
                </li>
                <li>
                  <span className="number">11%</span>
                  <span className="text">COMMUNITY PRESALE</span>
                </li>
                <li>
                  <span className="number">3%</span>
                  <span className="text">Advisory</span>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="chart-bottom-content"
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="200"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <ul>
              <li>Symbol: MARSWTF</li>
              <li>Supply: 10,000,000</li>
              <li>Network: BASE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
