"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSiteConfig, getText, getAboutContent } from "@/lib/config";
import {
  FaHistory,
  FaLandmark,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function HistoryPage() {
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();
  const village = siteConfig.village;
  const aboutContent = getAboutContent();
  const history = aboutContent.history;

  const timelineColors = [
    "bg-blue-500",
    "bg-orange-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-cyan-500",
    "bg-indigo-500",
    "bg-red-500",
    "bg-pink-500",
  ];

  const timeline = history.timeline.events.map((event, index) => ({
    ...event,
    color: timelineColors[index % timelineColors.length],
  }));

  const placeIcons = [FaLandmark, FaMapMarkerAlt, FaHistory];

  const historicalPlaces = history.places.items.map((place, index) => ({
    ...place,
    icon: placeIcons[index % placeIcons.length],
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getText(history.title, language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getText(history.subtitle, language)}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <div className="flex items-center mb-4">
            <FaHistory className="text-3xl sm:text-4xl text-government-orange mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-government-blue">
              {getText(history.heritage.title, language)}
            </h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            {getText(history.heritage.text, language)}
          </p>
        </section>

        {/* Timeline */}

        {/* Historical Places */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getText(history.places.title, language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {historicalPlaces.map((place, index) => {
              const Icon = place.icon;
              return (
                <div
                  key={index}
                  className="border-l-4 border-government-orange pl-3"
                >
                  <Icon className="text-2xl text-government-orange mb-2" />
                  <h3 className="text-base sm:text-lg font-bold text-government-blue mb-1.5">
                    {getText(place.name, language)}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {getText(place.description, language)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Legacy Section */}
        <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-4 sm:p-5">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {getText(history.legacy.title, language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {getText(history.legacy.cultural.title, language)}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {getText(history.legacy.cultural.text, language)}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {getText(history.legacy.contribution.title, language)}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {getText(history.legacy.contribution.text, language)}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
