"use client";

import React from "react";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeSchemes, getText, getLabel } from "@/lib/config";

const Schemes = () => {
  const { language } = useLanguage();

  // Load schemes from config (limit to 4 for homepage)
  const schemes = getHomeSchemes(4);

  // Don't render if no schemes
  if (!schemes || schemes.length === 0) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#0A1931] text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <FaFileAlt
            size={22}
            className="shrink-0 inline-block -translate-y-[1px]"
            style={{ verticalAlign: "middle" }}
          />
          <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
            {getLabel("components.schemes.title", language)}
          </h2>
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <ul className="space-y-2">
          {schemes.map((scheme) => {
            const schemeName = scheme?.name
              ? getText(scheme.name, language)
              : "Untitled Scheme";
            const schemeBenefit = scheme?.benefit
              ? typeof scheme.benefit === "string"
                ? scheme.benefit
                : getText(scheme.benefit, language)
              : "";

            return (
              <li
                key={scheme?.id || Math.random()}
                className="border-b border-gray-200 pb-2 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer"
              >
                <h3 className="font-semibold text-government-blue text-xs sm:text-sm mb-0.5">
                  {schemeName}
                </h3>
                {schemeBenefit && (
                  <p className="text-xs text-gray-600">{schemeBenefit}</p>
                )}
              </li>
            );
          })}
        </ul>
        <div className="mt-3 text-center">
          <Link href="/schemes">
            <button className="text-government-blue hover:text-government-orange font-semibold text-xs sm:text-sm transition-colors duration-200">
              {getLabel("components.schemes.viewAll", language)}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
