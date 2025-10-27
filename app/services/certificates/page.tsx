"use client";

import React from "react";
import { FaIdCard, FaDownload, FaSearch, FaFilter } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const certificates = [
  {
    id: 1,
    title: {
      en: "Birth Certificate",
      mr: "जन्म दाखला",
    },
    description: {
      en: "Official birth registration certificate",
      mr: "अधिकृत जन्म नोंदणी प्रमाणपत्र",
    },
    processingTime: "7-10 days",
    fee: "₹100",
    requirements: [
      {
        en: "Hospital birth record",
        mr: "हॉस्पिटल जन्म नोंद",
      },
      {
        en: "Parents' ID proof",
        mr: "पालकांचा ओळखपत्र पुरावा",
      },
    ],
  },
  {
    id: 2,
    title: {
      en: "Residence Certificate",
      mr: "रहिवासी दाखला",
    },
    description: {
      en: "Proof of residence in the village",
      mr: "गावातील निवासाचा पुरावा",
    },
    processingTime: "5-7 days",
    fee: "₹50",
    requirements: [
      {
        en: "Property documents/Rent agreement",
        mr: "मालमत्ता कागदपत्रे/भाडे करार",
      },
      {
        en: "Recent utility bill",
        mr: "अलीकडील उपयोगिता बिल",
      },
    ],
  },
  {
    id: 3,
    title: {
      en: "Income Certificate",
      mr: "उत्पन्न दाखला",
    },
    description: {
      en: "Official income verification document",
      mr: "अधिकृत उत्पन्न पडताळणी दस्तऐवज",
    },
    processingTime: "10-15 days",
    fee: "₹150",
    requirements: [
      {
        en: "Salary slips/Income proof",
        mr: "पगार स्लिप/उत्पन्नाचा पुरावा",
      },
      {
        en: "Bank statements",
        mr: "बँक स्टेटमेंट",
      },
    ],
  },
];

const forms = [
  {
    id: 1,
    title: {
      en: "New Water Connection",
      mr: "नवीन पाणी कनेक्शन",
    },
    type: "application",
  },
  {
    id: 2,
    title: {
      en: "Property Transfer",
      mr: "मालमत्ता हस्तांतरण",
    },
    type: "application",
  },
  {
    id: 3,
    title: {
      en: "Business Registration",
      mr: "व्यवसाय नोंदणी",
    },
    type: "registration",
  },
];

export default function CertificatesPage() {
  const { language } = useLanguage();

  const getText = (obj: { en: string; mr: string }) => {
    return language === "en" ? obj.en : obj.mr;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en"
              ? "Certificates & Forms"
              : "प्रमाणपत्रे व फॉर्म्स"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Apply for certificates and download official forms"
              : "प्रमाणपत्रांसाठी अर्ज करा आणि अधिकृत फॉर्म्स डाउनलोड करा"}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={
                    language === "en"
                      ? "Search certificates..."
                      : "प्रमाणपत्रे शोधा..."
                  }
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700">
              <FaFilter />
              <span>{language === "en" ? "Filter" : "फिल्टर"}</span>
            </button>
          </div>
        </div>

        {/* Certificates Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en"
              ? "Available Certificates"
              : "उपलब्ध प्रमाणपत्रे"}
          </h2>
          <div className="space-y-6">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {getText(cert.title)}
                      </h3>
                      <p className="text-gray-600">
                        {getText(cert.description)}
                      </p>
                    </div>
                    <button className="mt-4 md:mt-0 flex items-center gap-2 px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700">
                      {language === "en" ? "Apply Now" : "अर्ज करा"}
                    </button>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          {language === "en"
                            ? "Requirements"
                            : "आवश्यक कागदपत्रे"}
                          :
                        </h4>
                        <ul className="list-disc list-inside text-gray-600">
                          {cert.requirements.map((req, index) => (
                            <li key={index}>{getText(req)}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <div>
                          <span className="font-medium text-gray-900">
                            {language === "en"
                              ? "Processing Time: "
                              : "प्रक्रिया कालावधी: "}
                          </span>
                          <span className="text-gray-600">
                            {cert.processingTime}
                          </span>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900">
                            {language === "en" ? "Fee: " : "शुल्क: "}
                          </span>
                          <span className="text-gray-600">{cert.fee}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Forms Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Download Forms" : "फॉर्म्स डाउनलोड करा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {forms.map((form) => (
              <div key={form.id} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  {getText(form.title)}
                </h3>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200">
                  <FaDownload />
                  <span>{language === "en" ? "Download" : "डाउनलोड"}</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
