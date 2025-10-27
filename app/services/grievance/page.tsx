"use client";

import React from "react";
import {
  FaClipboardList,
  FaSearch,
  FaFileAlt,
  FaPlusCircle,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  {
    id: "water",
    title: { en: "Water Supply", mr: "पाणी पुरवठा" },
    icon: "💧",
  },
  {
    id: "sanitation",
    title: { en: "Sanitation", mr: "स्वच्छता" },
    icon: "🧹",
  },
  {
    id: "roads",
    title: { en: "Roads & Infrastructure", mr: "रस्ते आणि पायाभूत सुविधा" },
    icon: "🛣️",
  },
  {
    id: "electricity",
    title: { en: "Street Lighting", mr: "रस्ता दिवे" },
    icon: "💡",
  },
];

const complaints = [
  {
    id: 1,
    title: {
      en: "Water Supply Disruption",
      mr: "पाणी पुरवठा खंडित",
    },
    category: "water",
    status: "pending",
    date: "2025-10-20",
    description: {
      en: "No water supply in Ward 5 for last 2 days",
      mr: "वॉर्ड ५ मध्ये गेल्या २ दिवसांपासून पाणी पुरवठा नाही",
    },
    trackingId: "GR2025001",
  },
  {
    id: 2,
    title: {
      en: "Street Light Not Working",
      mr: "रस्ता दिवा काम करत नाही",
    },
    category: "electricity",
    status: "resolved",
    date: "2025-10-15",
    description: {
      en: "Street light near temple not working for a week",
      mr: "मंदिराजवळील रस्ता दिवा एक आठवड्यापासून काम करत नाही",
    },
    trackingId: "GR2025002",
  },
  {
    id: 3,
    title: {
      en: "Road Maintenance Required",
      mr: "रस्ता देखभालीची आवश्यकता",
    },
    category: "roads",
    status: "in-progress",
    date: "2025-10-18",
    description: {
      en: "Potholes on main market road need urgent attention",
      mr: "मुख्य बाजार रस्त्यावरील खड्ड्यांची तातडीने दुरुस्ती आवश्यक",
    },
    trackingId: "GR2025003",
  },
];

export default function GrievancePage() {
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
      case "resolved":
        return "text-green-600 bg-green-50";
      case "in-progress":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-red-600 bg-red-50";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "resolved":
        return language === "en" ? "Resolved" : "सोडवले";
      case "in-progress":
        return language === "en" ? "In Progress" : "प्रगतीपथावर";
      default:
        return language === "en" ? "Pending" : "प्रलंबित";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en" ? "Grievance Redressal" : "तक्रार निवारण"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Submit and track your complaints for quick resolution"
              : "जलद निराकरणासाठी तुमच्या तक्रारी सादर करा आणि त्यांचा मागोवा घ्या"}
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700">
              <FaPlusCircle />
              <span>
                {language === "en"
                  ? "Submit New Complaint"
                  : "नवीन तक्रार दाखल करा"}
              </span>
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="relative">
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder={
                  language === "en"
                    ? "Track complaint by ID..."
                    : "तक्रार ID द्वारे शोधा..."
                }
              />
              <FaSearch className="absolute left-3 top-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Complaint Categories" : "तक्रार श्रेणी"}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                className="p-4 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors text-center"
              >
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="font-medium text-gray-900">
                  {getText(category.title)}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Complaints */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              {language === "en" ? "Recent Complaints" : "अलीकडील तक्रारी"}
            </h2>
            <div className="space-y-6">
              {complaints.map((complaint) => (
                <div
                  key={complaint.id}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <FaFileAlt className="text-green-600" />
                        <h3 className="font-semibold text-gray-900">
                          {getText(complaint.title)}
                        </h3>
                      </div>
                      <p className="text-gray-600 mb-2">
                        {getText(complaint.description)}
                      </p>
                      <div className="text-sm text-gray-500">
                        {complaint.trackingId} • {formatDate(complaint.date)}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full ${getStatusColor(
                          complaint.status
                        )}`}
                      >
                        {complaint.status === "resolved" ? (
                          <FaCheckCircle className="mr-1" />
                        ) : (
                          <FaExclamationTriangle className="mr-1" />
                        )}
                        {getStatusText(complaint.status)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-xl font-bold mb-4">
            {language === "en" ? "Need Assistance?" : "मदत हवी आहे?"}
          </h2>
          <p className="text-gray-600 mb-6">
            {language === "en"
              ? "Contact our support team for help with filing complaints"
              : "तक्रार दाखल करण्यासाठी मदतीसाठी आमच्या सहाय्य टीमशी संपर्क साधा"}
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-green-800 text-white rounded-lg hover:bg-green-700">
              {language === "en" ? "Contact Support" : "सहाय्य संपर्क"}
            </button>
            <button className="px-6 py-3 border-2 border-green-800 text-green-800 rounded-lg hover:bg-green-50">
              {language === "en" ? "View FAQs" : "FAQs पहा"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
