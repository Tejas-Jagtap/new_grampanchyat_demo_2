"use client";

import React from "react";
import { FaBell, FaDownload, FaEye, FaSearch, FaFilter } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const circulars = [
  {
    id: 1,
    date: "2025-10-25",
    number: "GPN/2025/001",
    title: {
      en: "New Water Conservation Guidelines",
      mr: "नवीन जलसंवर्धन मार्गदर्शक तत्त्वे",
    },
    department: {
      en: "Environment",
      mr: "पर्यावरण",
    },
    type: {
      en: "Circular",
      mr: "परिपत्रक",
    },
    priority: "high",
  },
  {
    id: 2,
    date: "2025-10-23",
    number: "GPN/2025/002",
    title: {
      en: "Property Tax Collection Drive",
      mr: "मालमत्ता कर वसुली मोहीम",
    },
    department: {
      en: "Revenue",
      mr: "महसूल",
    },
    type: {
      en: "Order",
      mr: "आदेश",
    },
    priority: "medium",
  },
  {
    id: 3,
    date: "2025-10-20",
    number: "GPN/2025/003",
    title: {
      en: "COVID-19 Vaccination Schedule",
      mr: "कोविड-१९ लसीकरण वेळापत्रक",
    },
    department: {
      en: "Health",
      mr: "आरोग्य",
    },
    type: {
      en: "Notice",
      mr: "सूचना",
    },
    priority: "high",
  },
];

const departments = [
  { id: 1, name: { en: "All", mr: "सर्व" } },
  { id: 2, name: { en: "Environment", mr: "पर्यावरण" } },
  { id: 3, name: { en: "Revenue", mr: "महसूल" } },
  { id: 4, name: { en: "Health", mr: "आरोग्य" } },
];

export default function CircularsPage() {
  const { language } = useLanguage();

  const getText = (obj: { en: string; mr: string }) => {
    return language === "en" ? obj.en : obj.mr;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "mr-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-green-600 bg-green-50";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en" ? "Circulars & Orders" : "परिपत्रके / आदेश"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Access official circulars, orders, and important notices"
              : "अधिकृत परिपत्रके, आदेश आणि महत्त्वाच्या सूचना पहा"}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder={
                    language === "en"
                      ? "Search circulars..."
                      : "परिपत्रके शोधा..."
                  }
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </div>
            <div className="flex gap-4">
              <select className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                {departments.map((dept) => (
                  <option key={dept.id} value={dept.id}>
                    {getText(dept.name)}
                  </option>
                ))}
              </select>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700">
                <FaFilter />
                <span>{language === "en" ? "Filter" : "फिल्टर"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Circulars List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="space-y-6">
              {circulars.map((circular) => (
                <div
                  key={circular.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {getText(circular.title)}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span>
                          {language === "en" ? "Ref No: " : "संदर्भ क्र: "}
                          {circular.number}
                        </span>
                        <span>{formatDate(circular.date)}</span>
                        <span
                          className={`px-3 py-1 rounded-full ${getPriorityColor(
                            circular.priority
                          )}`}
                        >
                          {getText(circular.type)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 flex gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                        <FaEye />
                        <span>{language === "en" ? "View" : "पहा"}</span>
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700">
                        <FaDownload />
                        <span>
                          {language === "en" ? "Download" : "डाउनलोड"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600">
                      {language === "en" ? "Department: " : "विभाग: "}
                    </span>
                    <span className="text-gray-900">
                      {getText(circular.department)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              ←
            </button>
            <button className="px-4 py-2 bg-green-800 text-white rounded-lg">
              1
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              3
            </button>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
              →
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
