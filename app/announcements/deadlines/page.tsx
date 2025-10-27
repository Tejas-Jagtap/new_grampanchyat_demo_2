"use client";

import React from "react";
import {
  FaClock,
  FaExclamationTriangle,
  FaCheckCircle,
  FaBell,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const deadlines = [
  {
    id: 1,
    title: {
      en: "Property Tax Payment",
      mr: "मालमत्ता कर भरणा",
    },
    description: {
      en: "Last date for property tax payment with early bird discount",
      mr: "लवकर भरणा सवलतीसह मालमत्ता कर भरण्याची अंतिम तारीख",
    },
    date: "2025-11-30",
    type: "tax",
    status: "upcoming",
    daysLeft: 35,
  },
  {
    id: 2,
    title: {
      en: "Business License Renewal",
      mr: "व्यवसाय परवाना नूतनीकरण",
    },
    description: {
      en: "Deadline for annual business license renewal",
      mr: "वार्षिक व्यवसाय परवाना नूतनीकरणाची अंतिम मुदत",
    },
    date: "2025-11-15",
    type: "license",
    status: "urgent",
    daysLeft: 20,
  },
  {
    id: 3,
    title: {
      en: "Scholarship Application",
      mr: "शिष्यवृत्ती अर्ज",
    },
    description: {
      en: "Last date for submitting scholarship applications",
      mr: "शिष्यवृत्ती अर्ज सादर करण्याची अंतिम तारीख",
    },
    date: "2025-12-15",
    type: "education",
    status: "upcoming",
    daysLeft: 50,
  },
];

const categories = [
  {
    id: "all",
    name: { en: "All Deadlines", mr: "सर्व अंतिम मुदती" },
    count: 8,
  },
  {
    id: "tax",
    name: { en: "Tax Related", mr: "कर संबंधित" },
    count: 3,
  },
  {
    id: "license",
    name: { en: "Licenses", mr: "परवाने" },
    count: 2,
  },
  {
    id: "education",
    name: { en: "Education", mr: "शिक्षण" },
    count: 3,
  },
];

export default function DeadlinesPage() {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "text-red-600 bg-red-50";
      case "upcoming":
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
            {language === "en" ? "Important Deadlines" : "अंतिम मुदती"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Track important dates and submission deadlines"
              : "महत्त्वाच्या तारखा आणि सादरीकरणाच्या अंतिम मुदती"}
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="font-semibold text-gray-900">
                {getText(category.name)}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                {category.count} {language === "en" ? "items" : "बाबी"}
              </p>
            </button>
          ))}
        </div>

        {/* Deadlines List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              {language === "en" ? "Active Deadlines" : "सक्रिय अंतिम मुदती"}
            </h2>
            <div className="space-y-6">
              {deadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className="border-l-4 border-red-600 rounded-r-lg bg-white shadow-md p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {getText(deadline.title)}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {getText(deadline.description)}
                      </p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <div
                        className={`inline-flex items-center px-3 py-1 rounded-full ${getStatusColor(
                          deadline.status
                        )}`}
                      >
                        <FaClock className="mr-2" />
                        <span>
                          {deadline.daysLeft}{" "}
                          {language === "en" ? "days left" : "दिवस बाकी"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-gray-600">
                      {language === "en" ? "Due Date: " : "अंतिम तारीख: "}
                      <span className="text-gray-900 font-medium">
                        {formatDate(deadline.date)}
                      </span>
                    </div>
                    <button className="text-red-600 hover:text-red-800 font-medium">
                      {language === "en" ? "Set Reminder" : "रिमाईंडर सेट करा"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {language === "en"
                  ? "Deadline Notifications"
                  : "अंतिम मुदत सूचना"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Get reminders before deadlines"
                  : "अंतिम मुदतीपूर्वी रिमाईंडर मिळवा"}
              </p>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700">
              <FaBell />
              <span>
                {language === "en" ? "Enable Notifications" : "सूचना सक्षम करा"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
