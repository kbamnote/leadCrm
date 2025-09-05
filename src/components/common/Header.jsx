import React from 'react';
import { ChevronDown, LogIn } from 'lucide-react';
import Logo from '../../assets/Leadcrm Logo.png';

const Header = () => {
  return (
    <div className="w-full bg-white opacity-100">
      <div className="max-w-[1440px] h-[114px] mx-auto flex justify-between items-center px-6">
        <div className="w-[208px] h-16 opacity-100">
          <img
            src={Logo}
            alt="LeadCRM Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="font-['Exo_2'] font-semibold text-[18px] leading-[28px] text-gray-700 group-hover:text-[#2D96BC] transition-colors">
              Product
            </span>
            <ChevronDown className="w-4 h-4 text-gray-700 group-hover:text-[#2D96BC] transition-colors" />
          </div>

          <div className="cursor-pointer">
            <span className="font-['Exo_2'] font-semibold text-[18px] leading-[28px] text-gray-700 hover:text-[#2D96BC] transition-colors">
              Pricing
            </span>
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="font-['Exo_2'] font-semibold text-[18px] leading-[28px] text-gray-700 group-hover:text-[#2D96BC] transition-colors">
              Resources
            </span>
            <ChevronDown className="w-4 h-4 text-gray-700 group-hover:text-[#2D96BC] transition-colors" />
          </div>

          <div className="flex items-center space-x-1 cursor-pointer group">
            <span className="font-['Exo_2'] font-semibold text-[18px] leading-[28px] text-gray-700 group-hover:text-[#2D96BC] transition-colors">
              Company
            </span>
            <ChevronDown className="w-4 h-4 text-gray-700 group-hover:text-[#2D96BC] transition-colors" />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="w-[215px] h-[52px] bg-[#2D96BC] text-white rounded-[10px] font-['Exo_2'] text-[16px] px-3 py-3 hover:bg-[#2680a3] transition-colors flex items-center justify-center gap-2.5">
            Get Your Free Account
          </button>

          <button className="w-[130px] h-[52px] border border-[#2D96BC] text-gray-700 rounded-[10px] px-3 py-3 hover:border-[#2D96BC] hover:text-[#2D96BC] transition-colors flex items-center justify-center gap-2.5">
            <LogIn className="w-6 h-6 text-[#2D96BC]" />
            <span className="font-['Exo_2'] text-[16px] text-[#2D96BC]">Login</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
