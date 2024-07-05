/* eslint-disable @next/next/no-img-element */
import React from "react";

const RoadMap = () => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return (
    <>
      <section className="bg-setting section-mars-101 p-left p-right bg-[url('/img/bg4.jpg')]">
        <h2 className="heading-h2 text-center text-white">MARS 101</h2>
        <div
          className="container3"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="200"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          <div className="text-style text-center">
            <h3>
              $WENMars <br />
              is where it&apos;s at, degens!
            </h3>
            <p>
              Forget moon memes, Mars is the real game. Powered by Elon&apos;s
              dream and our degen spirit, this coin is your Mars ticket.
            </p>
            <p>
              It&apos;s not just hype; it&apos;s the heartbeat of our future
              Martian empire. Packed with utility, steeped in culture, $WENMars
              is the crypto rebellion we&apos;ve been waiting for.
            </p>
            <p>
              Ready to rule the red planet? Grab $WENMars, join the charge, and
              let&apos;s plant our flag on Mars. Get in, strap up, we&apos;e
              launching!
            </p>
          </div>
        </div>
      </section>
      <section className="section-roadmap bg-setting border-bottom p-left p-right bg-[url('/img/bg5.jpg')]">
        <h2 className="heading-h2 text-center text-white">ROADMAP</h2>
        <div className="container4 mt-82">
          <div className="roadmap-content">
            <div
              className="roadmap-item"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h3 className="text-white">Phase 1</h3>
              <h4 className="text-white">Blast Off</h4>
              <ul>
                <li>Token Drop: $WENMars hits the market.</li>
                <li>Telegram Takeover: Our Martian base.</li>
                <li>Meme War: We invade the net.</li>
                <li>Lock Liquidity: Secure the bag.</li>
              </ul>
            </div>
            <div
              className="roadmap-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h3 className="text-white">Phase 2</h3>
              <h4 className="text-white">Martian Expansion</h4>
              <ul>
                <li>
                  Cosmic Alliances: Partner with Martian research and space tech
                  entities.
                </li>
                <li>
                  Red Planet Rewards: Launch staking to earn exclusive Martian
                  assets.
                </li>
                <li>
                  Martian Media Blitz: Engage with influencers for galactic meme
                  invasions.
                </li>
                <li>
                  Telegram Mars Hub: Grow our channel into a thriving Martian
                  community outpost.
                </li>
              </ul>
            </div>
          </div>
          <div className="roadmap-content">
            <div
              className="roadmap-item"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h3 className="text-white">Phase 3</h3>
              <h4 className="text-white">Build Mars</h4>
              <ul>
                <li>NFT Drop: Own a piece of Mars.</li>
                <li>Amplify the Hype - Unite Martians and dominate Mars!</li>
                <li>Martian Market: Trade your loot.</li>
                <li>Martian Council: Rule the red.</li>
              </ul>
            </div>
            <div
              className="roadmap-item"
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
            >
              <h3 className="text-white">Phase 4</h3>
              <h4 className="text-white">Galactic Domination</h4>
              <ul>
                <li>Big Exchange Listings: $WENMars goes universal.</li>
                <li>Chain Bridges: Mars everywhere.</li>
                <li>Martian Metaverse: Live the red dream.</li>
                <li>Mars Summit: The degen meetup.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RoadMap;
