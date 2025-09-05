import React from "react";
import { X } from "lucide-react";
import withoutImg from "../../../assets/cardOne.png";
import withImg from "../../../assets/cardTwo.png";
import saveImg from "../../../assets/saveImg.png";

// New assets you'll provide
import hoursIcon from "../../../assets/before.png"; // before "4+ Hours/day Saved"
import syncImg from "../../../assets/first.png"; // for Complete Bi-Directional Sync
import contactsImg from "../../../assets/Adobe.png"; // for 700M+ Contacts
import overlayImg from "../../../assets/beautiful.png"; // for CRM Overlay
import aiImg from "../../../assets/waterfall.png"; // for AI Response

const ComparisonSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-16 relative">
      {/* Main Heading */}
      <h2 className="font-['Exo_2'] font-semibold text-[36px] leading-[100%] text-center text-[#121212] mb-12">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-10 relative">
        {/* Left Card */}
        <div className="w-[543px] h-[711px] bg-[#FFF7F8] opacity-95 rounded-xl shadow p-8 flex flex-col">
          <img
            src={withoutImg}
            alt="Without LeadCRM"
            className="w-[491px] h-[191px] object-contain mx-auto mb-6"
          />
          <h3 className="font-['Exo_2'] font-semibold text-[24px] text-[#D24B68] mb-6">
            Without LeadCRM
          </h3>

          <div className="space-y-5">
            {/* Manual Data Entry */}
            <div>
              <div className="flex items-center gap-2">
                <X className="w-6 h-6 text-[#D24B68]" />
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Manual Data Entry
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] text-[13px] px-2 py-1 rounded-2xl ml-auto">
                  3+ Hours wasted daily
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] text-[#363636] leading-[24px]">
                Copying LinkedIn contacts to CRM manually plus losing
                conversation history
              </p>
            </div>

            {/* Incomplete Data */}
            <div>
              <div className="flex items-center gap-2">
                <X className="w-6 h-6 text-[#D24B68]" />
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Incomplete Data
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] text-[13px] px-2 py-1 rounded-2xl ml-auto">
                  60% Data Incomplete
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] text-[#363636] leading-[24px]">
                LinkedIn profiles missing Email and Phones from 700M+ Database
              </p>
            </div>

            {/* No CRM Visibility */}
            <div>
              <div className="flex items-center gap-2">
                <X className="w-6 h-6 text-[#D24B68]" />
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  No CRM Visibility
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] text-[13px] px-2 py-1 rounded-2xl ml-auto">
                  Zero context available
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] text-[#363636] leading-[24px]">
                Can't see existing CRM contacts when browsing LinkedIn profiles
              </p>
            </div>

            {/* Limited Productivity */}
            <div>
              <div className="flex items-center gap-2">
                <X className="w-6 h-6 text-[#D24B68]" />
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Limited Productivity
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] text-[13px] px-2 py-1 rounded-2xl ml-auto">
                  No smart assistance
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] text-[#363636] leading-[24px]">
                Writing messages manually plus no AI assistant for reply, Invite
                or comments
              </p>
            </div>
          </div>
        </div>

        {/* VS with vertical + horizontal line */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="w-px h-[698px] bg-[#BCBCBC]"></div>
          <span className="absolute top-1/2 -translate-y-1/2 bg-white px-2 font-semibold">
            VS
          </span>
          
        </div>

        {/* Right Card */}
        <div className="w-[543px] h-[711px] bg-white opacity-95 rounded-xl shadow p-8 flex flex-col">
          <img
            src={withImg}
            alt="With LeadCRM"
            className="w-[491px] h-[191px] object-contain mx-auto mb-6"
          />
          <div className="flex items-center gap-2 mb-6">
            <h3 className="font-['Exo_2'] font-semibold text-[24px] text-[#097737]">
              With LeadCRM
            </h3>
            <img src={hoursIcon} alt="Hours Icon" className="w-7 h-7" />
            <span className="text-[#2E7D32] font-['Exo_2'] text-[13px] bg-[#E6FFF1] p-2 rounded-2xl">
              4+ Hours/day Saved
            </span>
          </div>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <img src={syncImg} alt="Sync" className="w-10 h-10 mt-1" />
              <div>
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Complete Bi-Directional Sync
                </h4>
                <p className="mt-1 text-[16px] text-[#363636] leading-[24px]">
                  Automatically sync contacts, messages, and notes between
                  LinkedIn and your CRM in real time.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src={contactsImg} alt="Contacts" className="w-10 h-10 mt-1" />
              <div>
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  700M+ Contacts + Enrichment
                </h4>
                <p className="mt-1 text-[16px] text-[#363636] leading-[24px]">
                  Get verified emails and phone numbers from a vast global
                  database.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src={overlayImg} alt="Overlay" className="w-10 h-10 mt-1" />
              <div>
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  CRM Overlay on LinkedIn
                </h4>
                <p className="mt-1 text-[16px] text-[#363636] leading-[24px]">
                  See full CRM insights directly on LinkedIn profiles without
                  switching tabs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src={aiImg} alt="AI" className="w-10 h-10 mt-1" />
              <div>
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  AI Response + Templates + Bulk Exports
                </h4>
                <p className="mt-1 text-[16px] text-[#363636] leading-[24px]">
                  Save time with AI-crafted replies, pre-built templates and
                  one-click data exports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA - Centered Button with Image on Right */}
      <div className="mt-12 flex items-center justify-center relative">
        <button className="bg-[#B3FC6A] font-['Exo_2'] font-semibold text-[18px] leading-[28px] text-[#242424] w-[296px] h-[60px] rounded-[12px] px-6 py-3">
          Start Using LeadCRM Now
        </button>
        <img
          src={saveImg}
          alt="Save 40+ hours"
          className="w-[265px] h-[149px] object-contain absolute left-[calc(50%+118px+24px)]"
        />
      </div>
    </section>
  );
};

export default ComparisonSection;