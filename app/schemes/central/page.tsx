"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getCentralSchemes,
  getText,
  getLabel,
  getHelplineNumbers,
} from "@/lib/config";
import {
  FaFileAlt,
  FaRupeeSign,
  FaUserCheck,
  FaDownload,
  FaClipboardList,
} from "react-icons/fa";

export default function CentralSchemesPage() {
  const { language } = useLanguage();

  // Load schemes dynamically from config
  const centralSchemes = getCentralSchemes();
  const helplineNumbers = getHelplineNumbers();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("navigation.centralSchemes", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.schemes.centralSubtitle", language)}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-3">
            {getLabel("pages.schemes.aboutCentralSchemes", language)}
          </h2>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {getLabel("pages.schemes.centralIntro", language)}
          </p>
        </section>

        {/* Schemes List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {centralSchemes.map((scheme) => {
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

            return (
              <div
                key={scheme.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4">
                  <div className="flex items-start gap-3">
                    <FaFileAlt className="text-3xl sm:text-4xl flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-lg sm:text-xl font-bold mb-1.5">
                        {schemeName}
                      </h2>
                      <p className="text-xs sm:text-sm opacity-80">
                        {getLabel("pages.schemes.centralGovernment", language)}
                      </p>
                    </div>
                    {scheme.beneficiaries && (
                      <div className="text-right">
                        <p className="text-xs opacity-80">
                          {getLabel("pages.schemes.beneficiaries", language)}
                        </p>
                        <p className="text-xl sm:text-2xl font-bold">
                          {scheme.beneficiaries}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
                    {/* Benefits */}
                    <div className="lg:col-span-2 space-y-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <FaRupeeSign className="text-government-orange" />
                          <h3 className="font-bold text-government-blue text-sm sm:text-base">
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
                              <span>{getText(doc, language)}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="mt-6 w-full bg-[#0A1931] hover:bg-government-orange text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
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
            {getLabel("pages.schemes.needHelp", language)}
          </h2>
          <p className="text-center text-base sm:text-lg mb-6">
            {getLabel("pages.schemes.helpText", language)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="text-center">
              <p className="font-semibold">
                📞 {getText(helplineNumbers.central.label, language)}
              </p>
              <p className="text-lg">{helplineNumbers.central.number}</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">
                📧 {getLabel("pages.schemes.email", language)}
              </p>
              <p className="text-lg">schemes@grampanchayat.gov.in</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">
                🏢 {getLabel("pages.schemes.districtOffice", language)}
              </p>
              <p className="text-lg">
                {getLabel("pages.schemes.monFri", language)}, 10 AM - 6 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
