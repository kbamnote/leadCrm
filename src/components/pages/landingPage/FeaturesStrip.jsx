import React from "react";
import accessIcon from "../../../assets/Adobe.png";     // replace with your image path
import pushIcon from "../../../assets/cursor.png";         // replace with your image path
import mappingIcon from "../../../assets/H3.png";   // replace with your image path
import enrichmentIcon from "../../../assets/waterfall.png"; // replace with your image path

const FeaturesStrip = () => {
  return (
    <div className="w-full flex justify-center gap-16 px-6 py-8">
      {/* Feature 1 */}
      <div className="flex items-center gap-3">
        <img src={accessIcon} alt="Access" className="w-8 h-8" />
        <p className="font-['Exo_2'] text-[18px] leading-[28px] text-[#6C6C6C]">
          Access to <span className="font-semibold text-[#121212]">700M+ Contacts</span>
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center gap-3">
        <img src={pushIcon} alt="Push to CRM" className="w-8 h-8" />
        <p className="font-['Exo_2'] text-[18px] leading-[28px] text-[#6C6C6C]">
          <span className="font-semibold text-[#121212]">One click push</span> to CRM
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center gap-3">
        <img src={mappingIcon} alt="Custom Field" className="w-8 h-8" />
        <p className="font-['Exo_2'] text-[18px] leading-[28px] text-[#6C6C6C]">
          <span className="font-semibold text-[#090F4E]">Custom Field</span> Mapping
        </p>
      </div>

      {/* Feature 4 */}
      <div className="flex items-center gap-3">
        <img src={enrichmentIcon} alt="Waterfall Enrichment" className="w-8 h-8" />
        <p className="font-['Exo_2'] text-[18px] leading-[28px] text-[#6C6C6C]">
          Advanced <span className="font-semibold text-[#121212]">Waterfall Enrichment</span>
        </p>
      </div>
    </div>
  );
};

export default FeaturesStrip;
