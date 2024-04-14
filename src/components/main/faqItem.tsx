import { desigWallet } from "@rainbow-me/rainbowkit/wallets";
import React from "react";

const FaqItem = ({ title, description }: { title: string, description: string }) => {

  const [open, setOpen] = React.useState<boolean>(false);
  
  return (
    <div
      className="accordion-item cursor-pointer"
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
      onClick={() => setOpen(!open)}
    >
      <button className="accordion-header flex items-center">
        <span>{ title }</span>
        <span className={`icon ${ open && 'rotate-90' }`}>
          <svg
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.00006L7 7.00006L13 1.00006"
              stroke="#DEE1E6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div className={`accordion-content transition-all ${ open ? 'max-h-[100px]' : 'max-h-[0px]' }`}>
        <p>{ description }</p>
      </div>
    </div>
  );
};

export default FaqItem;
