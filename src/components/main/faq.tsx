/* eslint-disable @next/next/no-img-element */
import React from "react";
import FaqItem from "@/components/main/faqItem";

type FAQ = {
  title: string,
  description: string
}

const faqs: FAQ[] = [
  {
    title: 'WHO IS $MARSWTF?',
    description: 'MARSWTF is a meme coin created on and living in the Base Ecosystem!'
  },
  {
    title: 'WHAT CHAIN IS APED ON?',
    description: '$MARSWTF is on the Base Chain, a layer 2 blockchain on the Ethereum network. Learn more about base chain here https://docs.base.org/'
  },
  {
    title: 'HOW CAN I BUY $MARSWTF?',
    description: 'Please refer to our how to buy section mentioned above.'
  },
]

const FAQ = () => {



  return (
    <section className="section-faq p-left p-right !font-cat">
      <div className="container5 align-middle">
        <h2
          className="heading text-white"
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
          {
            faqs.map((_faq: FAQ) => <FaqItem key={_faq.title} title={_faq.title} description={_faq.description}/>)
          }
        </div>
      </div>
    </section>
  );
};

export default FAQ;
