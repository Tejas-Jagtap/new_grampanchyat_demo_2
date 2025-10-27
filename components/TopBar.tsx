"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import { getSiteConfig, getContactInfo } from "@/lib/config";

const TopBar = () => {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const siteConfig = getSiteConfig();
  const contactInfo = getContactInfo();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "mr" ? "en" : "mr";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: newLang })
    );
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#0A1931] py-1.5 sm:py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-3">
          {/* Government Name */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-start gap-1">
            {language === "mr" && (
              <div className="flex items-center text-navy-darkest font-semibold">
                <button
                  onClick={() =>
                    window.open("https://maharashtra.gov.in/", "_blank")
                  }
                  className="text-white text-xs sm:text-sm marathi transition-all cursor-pointer"
                >
                  {"महाराष्ट्र सरकार"}
                </button>
              </div>
            )}
            {language === "en" && (
              <div className="flex items-center text-navy-darkest font-semibold">
                <button
                  onClick={() =>
                    window.open("https://maharashtra.gov.in/", "_blank")
                  }
                  className="text-white text-xs sm:text-sm hover:underline transition-all cursor-pointer"
                >
                  {"Government of Maharashtra"}
                </button>
              </div>
            )}
          </div>

          {/* Contact Info and Language Toggle */}
          <div className="w-full sm:w-auto flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-3 mt-1 sm:mt-0">
            <div className="relative group">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-1.5 text-white hover:text-gray-200 transition-colors p-1.5"
              >
                <FaPhone className="h-3.5 w-3.5 rotate-90" />
                <span className="hidden min-[690px]:inline text-xs">
                  {contactInfo.phone}
                </span>
                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-white text-[#0A1931] text-xs rounded shadow-lg whitespace-nowrap min-[690px]:hidden z-50">
                  {contactInfo.phone}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                </div>
              </a>
            </div>
            <div className="relative group">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-1.5 text-white hover:text-gray-200 transition-colors p-1.5"
              >
                <FaEnvelope className="h-3.5 w-3.5" />
                <span className="hidden min-[690px]:inline truncate text-xs">
                  {contactInfo.email}
                </span>
                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-white text-[#0A1931] text-xs rounded shadow-lg whitespace-nowrap min-[690px]:hidden z-50">
                  {contactInfo.email}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                </div>
              </a>
            </div>
            <div className="relative group">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1.5 bg-navy-deep text-white px-2.5 py-1 rounded hover:bg-opacity-90 transition-all font-semibold shadow-md text-xs"
              >
                <FaGlobe className="h-3.5 w-3.5" />
                <span className="hidden min-[690px]:inline">
                  {language === "mr" ? "English" : "मराठी"}
                </span>
                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-1/2 -translate-x-1/2 mt-2 px-2 py-1 bg-white text-[#0A1931] text-xs rounded shadow-lg whitespace-nowrap min-[690px]:hidden z-50">
                  {language === "mr" ? "English" : "मराठी"}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
