"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getSiteConfig,
  getText,
  getAboutContent,
  getLabel,
} from "@/lib/config";
import { FaUsers, FaMapMarkedAlt, FaLeaf, FaTrophy } from "react-icons/fa";

export default function IntroductionPage() {
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();
  const village = siteConfig.village;
  const aboutContent = getAboutContent();
  const intro = aboutContent.introduction;

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getText(intro.title, language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getText(intro.subtitle, language)}
          </p>
        </div>

        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <div className="flex items-center mb-4">
            <FaUsers className="text-3xl sm:text-4xl text-government-orange mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-government-blue">
              {getText(intro.welcome, language)}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
              {getText(intro.welcomeMessage, language)}
            </p>
          </div>
        </section>

        {/* Geographic Information */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <div className="flex items-center mb-4">
            <FaMapMarkedAlt className="text-3xl sm:text-4xl text-government-green mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-government-blue">
              {getText(intro.geographic.title, language)}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-government-blue mb-2">
                {getText(intro.geographic.location, language)}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.geographic.state, language)}:
                  </span>
                  <span>{getText(intro.geographic.maharashtra, language)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.geographic.district, language)}:
                  </span>
                  <span>{getText(siteConfig.village.district, language)}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.geographic.taluka, language)}:
                  </span>
                  <span>{getText(siteConfig.village.taluka, language)}</span>
                </div>

                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.geographic.pinCode, language)}:
                  </span>
                  <span>{siteConfig.village.pincode}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-3">
                {getText(intro.landDistribution.title, language)}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(
                      intro.landDistribution.agriculturalLandArea,
                      language
                    )}
                    :
                  </span>
                  <span>
                    {intro.landDistribution.agriculturalHectares || 0} hectares
                    ({intro.landDistribution.agriculturalPercent || 0}%)
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.landDistribution.residentialArea, language)}:
                  </span>
                  <span>
                    {intro.landDistribution.residentialHectares || 0} hectares (
                    {intro.landDistribution.residentialPercent || 0}%)
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.landDistribution.forestLand, language)}:
                  </span>
                  <span>
                    {intro.landDistribution.forestHectares || 0} hectares (
                    {intro.landDistribution.forestPercent || 0}%)
                  </span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">
                    {getText(intro.landDistribution.other, language)}:
                  </span>
                  <span>
                    {intro.landDistribution.otherHectares || 0} hectares (
                    {intro.landDistribution.otherPercent || 0}%)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {getText(intro.infrastructure.title, language)}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-government-orange pl-4">
              <h3 className="font-bold text-lg mb-2">
                {getText(intro.infrastructure.education.title, language)}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.education.primarySchools,
                    language
                  )}
                  : 2
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.education.secondarySchool,
                    language
                  )}
                  : 1
                </li>
                <li>
                  •{" "}
                  {getText(intro.infrastructure.education.anganwadi, language)}:
                  5
                </li>
                <li>
                  • {getText(intro.infrastructure.education.library, language)}:
                  1
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-government-green pl-4">
              <h3 className="font-bold text-lg mb-2">
                {getText(intro.infrastructure.health.title, language)}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {getText(intro.infrastructure.health.phc, language)}: 1
                </li>
                <li>
                  • {getText(intro.infrastructure.health.subCenters, language)}:
                  2
                </li>
                <li>
                  • {getText(intro.infrastructure.health.clinics, language)}: 4
                </li>
                <li>
                  • {getText(intro.infrastructure.health.pharmacies, language)}:
                  3
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-government-blue pl-4">
              <h3 className="font-bold text-lg mb-2">
                {getText(intro.infrastructure.connectivity.title, language)}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {getText(intro.infrastructure.connectivity.roads, language)}
                  : 24 km
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.connectivity.busService,
                    language
                  )}
                  :{" "}
                  {getText(
                    intro.infrastructure.connectivity.available,
                    language
                  )}
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.connectivity.internet,
                    language
                  )}
                  :{" "}
                  {getText(
                    intro.infrastructure.connectivity.fiberOptic,
                    language
                  )}
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.connectivity.mobileCoverage,
                    language
                  )}
                  : 100%
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {getText(intro.infrastructure.waterSanitation.title, language)}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.pipedWater,
                    language
                  )}
                  : 98%{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.coverage,
                    language
                  )}
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.toilets,
                    language
                  )}
                  : 100% {getText(intro.statistics.households.label, language)}
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.drainage,
                    language
                  )}
                  :{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.coveredDrains,
                    language
                  )}
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.wasteManagement,
                    language
                  )}
                  :{" "}
                  {getText(
                    intro.infrastructure.waterSanitation.daily,
                    language
                  )}
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {getText(intro.infrastructure.electricity.title, language)}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.electricity.electrification,
                    language
                  )}
                  : 100%
                </li>
                <li>
                  •{" "}
                  {getText(
                    intro.infrastructure.electricity.streetLights,
                    language
                  )}
                  :{" "}
                  {getText(intro.infrastructure.electricity.ledSolar, language)}
                </li>
                <li>
                  • {getLabel("intro.agriculturalPower", language)}:{" "}
                  {getLabel("intro.threePhase", language)}
                </li>
                <li>
                  • {getLabel("intro.backup", language)}:{" "}
                  {getLabel("intro.transformers", language)}: 3
                </li>
              </ul>
            </div>
            <div className="border-l-4 border-yellow-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {getLabel("intro.other", language)}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>• {getLabel("intro.communityHall", language)}: 1</li>
                <li>• {getLabel("intro.sportsGround", language)}: 1</li>
                <li>• {getLabel("intro.bankBranch", language)}: 1</li>
                <li>• {getLabel("intro.postOffice", language)}: 1</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Economy */}
        <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {getLabel("intro.economyLivelihood", language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {getLabel("intro.primarySector", language)}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {getLabel("intro.agriculture", language)}: 65%</li>
                <li>• {getLabel("intro.animalHusbandry", language)}: 15%</li>
                <li>• {getLabel("intro.fishing", language)}: 3%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {getLabel("intro.secondarySector", language)}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {getLabel("intro.smallIndustries", language)}: 8%</li>
                <li>• {getLabel("intro.manufacturing", language)}: 4%</li>
                <li>• {getLabel("intro.construction", language)}: 3%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {getLabel("intro.tertiarySector", language)}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {getLabel("intro.services", language)}: 7%</li>
                <li>• {getLabel("intro.trade", language)}: 4%</li>
                <li>• {getLabel("intro.governmentJobs", language)}: 3%</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
