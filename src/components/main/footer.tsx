/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useRouter } from "next/navigation";


const Footer = () => {

  const router = useRouter ();

  return (
    <footer
      className="bg-setting text-center p-left p-right bg-[url('/img/bg7.jpg')]"
      data-aos="fade-down"
      data-aos-offset="100"
      data-aos-delay="100"
      data-aos-duration="700"
      data-aos-easing="ease-in-out"
      data-aos-once="true"
    >
      <img src="/img/mars-logo.svg" alt="" className="mx-auto" height={300} width={300}/>
      <h2>Welcome The Future</h2>
      <h3>$MARSWTF</h3>
      <div className="button-large">
        <a onClick={() => router.push("/presale")} className="btn-primary cursor-pointer text-white">
          PRESALE
        </a>
      </div>
    </footer>
  );
};

export default Footer;
