"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getSiteConfig,
  getCentralSchemes,
  getStateSchemes,
  getLocalSchemes,
  getSchemeCategories,
  getText,
  getLabel,
  getOfficeHours,
  getHelplineNumbers,
} from "@/lib/config";
import {
  FaFileAlt,
  FaLandmark,
  FaBuilding,
  FaUsers,
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
} from "react-icons/fa";

export default function SchemesPage() {
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();
  const contact = siteConfig.contact;

  // Load schemes data from config
  const schemeCategories = getSchemeCategories();
  const centralSchemes = getCentralSchemes();
  const stateSchemes = getStateSchemes();
  const localSchemes = getLocalSchemes();
  const officeHours = getOfficeHours();
  const helplineNumbers = getHelplineNumbers();

  const subPages = [
    {
      title: getText(schemeCategories.central.name, language),
      description: getText(schemeCategories.central.description, language),
      icon: FaLandmark,
      link: "/schemes/central",
      color: "from-blue-400 to-blue-600",
      count: `${centralSchemes.length} ${getLabel("common.schemes", language)}`,
      enabled: schemeCategories.central.enabled,
    },
    {
      title: getText(schemeCategories.state.name, language),
      description: getText(schemeCategories.state.description, language),
      icon: FaBuilding,
      link: "/schemes/state",
      color: "from-orange-400 to-orange-600",
      count: `${stateSchemes.length} ${getLabel("common.schemes", language)}`,
      enabled: schemeCategories.state.enabled,
    },
    {
      title: getText(schemeCategories.local.name, language),
      description: getText(schemeCategories.local.description, language),
      icon: FaUsers,
      link: "/schemes/local",
      color: "from-green-400 to-green-600",
      count: `${localSchemes.length} ${getLabel("common.schemes", language)}`,
      enabled: schemeCategories.local.enabled,
    },
  ].filter((page) => page.enabled);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("pages.schemes.title", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.schemes.allSchemesInfo", language)}
          </p>
        </div>

        {/* Apply Notice */}
        {/* <div className="bg-government-orange text-white rounded-lg p-3 sm:p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <h3 className="text-base sm:text-lg font-bold mb-1.5">
                {getLabel("pages.schemes.applyForSchemes", language)}
              </h3>
              <p className="text-xs sm:text-sm">
                {getLabel("pages.schemes.visitOfficeOrApplyOnline", language)}
              </p>
            </div>
            <button className="bg-white text-government-orange px-4 sm:px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-sm sm:text-base">
              {getLabel("common.applyOnline", language)}
            </button>
          </div>
        </div> */}

        {/* Sub-Pages Navigation */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getLabel("pages.schemes.selectSchemeType", language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subPages.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <Link href={scheme.link} key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${scheme.color} p-4 text-white`}
                    >
                      <Icon className="text-3xl mb-2" />
                      <h3 className="text-lg sm:text-xl font-bold mb-1.5">
                        {scheme.title}
                      </h3>
                      <div className="text-xs sm:text-sm bg-white bg-opacity-20 rounded-full px-2.5 py-0.5 inline-block">
                        {scheme.count}
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-xs sm:text-sm mb-3">
                        {scheme.description}
                      </p>
                      <div className="flex items-center text-government-orange font-semibold">
                        <span className="mr-2">
                          {getLabel("common.viewSchemes", language)}
                        </span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4 sm:p-5">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getLabel("pages.schemes.needHelp", language)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <FaCalendarAlt className="text-2xl text-government-orange flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-1.5 text-sm sm:text-base">
                  {getLabel("pages.schemes.visitOffice", language)}
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm">
                  {getText(officeHours.weekdays.label, language)}
                  <br />
                  {officeHours.weekdays.hours}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaFileAlt className="text-3xl text-government-green flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">
                  {getLabel("pages.schemes.helpline", language)}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {contact.phone}
                  <br />
                  {getLabel("pages.schemes.email", language)}: {contact.email}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaDownload className="text-3xl text-government-blue flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">
                  {getLabel("pages.schemes.downloadForms", language)}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {getLabel("pages.schemes.getApplicationForms", language)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
