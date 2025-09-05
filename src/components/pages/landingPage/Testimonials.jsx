import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import telegramIcon from "../../../assets/play.png";
import david from "../../../assets/AvatarOne.png";
import lillian from "../../../assets/AvatarTwo.png";
import michael from "../../../assets/AvatarThree.png";

const testimonials = [
  {
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "David Fincher",
    role: "On Capterra",
    avatar: david,
  },
  {
    text: "My experience with LeadCRM has been excellent. It has streamlined my workflow, improved lead tracking, and made follow-ups more efficient. The responsive customer support is a big plus. Highly recommend it for reliable lead management!",
    name: "Lillian Williams",
    role: "On Capterra",
    avatar: lillian,
  },
  {
    text: "Reliable Data Sync I’ve only had to refresh the extension a couple of times. The multi-contact enrichment is still a huge plus, and support is very responsive.",
    name: "Michael",
    role: "On Capterra",
    avatar: michael,
  },
];

export default function Testimonials() {
  return (
    <section className="mt-10 relative w-full py-16 flex flex-col items-center bg-white">
      {/* Heading + Arrows */}
      <div className="w-full max-w-7xl  flex items-center justify-between mb-12">
        <h2 className="font-['Exo_2'] text-[36px] font-semibold leading-[100%] text-[#090F4E]">
          What people are saying about LeadCRM
        </h2>
        <div className="flex gap-4">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#090F4E] text-[#090F4E] hover:bg-[#090F4E] hover:text-white transition">
            <ChevronLeft size={20} />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#090F4E] text-[#090F4E] hover:bg-[#090F4E] hover:text-white transition">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-8">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="w-[437px] h-[390px] border border-gray-200 bg-[#F9F0F8] rounded-[20px] p-6 flex flex-col justify-between"
          >
            {/* Testimonial Text */}
            <p className="font-['Exo_2'] text-[16px] font-semibold leading-[26px] text-[#2C2C2C]">
              “{t.text}”
            </p>

            {/* Stars */}
            <div className="flex items-center gap-2 mt-4">
              <img src={telegramIcon} alt="icon" className="w-6 h-6" />
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="#090F4E" stroke="#090F4E" />
              ))}
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-6 border-t pt-4 border-gray-300">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-['Exo_2'] text-[20px] font-semibold leading-[20px] text-[#090F4E]">
                  {t.name}
                </h4>
                <p className="font-['Exo_2'] text-[14px] font-normal leading-[14px] text-[#696969]">
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
