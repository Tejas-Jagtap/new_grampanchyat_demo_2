"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSiteConfig, getText } from "@/lib/config";

const Header = () => {
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();
  const { village, branding } = siteConfig;

  return (
    <header className="bg-white w-full py-2">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-3 sm:gap-4">
          {/* Mobile Layout - 3 cells, perfectly centered */}
          <div className="sm:hidden grid grid-cols-[auto,1fr,auto] items-center px-4 w-full">
            {/* Left emblem */}
            <div className="w-12 h-12 relative place-self-center">
              <Link
                href="/"
                className="block w-full h-full relative"
                rel="home"
              >
                <Image
                  src={branding.emblem}
                  alt={getText(village.name, language)}
                  fill
                  priority
                  sizes="48px"
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Center title — vertically centered + tiny downward trim for Devanagari */}
            <div className="flex flex-col items-center justify-center text-center relative top-[2px]">
              <h2 className="text-lg font-bold text-[#0A1931] m-0 leading-tight">
                {language === "mr"
                  ? `ग्रामपंचायत ${getText(village.name, language)}`
                  : `Grampanchayat ${getText(village.name, language)}`}
              </h2>
              <p className="text-sm text-[#0A1931] marathi m-0 leading-[1.1]">
                {language === "mr"
                  ? `ता. ${getText(village.taluka, language)} जि. ${getText(
                      village.district,
                      language
                    )}`
                  : `Ta. ${getText(village.taluka, language)}, Dist. ${getText(
                      village.district,
                      language
                    )}`}
              </p>
            </div>

            {/* Right emblem */}
            <div className="w-12 h-12 relative place-self-center">
              <Image
                src={branding.stateEmblem}
                alt={getText(village.state, language)}
                fill
                priority
                sizes="48px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex justify-start">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative transition-all duration-300">
              <Link
                href="/"
                className="site_logo block w-full h-full relative"
                rel="home"
              >
                <Image
                  src={branding.emblem}
                  alt={getText(village.name, language)}
                  fill
                  priority
                  sizes="(max-width: 768px) 80px, 96px"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Title */}
          <div className="hidden sm:flex text-center flex-col items-center justify-center space-y-1 col-span-1">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0A1931] transition-all duration-300 whitespace-nowrap overflow-hidden leading-tight">
              {language === "mr"
                ? `ग्रामपंचायत ${getText(village.name, language)}`
                : `Gram Panchayat ${getText(village.name, language)}`}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#0A1931] marathi transition-all duration-300">
              {language === "mr"
                ? `ता. ${getText(village.taluka, language)} जि. ${getText(
                    village.district,
                    language
                  )}`
                : `Ta. ${getText(village.taluka, language)}, Dist. ${getText(
                    village.district,
                    language
                  )}`}
            </p>
          </div>

          {/* Right - Government Logo (Desktop only) */}
          <div className="hidden sm:flex justify-center sm:justify-end">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative transition-all duration-300">
              <Image
                src={branding.stateEmblem}
                alt={getText(village.state, language)}
                fill
                priority
                sizes="(max-width: 768px) 80px, 96px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
