"use client";

import React from "react";
import Image from "next/image";
import { FaHandshake, FaLightbulb, FaUsers, FaChartLine } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const partners = [
  {
    id: 1,
    name: {
      en: "Rural Development Foundation",
      mr: "ग्रामीण विकास प्रतिष्ठान",
    },
    description: {
      en: "Working on sustainable agricultural practices and farmer empowerment",
      mr: "शाश्वत शेती पद्धती आणि शेतकरी सक्षमीकरणावर काम",
    },
    projects: 5,
    beneficiaries: 1000,
    focus: "agriculture",
  },
  {
    id: 2,
    name: {
      en: "Digital Literacy Mission",
      mr: "डिजिटल साक्षरता मिशन",
    },
    description: {
      en: "Promoting digital education and technology adoption in rural areas",
      mr: "ग्रामीण भागात डिजिटल शिक्षण आणि तंत्रज्ञान स्वीकार प्रोत्साहन",
    },
    projects: 3,
    beneficiaries: 750,
    focus: "education",
  },
  {
    id: 3,
    name: {
      en: "Health & Wellness Trust",
      mr: "आरोग्य आणि कल्याण ट्रस्ट",
    },
    description: {
      en: "Providing healthcare services and health education",
      mr: "आरोग्य सेवा आणि आरोग्य शिक्षण प्रदान",
    },
    projects: 4,
    beneficiaries: 1500,
    focus: "healthcare",
  },
];

const impacts = [
  {
    id: 1,
    title: {
      en: "Village Development Project",
      mr: "गाव विकास प्रकल्प",
    },
    impact: {
      en: "Improved infrastructure and facilities for 5000+ residents",
      mr: "५०००+ रहिवाशांसाठी सुधारित पायाभूत सुविधा",
    },
    partner: {
      en: "Infrastructure Development Corp",
      mr: "पायाभूत सुविधा विकास कॉर्प",
    },
  },
  {
    id: 2,
    title: {
      en: "Women Empowerment Initiative",
      mr: "महिला सक्षमीकरण उपक्रम",
    },
    impact: {
      en: "Trained 300+ women in various skills and entrepreneurship",
      mr: "३००+ महिलांना विविध कौशल्ये आणि उद्योजकतेचे प्रशिक्षण",
    },
    partner: {
      en: "Women's Development Association",
      mr: "महिला विकास संघटना",
    },
  },
];

export default function PartnersPage() {
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
              ? "NGO/CSR Partners"
              : "भागीदार NGO / CSR सहकार्य"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Collaborating with organizations to drive positive change in our community"
              : "आमच्या समुदायात सकारात्मक बदल घडवण्यासाठी संस्थांसोबत सहकार्य"}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHandshake className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "Active Partners" : "सक्रिय भागीदार"}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaLightbulb className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">25+</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "Projects" : "प्रकल्प"}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaUsers className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">5000+</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "Beneficiaries" : "लाभार्थी"}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaChartLine className="text-4xl text-purple-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">₹2Cr+</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "CSR Investment" : "CSR गुंतवणूक"}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Our Partners" : "आमचे भागीदार"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-800">
                    {getText(partner.name)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(partner.description)}
                  </p>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-600">
                      {language === "en" ? "Projects: " : "प्रकल्प: "}
                      {partner.projects}
                    </span>
                    <span className="text-purple-600">
                      {language === "en" ? "Beneficiaries: " : "लाभार्थी: "}
                      {partner.beneficiaries}+
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Impact Stories" : "प्रभाव कथा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {impacts.map((impact) => (
              <div
                key={impact.id}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-800"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {getText(impact.title)}
                </h3>
                <p className="text-gray-600 mb-2">{getText(impact.impact)}</p>
                <p className="text-purple-800 font-medium">
                  {getText(impact.partner)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="bg-gradient-to-r from-purple-800 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === "en" ? "Partner With Us" : "आमच्यासोबत भागीदारी करा"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "Join us in our mission to create sustainable development and positive change"
              : "शाश्वत विकास आणि सकारात्मक बदल घडवण्याच्या आमच्या मिशनमध्ये सहभागी व्हा"}
          </p>
          <button className="bg-white text-purple-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {language === "en" ? "Become a Partner" : "भागीदार बना"}
          </button>
        </section>
      </div>
    </div>
  );
}
