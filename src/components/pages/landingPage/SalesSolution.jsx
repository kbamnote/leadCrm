import React from 'react';
import { ArrowRight } from 'lucide-react';

// Import your images
import imgThree from "../../../assets/oneCard.png"; // merged image for first card
import waterfallImg from "../../../assets/twoCard.png"; // keep your original second card image path here

// Tab icons
import crmIcon from "../../../assets/iconOne.png";
import syncIcon from "../../../assets/iconTwo.png";
import bulkIcon from "../../../assets/iconThree.png";
import aiIcon from "../../../assets/beautiful.png";

const SalesSolutions = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold font-['Exo_2'] mb-4 leading-none">
          Complete LinkedIn Sales Solutions
        </h1>
        <p className="text-lg text-gray-600 font-['Exo_2'] leading-7">
          Everything you need for professional LinkedIn prospecting
        </p>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mb-6">
     <div className="flex justify-center space-x-36 max-w-7xl w-full">
  <div className="flex items-center space-x-2 pb-2 relative">
    <img src={crmIcon} alt="CRM" className="w-8 h-8" />
    <span className="font-semibold text-lg font-['Exo_2'] text-gray-800">
      CRM Data Enrichment
    </span>
  </div>
  <div className="flex items-center space-x-2 text-gray-600">
    <img src={syncIcon} alt="Sync" className="w-8 h-8" />
    <span className="text-lg font-['Exo_2']">CRM Data Sync</span>
  </div>
  <div className="flex items-center space-x-2 text-gray-600">
    <img src={bulkIcon} alt="Bulk" className="w-8 h-8" />
    <span className="text-lg font-['Exo_2']">Bulk Export & Enrichment</span>
  </div>
  <div className="flex items-center space-x-2 text-gray-600">
    <img src={aiIcon} alt="AI" className="w-8 h-8" />
    <span className="text-lg font-['Exo_2']">AI Productivity</span>
  </div>
</div>

      </div>

      {/* Long Line */}
      <div className="w-full border-b border-gray-200 mb-12"></div>

      {/* Problem Statement */}
      <div className="text-left mb-8">
        <p className="text-xl text-gray-700 inline font-['Exo_2'] leading-7">
          It's hard to find the accurate contact data for every prospects by{' '}
        </p>
        <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium font-['Exo_2'] ml-2">
          Incomplete Data
        </span>
      </div>

      {/* Solution Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* LeadCRM Solution Card */}
        <div className="bg-blue-50 rounded-xl p-8" style={{ borderRadius: '12px' }}>
          <h3 className="text-xl font-semibold mb-6 text-gray-800 font-['Exo_2'] leading-7">
            Here is how LeadCRM tackles that situation.
          </h3>
          
          <div className="mb-6">
            <a href="#" className="text-green-700 font-semibold text-lg inline-flex items-center font-['Exo_2'] leading-7">
              Try LeadCRM Data Enrichment
             <ArrowRight className="w-5 h-5 text-green-700" />
            </a>
          </div>

          {/* Single Combined Image (merged) */}
          <img 
            src={imgThree} 
            alt="LeadCRM Example" 
            style={{ width: "617px", height: "381px",  }}
          />
        </div>

        {/* Waterfall Enrichment Card (unchanged) */}
        <div className="rounded-xl p-8" style={{backgroundColor: "#F0F4FD" }}>
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4 font-['Exo_2']">
  If it does not works for you try our{' '}
  <span className="text-green-700 font-semibold">
    Advanced Waterfall Enrichment
    <span className="inline-block ml-2 align-middle">
      <ArrowRight className="w-5 h-5 text-green-700" />
    </span>
  </span>
</p>

          
          </div>

          {/* Keep second card image as it is */}
          <img 
            src={waterfallImg} 
            alt="Advanced Waterfall Enrichment" 
            style={{ width: "617px", height: "381px", borderRadius: "12px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SalesSolutions;
