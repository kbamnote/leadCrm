import React from "react";
import { ArrowRight } from "lucide-react";
import arrows from "../../../assets/arrows.png";
import one from "../../../assets/firstCard.png";
import two from "../../../assets/secondCard.png";
import three from "../../../assets/thirdCard.png";
import four from "../../../assets/fourthCard.png";
import ball from "../../../assets/Ball.png"; 

const steps = [
  {
    number: "1",
    title: "Install the Extension",
    description:
      "Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.",
    image: one,
  },
  {
    number: "2",
    title: "Browse LinkedIn",
    description:
      "Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.",
    image: two,
  },
  {
    number: "3",
    title: "Get Enriched Data",
    description:
      "Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.",
    image: three,
  },
  {
    number: "4",
    title: "Sync to CRM Instantly",
    description:
      "Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow ups.",
    image: four,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="relative w-full py-16 flex flex-col items-center"
      style={{
        backgroundColor: "#EAEFFA",
        backgroundImage: "url('/images/lines-bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-poppins text-[36px] font-semibold leading-[100%] text-[#090F4E]">
          How it Works
        </h2>
        <p className="font-poppins text-[16px] font-normal leading-[100%] text-[#4C4C4C] mt-2">
          From setup to success in <span className="font-semibold">4 simple steps</span>
        </p>
      </div>

      {/* Arrow Image Behind Cards */}
      <img
        src={arrows}
        alt="arrows"
        className="absolute"
        style={{
          width: "875.76px",
          height: "30.58px",
          top: "244px",
          left: "298.17px",
          opacity: 1,
          zIndex: 0,
        }}
      />

      {/* Steps */}
      <div className="relative z-10 flex gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="relative w-[323px] h-[449px] bg-white rounded-2xl shadow-md flex flex-col items-center p-6 text-center"
          >
            {/* Step Number in Top Left */}
            <span className="absolute top-1 font-sriracha text-[113.76px] leading-[100%] text-[#2D96BC]">
              {step.number}
            </span>

            {/* Content */}
            <div className="mt-24 flex flex-col items-center">
              <h3 className="font-exo2 text-[24px] font-semibold text-[#090F4E]">
                {step.title}
              </h3>
              <p className="font-exo2 text-[16px] font-normal leading-[22px] text-[#4C4C4C] mt-3">
                {step.description}
              </p>
              <img
                src={step.image}
                alt={step.title}
                className="mt-6 w-[90%] h-auto object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-12 flex items-center justify-center gap-2 w-[227px] h-[60px] bg-[#B3FC6A] rounded-xl font-poppins text-[16px] font-semibold">
        Try LeadCRM Now <ArrowRight size={20} />
      </button>

      {/* Decorative Ball Image (bottom-right) */}
      <img
        src={ball}
        alt="decorative ball"
        className="absolute -bottom-14 -right-0 w-[99px] h-[106px] object-contain"
      />
    </section>
  );
}
