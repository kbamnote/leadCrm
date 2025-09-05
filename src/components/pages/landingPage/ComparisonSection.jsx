import React from "react";
import withoutImg from "../../../assets/cardOne.png"; // your first image
import withImg from "../../../assets/cardTwo.png";       // your second image
import saveImg from "../../../assets/saveImg.png";        // save 40+ hours image

const ComparisonSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center px-6 py-16">
      {/* Main Heading */}
      <h2 className="font-['Exo_2'] font-semibold text-[36px] leading-[100%] text-center text-[#121212] mb-12">
        Every LinkedIn Prospector faces these daily challenges
      </h2>

      {/* Two Cards */}
      <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* Left Card - Without LeadCRM */}
        <div className="w-[543px] h-[711px] bg-[#FFF7F8] opacity-95 rounded-xl shadow p-8 flex flex-col">
          <img
            src={withoutImg}
            alt="Without LeadCRM"
            className="w-[491px] h-[191px] object-contain mx-auto mb-6"
          />
          <h3 className="font-['Exo_2'] font-semibold text-[24px] text-[#D24B68] mb-6">
            Without LeadCRM
          </h3>

          {/* Features */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Manual Data Entry
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] font-medium text-[13px] px-2 py-1 rounded-2xl">
                  3+ Hours wasted daily
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                Copying LinkedIn contacts to CRM manually plus losing
                conversation history
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Incomplete Data
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] font-medium text-[13px] px-2 py-1 rounded-2x">
                  60% Data Incomplete
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                LinkedIn profiles missing Email and Phones from 700M+ Database
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  No CRM Visibility
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] font-medium text-[13px] px-2 py-1 rounded-2xl">
                  Zero context available
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                Can’t see existing CRM contacts when browsing LinkedIn profiles
              </p>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                  Limited Productivity
                </h4>
                <span className="bg-[#FFDCD4] text-[#FF4C51] font-['Exo_2'] font-medium text-[13px] px-2 py-1 rounded-2xl">
                  No smart assistance
                </span>
              </div>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                Writing messages manually plus no AI assistant for reply, Invite
                or comments
              </p>
            </div>
          </div>
        </div>

        {/* Right Card - With LeadCRM */}
        <div className="w-[543px] h-[711px] bg-white opacity-95 rounded-xl shadow p-8 flex flex-col">
          <img
            src={withImg}
            alt="With LeadCRM"
            className="w-[491px] h-[191px] object-contain mx-auto mb-6"
          />
          <h3 className="font-['Exo_2'] font-semibold text-[24px] text-[#097737] mb-6">
            With LeadCRM
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                Complete Bi-Directional Sync
              </h4>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                Automatically sync contacts, messages, and notes between
                LinkedIn and your CRM in real time.
              </p>
            </div>

            <div>
              <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                700M+ Contacts + Enrichment
              </h4>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                Get verified emails and phone numbers from a vast global
                database.
              </p>
            </div>

            <div>
              <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                CRM Overlay on LinkedIn
              </h4>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                See full CRM insights directly on LinkedIn profiles without
                switching tabs.
              </p>
            </div>

            <div>
              <h4 className="font-['Exo_2'] font-semibold text-[20px] text-[#4C4C4C]">
                AI Response + Templates + Bulk Exports
              </h4>
              <p className="mt-2 font-['Exo_2'] text-[16px] leading-[24px] text-[#363636]">
                Save time with AI-crafted replies, pre-built templates and
                one-click data exports.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 flex flex-col lg:flex-row items-center gap-6">
        <button className="bg-[#B3FC6A] font-['Exo_2'] font-semibold text-[18px] leading-[28px] text-[#242424] w-[296px] h-[60px] rounded-[12px] px-6 py-3">
          Start Using LeadCRM Now
        </button>
        <img
          src={saveImg}
          alt="Save 40+ hours"
          className="w-[265px] h-[149px] object-contain"
        />
      </div>
    </section>
  );
};

export default ComparisonSection;
