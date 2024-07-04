import React from "react";
import { useRandomInterval } from "@/utils/useRandomInterval";

const random = (min: number, max: number) => Math.floor(Math.random() * (max - min)) + min;

type Sparkle = {
  id: string,
  createdAt: number,
  color: string,
  size: number,
  style: Object
}

const DEFAULT_COLOR = 'hsl(50deg, 100%, 50%)';
const generateSparkle = (color = DEFAULT_COLOR, top: number, left: number, right: number, bottom: number) => {
  const sparkle: Sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(10, 20),
    style: {
      top: random(top, bottom) + '%',
      left: random(left, right) + '%',
    },
  };
  return sparkle;
}

const SparkleInstance = ({ color, size, style }: { color: string, size: number, style: Object }) => (
  <div className="absolute shrink-effect pointer-events-none z-20" style={style}>
    <svg
      className="sparkle-effect"
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
    >
      <path d="M80 0C80 0 84.2846 41.2925 101.496 58.504C118.707 75.7154 160 80 160 80C160 80 118.707 84.2846 101.496 101.496C84.2846 118.707 80 160 80 160C80 160 75.7154 118.707 58.504 101.496C41.2925 84.2846 0 80 0 80C0 80 41.2925 75.7154 58.504 58.504C75.7154 41.2925 80 0 80 0Z" fill={color}/>
    </svg>
  </div>
);

function Sparkles({ children, color = DEFAULT_COLOR, top = 0, left = 0, right = 100, bottom = 100, interval = 500 }: { children: any, color?: string, top?: number, left?: number, right?: number, bottom?: number, interval?: number }) {
  const [sparkles, setSparkles] = React.useState<Sparkle[]>([1,2,3].map(i => generateSparkle(color, top, left, right, bottom)));

  useRandomInterval(() => {
    const now = Date.now();
    // Create a new sparkle
    const sparkle = generateSparkle(color, top, left, right, bottom);
    // Clean up any "expired" sparkles
    const nextSparkles = sparkles.filter((sparkle: Sparkle) => {
      const delta = now - sparkle.createdAt;
      return delta < 1500;
    });
    // Include our new sparkle
    //@ts-ignore
    nextSparkles.push(sparkle);
    // Make it so!
    setSparkles(nextSparkles);
  }, 50, interval);

  return (
    <div className="relative inline-block">
      {children}
      {
        sparkles.map((_sparkle: Sparkle, index: number) => (
          <SparkleInstance
            key={index}
            color={_sparkle.color}
            size={_sparkle.size}
            style={_sparkle.style}
          />
        ))
      }
    </div>
  )
}

export default Sparkles;
