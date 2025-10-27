"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getSiteConfig,
  getLocalSchemes,
  getText,
  getLabel,
} from "@/lib/config";
import {
  FaFileAlt,
  FaRupeeSign,
  FaUserCheck,
  FaDownload,
} from "react-icons/fa";

export default function LocalSchemesPage() {
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();
  const contact = siteConfig.contact;

  // Load schemes dynamically from config
  const localSchemes = getLocalSchemes();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("navigation.localSchemes", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.schemes.localSubtitle", language)}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-3">
            {getLabel("pages.schemes.aboutLocalSchemes", language)}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {getLabel("pages.schemes.localIntro", language)}
          </p>
        </section>

        {/* Schemes List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {localSchemes.map((scheme) => {
            const schemeName = getText(scheme.name, language);
            const schemeBenefit =
              typeof scheme.benefit === "string"
                ? scheme.benefit
                : getText(scheme.benefit, language);
            const schemeDescription = scheme.description
              ? getText(scheme.description, language)
              : "";
            const schemeEligibility = scheme.eligibility
              ? getText(scheme.eligibility, language)
              : "";
            const schemeStatus = scheme.status
              ? typeof scheme.status === "string"
                ? scheme.status
                : getText(scheme.status, language)
              : "";

            return (
              <div
                key={scheme.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-800 text-white p-4">
                  <div className="flex items-start gap-3">
                    <FaFileAlt className="text-3xl sm:text-4xl flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-bold mb-1.5">
                        {schemeName}
                      </h2>
                      <p className="text-xs sm:text-sm opacity-80">
                        {getLabel("pages.schemes.gramPanchayat", language)}
                      </p>
                    </div>
                    {schemeStatus && (
                      <div className="bg-white bg-opacity-20 px-3 py-1.5 rounded-lg">
                        <p className="text-xs opacity-80">
                          {getLabel("pages.schemes.status", language)}
                        </p>
                        <p className="text-xs sm:text-sm font-semibold">
                          {schemeStatus.split(" - ")[0] || schemeStatus}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Benefits */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaRupeeSign className="text-government-orange" />
                          <h3 className="font-bold text-government-blue text-lg">
                            {getLabel("pages.schemes.benefits", language)}
                          </h3>
                        </div>
                        <p className="text-gray-700 pl-6 text-base sm:text-lg font-semibold mb-1">
                          {schemeBenefit}
                        </p>
                        {schemeDescription && (
                          <p className="text-gray-600 pl-6 text-sm sm:text-base">
                            {schemeDescription}
                          </p>
                        )}
                      </div>

                      {schemeEligibility && (
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <FaUserCheck className="text-government-green" />
                            <h3 className="font-bold text-government-blue text-lg">
                              {getLabel("pages.schemes.eligibility", language)}
                            </h3>
                          </div>
                          <p className="text-gray-700 pl-6 text-sm sm:text-base">
                            {schemeEligibility}
                          </p>
                        </div>
                      )}

                      {schemeStatus && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <p className="text-sm sm:text-base">
                            <span className="font-semibold text-government-green">
                              {getLabel(
                                "pages.schemes.currentStatus",
                                language
                              )}
                              :
                            </span>{" "}
                            {schemeStatus}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Required Documents */}
                    {scheme.documents && scheme.documents.length > 0 && (
                      <div className="lg:col-span-1 bg-gray-50 p-4 sm:p-6 rounded-lg">
                        <h3 className="font-bold text-government-blue mb-4 flex items-center gap-2">
                          <FaDownload className="text-government-orange" />
                          {getLabel(
                            "pages.schemes.requiredDocuments",
                            language
                          )}
                        </h3>
                        <ul className="space-y-2">
                          {scheme.documents.map((doc, index) => (
                            <li
                              key={index}
                              className="flex items-start gap-2 text-sm sm:text-base"
                            >
                              <span className="w-2 h-2 bg-government-orange rounded-full mt-2 flex-shrink-0"></span>
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 w-full bg-government-green hover:bg-[#0A1931] text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                          {getLabel("pages.schemes.applyNow", language)}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-[#01A3D6] text-white rounded-lg p-4 sm:p-5">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {getLabel("pages.schemes.visitGramPanchayat", language)}
          </h2>
          <p className="text-center text-base sm:text-lg mb-6">
            {getLabel("pages.schemes.localHelpText", language)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="text-center">
              <p className="font-semibold">
                📞 {getLabel("pages.schemes.officeContact", language)}
              </p>
              <p className="text-lg">{contact.phone}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">
                🕐 {getLabel("pages.schemes.officeHours", language)}
              </p>
              <p className="text-lg">
                {getLabel("pages.schemes.monFri", language)}, 10 AM - 6 PM
              </p>
            </div>
            <div className="text-center">
              <p className="font-semibold">
                📧 {getLabel("pages.schemes.email", language)}
              </p>
              <p className="text-lg">{contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
