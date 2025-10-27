"use client";

import React from "react";
import Link from "next/link";
import {
  FaBell,
  FaCalendarAlt,
  FaClipboardList,
  FaClock,
  FaDownload,
  FaEye,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = [
  {
    id: "meetings",
    icon: FaClipboardList,
    color: "blue",
    link: "/announcements/meetings",
    count: 5,
    title: { en: "Meeting Notices", mr: "बैठक सूचना" },
    description: {
      en: "Latest meeting schedules and agendas",
      mr: "नवीनतम बैठक वेळापत्रक आणि कार्यसूची",
    },
  },
  {
    id: "circulars",
    icon: FaBell,
    color: "green",
    link: "/announcements/circulars",
    count: 8,
    title: { en: "Circulars / Orders", mr: "परिपत्रके / आदेश" },
    description: {
      en: "Official circulars and government orders",
      mr: "अधिकृत परिपत्रके आणि शासकीय आदेश",
    },
  },
  {
    id: "deadlines",
    icon: FaClock,
    color: "red",
    link: "/announcements/deadlines",
    count: 3,
    title: { en: "Deadlines", mr: "अंतिम मुदती" },
    description: {
      en: "Important dates and submission deadlines",
      mr: "महत्त्वाच्या तारखा आणि सादरीकरणाच्या अंतिम मुदती",
    },
  },
  {
    id: "downloads",
    icon: FaDownload,
    color: "purple",
    link: "/announcements/downloads",
    count: 12,
    title: { en: "Downloads / Calendar", mr: "डाउनलोड / कॅलेंडर" },
    description: {
      en: "Important documents and event calendar",
      mr: "महत्त्वाची कागदपत्रे आणि कार्यक्रम कॅलेंडर",
    },
  },
];

const recentAnnouncements = [
  {
    id: 1,
    date: "2025-10-25",
    title: { en: "Monthly Gram Sabha Meeting", mr: "मासिक ग्रामसभा बैठक" },
    type: "meetings",
  },
  {
    id: 2,
    date: "2025-10-23",
    title: {
      en: "New Water Conservation Guidelines",
      mr: "नवीन जलसंवर्धन मार्गदर्शक तत्त्वे",
    },
    type: "circulars",
  },
  {
    id: 3,
    date: "2025-10-20",
    title: { en: "Tax Payment Last Date", mr: "कर भरणा अंतिम दिनांक" },
    type: "deadlines",
  },
];

export default function AnnouncementsPage() {
  const { language } = useLanguage();

  const getText = (obj: { en: string; mr: string }) =>
    language === "en" ? obj.en : obj.mr;

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "mr-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            {language === "en" ? "Announcements" : "घोषणा"}
          </h1>
          <p className="text-sm sm:text-lg opacity-90">
            {language === "en"
              ? "Stay updated with latest notices, circulars, and important dates"
              : "नवीनतम सूचना, परिपत्रके आणि महत्त्वाच्या तारखांसह अद्ययावत रहा"}
          </p>
        </div>

        {/* Recent Announcements */}
        <div className="bg-white rounded-lg shadow-lg p-5 sm:p-6 mb-8">
          <h2 className="text-xl font-bold mb-5 text-gray-900">
            {language === "en" ? "Recent Announcements" : "अलीकडील घोषणा"}
          </h2>

          <div className="divide-y divide-gray-200">
            {recentAnnouncements.map((announcement) => (
              <div
                key={announcement.id}
                className="py-4 flex flex-col gap-3 sm:gap-4"
              >
                {/* Title + Date */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 truncate text-base sm:text-lg">
                      {getText(announcement.title)}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {formatDate(announcement.date)}
                    </p>
                  </div>

                  {/* Tag */}
                  <span className="inline-block mt-2 sm:mt-0 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-800 w-fit self-start sm:self-auto">
                    {announcement.type}
                  </span>
                </div>

                {/* Buttons below title for mobile */}
                <div className="flex flex-col xs:flex-row sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
                  <button className="flex items-center justify-center gap-2 px-3 py-2 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition w-full sm:w-auto">
                    <FaEye className="text-gray-600" />
                    {language === "en" ? "View" : "पहा"}
                  </button>
                  <button className="flex items-center justify-center gap-2 px-3 py-2 bg-[#0A1931] text-white text-sm rounded-md hover:bg-blue-800 transition w-full sm:w-auto">
                    <FaDownload />
                    {language === "en" ? "Download" : "डाउनलोड"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={section.link}
              className="block bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <section.icon
                    className={`text-${section.color}-600 text-2xl mr-3`}
                  />
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {getText(section.title)}
                  </h2>
                </div>
                <p className="text-gray-600 text-sm sm:text-base mb-3">
                  {getText(section.description)}
                </p>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">
                    {section.count} {language === "en" ? "items" : "बाबी"}
                  </span>
                  <span
                    className={`text-${section.color}-600 font-medium hover:underline`}
                  >
                    {language === "en" ? "View All" : "सर्व पहा"} →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
