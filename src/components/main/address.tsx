import React from "react";

const Address = () => {

  const [copied, setCopied] = React.useState<boolean>(false);

  const handleCopy = async() => {
    setCopied (true);
    setTimeout(() => {
      setCopied (false);
    }, 1000);
  }

  return (
    <section className="bg-setting section-presale p-left p-right bg-[url('/img/bg2.jpg')]">
      <div className="container mb-64">
        <h2 className="heading-h2 text-center text-white">PRESALE LIVE</h2>
      </div>
      <div
        className="container2"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <div className="presale-row align-middle">
          <span className="text-white">0x00000000000000000000</span>

          <button onClick={handleCopy} value="" id="copy" className="btn-primary text-white">
            { copied ? "COPIED!": "COPY" }
          </button>
        </div>
      </div>
    </section>
  );
};

export default Address;
