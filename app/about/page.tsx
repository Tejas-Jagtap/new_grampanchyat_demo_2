"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaHistory,
  FaInfoCircle,
  FaUserTie,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import {
  getSiteConfig,
  getText,
  getContactInfo,
  getLabel,
  getOfficeHours,
} from "@/lib/config";

export default function AboutPage() {
  const { language } = useLanguage();

  // Load village info from config
  const siteConfig = getSiteConfig();
  const village = siteConfig.village;
  const contactInfo = getContactInfo();
  const officeHours = getOfficeHours();

  const subPages = [
    {
      title: getLabel("navigation.introduction", language),
      description: getLabel("about.intro.description", language),
      icon: FaInfoCircle,
      link: "/about/introduction",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: getLabel("navigation.history", language),
      description: getLabel("about.history.description", language),
      icon: FaHistory,
      link: "/about/history",
      color: "from-green-400 to-green-600",
    },
    {
      title: getLabel("navigation.administration", language),
      description: getLabel("about.admin.description", language),
      icon: FaUserTie,
      link: "/about/administration",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("nav.about", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getText(village.name, language)} -{" "}
            {getText(village.district, language)}
          </p>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getLabel("common.selectSection", language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {subPages.map((page, index) => {
              const Icon = page.icon;
              return (
                <Link href={page.link} key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${page.color} p-4 text-white`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-3xl shrink-0 -translate-y-[1px]" />
                        <h3 className="text-lg sm:text-xl font-bold leading-none m-0">
                          {page.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-xs sm:text-sm mb-3">
                        {page.description}
                      </p>
                      <div className="flex items-center text-government-orange font-semibold text-sm">
                        <span className="mr-2">
                          {getLabel("common.readMore", language)}
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

        {/* Contact Information Section */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-government-blue">
              {getLabel("nav.contact", language)}
            </h2>
            <Link
              href="/contact"
              className="text-government-orange hover:text-government-blue font-semibold flex items-center gap-2 text-xs sm:text-sm"
            >
              {getLabel("common.viewDetails", language)}
              <FaArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Address Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#0A1931] text-white w-10 h-10 rounded-lg flex items-center justify-center">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <h3 className="font-bold text-government-blue text-base">
                  {getLabel("contact.address", language)}
                </h3>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">
                {getLabel("contact.office", language)}
                <br />
                {getText(village.name, language)}
                <br />
                {getText(village.taluka, language)},{" "}
                {getText(village.district, language)}
                <br />
                {language === "mr" ? "पिन कोड" : "PIN"}: {village.pincode}
              </p>
            </div>

            {/* Phone Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-government-green text-white w-10 h-10 rounded-lg flex items-center justify-center">
                  <FaPhone className="text-lg" />
                </div>
                <h3 className="font-bold text-government-blue text-base">
                  {getLabel("contact.phone", language)}
                </h3>
              </div>
              <p className="text-gray-700 text-xs">
                <span className="font-semibold">
                  {language === "mr" ? "कार्यालय" : "Office"}:
                </span>
                <br />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-government-green hover:text-government-blue font-semibold text-sm"
                >
                  {contactInfo.phone}
                </a>
              </p>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-government-orange text-white w-10 h-10 rounded-lg flex items-center justify-center">
                  <FaEnvelope className="text-lg" />
                </div>
                <h3 className="font-bold text-government-blue text-base">
                  {getLabel("contact.email", language)}
                </h3>
              </div>
              <p className="text-gray-700 text-xs">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-government-orange hover:text-government-blue font-semibold break-all"
                >
                  {contactInfo.email}
                </a>
              </p>
            </div>

            {/* Office Hours Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-3">
                <div className="bg-red-500 text-white w-10 h-10 rounded-lg flex items-center justify-center">
                  <FaClock className="text-lg" />
                </div>
                <h3 className="font-bold text-government-blue text-base">
                  {getLabel("contact.officeHours", language)}
                </h3>
              </div>
              <p className="text-gray-700 text-xs leading-relaxed">
                {getText(officeHours.weekdays.label, language)}
                <br />
                <span className="font-semibold">
                  {officeHours.weekdays.hours}
                </span>
                <br />
                <span className="text-red-600 text-xs">
                  {getText(officeHours.sunday.label, language)}{" "}
                  {getText(officeHours.sunday.hours, language)}
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
