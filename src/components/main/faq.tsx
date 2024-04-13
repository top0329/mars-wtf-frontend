/* eslint-disable @next/next/no-img-element */
import React from "react";

const FAQ = () => {
  const chart = React.useRef<HTMLCanvasElement>(null);

  const [progress, setProgress] = React.useState<number>(95);

  return (
    <section className="section-faq p-left p-right !font-cat">
      <div className="container5 align-middle">
        <h2
          className="heading white"
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-delay="100"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
        >
          faq
        </h2>
        <div className="accordion-container">
          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <button className="accordion-header">
              <span>Lorem ipsum dolor si?</span>
              <span className="icon">
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
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Est
                quam reiciendis aliquam harum porro expedita labore? Itaque,
                accusantium, necessitatibus. Aperiam eligendi ratione
                consequuntur nemo ad dignissimos iure harum quas molestias.
              </p>
            </div>
          </div>
          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <button className="accordion-header">
              <span>Lorem ipsum dolor si?</span>
              <span className="icon">
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
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Est
                quam reiciendis aliquam harum porro expedita labore? Itaque,
                accusantium, necessitatibus. Aperiam eligendi ratione
                consequuntur nemo ad dignissimos iure harum quas molestias.
              </p>
            </div>
          </div>
          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <button className="accordion-header">
              <span>Lorem ipsum dolor si?</span>
              <span className="icon">
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
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Est
                quam reiciendis aliquam harum porro expedita labore? Itaque,
                accusantium, necessitatibus. Aperiam eligendi ratione
                consequuntur nemo ad dignissimos iure harum quas molestias.
              </p>
            </div>
          </div>
          <div
            className="accordion-item"
            data-aos="fade-up"
            data-aos-offset="100"
            data-aos-delay="100"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <button className="accordion-header">
              <span>Lorem ipsum dolor si?</span>
              <span className="icon">
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
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing, elit. Est
                quam reiciendis aliquam harum porro expedita labore? Itaque,
                accusantium, necessitatibus. Aperiam eligendi ratione
                consequuntur nemo ad dignissimos iure harum quas molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
