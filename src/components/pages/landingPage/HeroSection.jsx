import React from "react";
import { Star,Rocket     } from "lucide-react";
import bgImage from "../../../assets/herobg.png"; 
import chromeIcon from "../../../assets/fullchrome.png"; 
import halfChrome from "../../../assets/halfchr.png"; // new half chrome image
import playstore from "../../../assets/play.png"; // new playstore image
import hubspot from "../../../assets/one.png";   
import pipedrive from "../../../assets/two.png"; 
import salesforce from "../../../assets/Salesforce Integration.png"; 
import underlineImg from "../../../assets/line.png"; 

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[676px] flex flex-col items-center justify-center text-center px-6"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.97,
      }}
    >
      <div className="bg-white/80 px-4 border-1 border-[#9ACCFF] py-1 rounded-full mb-6 shadow">
        <span className="font-['Exo_2'] text-[13.62px] leading-[23.83px] text-[#63657E]">
          🚀 Thousands of Professional using LeadCRM
        </span>
      </div>

      <h1 className="font-['Exo_2'] font-semibold text-[58px] leading-[69px] text-[#121212] max-w-6xl mx-auto">
        LinkedIn CRM Integration <br />
        Capture, Sync and Enrich in{" "}
        <span className="relative inline-block text-[#2D96BC]">
          Both Ways
          <img
            src={underlineImg}
            alt="underline"
            className="absolute left-0 bottom-[-8px] w-full"
          />
        </span>
      </h1>

      <p className="font-['Exo_2'] font-semibold text-[19px] leading-[28px] text-[#363636] mt-6 max-w-4xl mx-auto">
        Automatically sync LinkedIn prospects to your CRM and overlay existing CRM
        contacts on LinkedIn profiles. Complete bi-directional integration with
        HubSpot, Salesforce, and Pipedrive.
      </p>

      <div
        className="mt-10 px-6 py-4 rounded-xl flex items-center gap-6"
        style={{
          background:
            "linear-gradient(90.37deg, #5ED3FF -12.35%, #6EC6FE 0.67%, #EB65F4 100.24%, #FD58F2 114.28%)",
        }}
      >
        <span className="font-['Exo_2'] text-white font-medium text-lg">
          Works with
        </span>
        <img src={hubspot} alt="HubSpot" className="w-[60px] h-[60px]" />
        <img src={pipedrive} alt="Pipedrive" className="w-[60px] h-[60px]" />
        <img src={salesforce} alt="Salesforce" className="w-[60px] h-[60px]" />
      </div>

      {/* Ratings */}
      <div className="mt-8 flex items-center justify-center gap-10">
        {/* Half Chrome rating */}
        <div className="flex items-center gap-2">
            <div className="bg-white w-10 h-10 flex items-center justify-center">
  <img src={halfChrome} alt="Half Chrome" className="w-5 h-5" />
</div>

          <div className="flex text-[#C58920]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#C58920" className="w-5 h-5" />
            ))}
          </div>
          <span className="ml-2 text-[#363636] font-['Exo_2']">5/5</span>
        </div>

        {/* Play Store rating */}
        <div className="flex items-center gap-2">
           <div className="bg-white w-10 h-10 flex items-center justify-center">
  <img src={playstore} alt="playstore" className="w-5 h-5" />
</div>
          <div className="flex text-[#C58920]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="#C58920" className="w-5 h-5" />
            ))}
          </div>
          <span className="ml-2 text-[#363636] font-['Exo_2']">5/5</span>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="mt-10 flex items-center gap-6">
       <div className="flex items-center justify-between bg-[#373737] rounded-[13px] px-4 py-3 w-[225px] h-[60px]">
  {/* Text on left */}
  <div className="flex flex-col items-start leading-none">
    <p className="font-['Exo_2'] text-white text-[12px]">Available in</p>
    <p className="font-['Exo_2'] text-white text-[16px] font-medium">
      Chrome Web Store
    </p>
  </div>

  {/* Icon on right inside white circle */}
  <div className="bg-white w-8 h-8 flex items-center justify-center rounded-full">
    <img src={chromeIcon} alt="chrome" className="w-6 h-6" />
  </div>
</div>


        <button className="bg-[#B3FC6A] text-[#242424] font-['Exo_2'] font-semibold text-[18px] rounded-[13px] px-6 h-[60px] w-[214px]">
          Get a Free Trial Now!
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
