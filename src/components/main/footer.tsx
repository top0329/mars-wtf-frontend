/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
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
      <img src="/img/mars-logo-large.png" alt="" className="mx-auto"/>
      <h2>Welcome The Future</h2>
      <h3>$MARSWTF</h3>
      <div className="button-large">
        <a href="" className="btn-primary text-white">
          LAUNCH APP
        </a>
      </div>
    </footer>
  );
};

export default Footer;
