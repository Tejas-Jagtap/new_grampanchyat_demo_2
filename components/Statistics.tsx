"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getAboutContent, getText } from "@/lib/config";
import {
  FaUsers,
  FaMapMarkedAlt,
  FaChartBar,
  FaHome,
  FaHandHoldingWater,
} from "react-icons/fa";
import { MdSchool, MdOutlineLandscape } from "react-icons/md";

export default function Statistics() {
  const { language } = useLanguage();
  const aboutContent = getAboutContent();
  const intro = aboutContent.introduction;

  return (
    <section className="mb-6">
      {/* Section Header */}
      <div className="bg-[#0A1931] text-white rounded-lg px-4 py-3 mb-4">
        <div className="flex items-center gap-2">
          <FaChartBar
            size={22}
            className="shrink-0 inline-block -translate-y-[1px]"
            style={{ verticalAlign: "middle" }}
          />
          <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
            {getText(intro.statistics.title, language)}
          </h2>
        </div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {/* Population */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
          <div className="bg-government-orange bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaUsers className="text-2xl text-government-orange" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-government-orange mb-1.5">
            {intro.statistics.population.total?.toLocaleString() || "0"}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">
            {getText(intro.statistics.population.label, language)}
          </p>
        </div>
        {/* Households */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
          <div className="bg-government-green bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaHome className="text-2xl text-government-green" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-government-green mb-1.5">
            {intro.statistics.households.total?.toLocaleString() || "0"}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">
            {getText(intro.statistics.households.label, language)}
          </p>
        </div>
        {/* Total Area */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
          <div className="bg-[#0A1931] bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <MdOutlineLandscape className="text-2xl text-government-blue" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-government-blue mb-1.5">
            {intro.statistics.area.total?.toLocaleString() || "0"}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">
            {getText(intro.statistics.area.label, language)}
          </p>
        </div>
        {/* ward */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
          <div className="bg-orange-600 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaMapMarkedAlt className="text-2xl text-orange-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1.5">
            {intro.statistics.ward.total?.toLocaleString() || "0"}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">
            {getText(intro.statistics.ward.label, language)}
          </p>
        </div>
        {/*Literacy Rate*/}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
          <div className="bg-orange-600 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <MdSchool className="text-2xl text-orange-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1.5">
            {intro.statistics.Literacy.total?.toLocaleString() || "0"}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">
            {getText(intro.statistics.Literacy.label, language)}
          </p>
        </div>
        {/* water  */}
        <div className="bg-white rounded-lg shadow-lg p-4 text-center hover:shadow-xl transition-shadow">
          <div className="bg-orange-600 bg-opacity-10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
            <FaHandHoldingWater className="text-2xl text-orange-600" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1.5">
            {intro.statistics.water.total?.toLocaleString() || "0"}
          </h3>
          <p className="text-gray-700 text-xs sm:text-sm font-semibold">
            {getText(intro.statistics.water.label, language)}
          </p>
        </div>
      </div>
    </section>
  );
}
