"use client";

import React from "react";
import { FaComments, FaStar, FaThumbsUp } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  {
    id: "services",
    title: {
      en: "General Services",
      mr: "सामान्य सेवा",
    },
  },
  {
    id: "infrastructure",
    title: {
      en: "Infrastructure",
      mr: "पायाभूत सुविधा",
    },
  },
  {
    id: "sanitation",
    title: {
      en: "Sanitation",
      mr: "स्वच्छता",
    },
  },
  {
    id: "education",
    title: {
      en: "Education",
      mr: "शिक्षण",
    },
  },
  {
    id: "healthcare",
    title: {
      en: "Healthcare",
      mr: "आरोग्य सेवा",
    },
  },
];

const recentFeedback = [
  {
    id: 1,
    category: {
      en: "General Services",
      mr: "सामान्य सेवा",
    },
    rating: 4,
    status: "implemented",
    date: "2025-10-15",
  },
  {
    id: 2,
    category: {
      en: "Infrastructure",
      mr: "पायाभूत सुविधा",
    },
    rating: 5,
    status: "under-review",
    date: "2025-10-10",
  },
];

export default function FeedbackPage() {
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

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en" ? "Feedback Form" : "फीडबॅक फॉर्म"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Share your feedback to help us improve our services"
              : "आमच्या सेवा सुधारण्यासाठी तुमचा अभिप्राय शेअर करा"}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-800">250+</div>
            <div className="text-gray-600">
              {language === "en" ? "Feedbacks Received" : "प्राप्त अभिप्राय"}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-800">85%</div>
            <div className="text-gray-600">
              {language === "en" ? "Implementation Rate" : "अंमलबजावणी दर"}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-red-800">4.5/5</div>
            <div className="text-gray-600">
              {language === "en" ? "Average Rating" : "सरासरी रेटिंग"}
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            {language === "en"
              ? "Submit Your Feedback"
              : "तुमचा अभिप्राय सबमिट करा"}
          </h2>

          <form className="space-y-6">
            {/* Category Selection */}
            <div>
              <label className="block text-gray-700 mb-2">
                {language === "en" ? "Select Category" : "श्रेणी निवडा"}
              </label>
              <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {getText(category.title)}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating */}
            <div>
              <label className="block text-gray-700 mb-2">
                {language === "en" ? "Your Rating" : "तुमचे रेटिंग"}
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-2xl text-yellow-400 hover:text-yellow-500"
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text */}
            <div>
              <label className="block text-gray-700 mb-2">
                {language === "en" ? "Your Feedback" : "तुमचा अभिप्राय"}
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                placeholder={
                  language === "en"
                    ? "Share your experience and suggestions..."
                    : "तुमचा अनुभव आणि सूचना शेअर करा..."
                }
              />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 mb-2">
                  {language === "en" ? "Name" : "नाव"}
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  {language === "en" ? "Mobile Number" : "मोबाईल नंबर"}
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-800 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              {language === "en" ? "Submit Feedback" : "अभिप्राय सबमिट करा"}
            </button>
          </form>
        </div>

        {/* Recent Feedback */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              {language === "en" ? "Recent Feedback" : "अलीकडील अभिप्राय"}
            </h2>
            <div className="space-y-4">
              {recentFeedback.map((feedback) => (
                <div
                  key={feedback.id}
                  className="border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {getText(feedback.category)}
                      </h3>
                      <div className="text-sm text-gray-500">
                        {formatDate(feedback.date)}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: feedback.rating }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FaThumbsUp
                      className={
                        feedback.status === "implemented"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    />
                    <span
                      className={
                        feedback.status === "implemented"
                          ? "text-green-600"
                          : "text-yellow-600"
                      }
                    >
                      {feedback.status === "implemented"
                        ? language === "en"
                          ? "Implemented"
                          : "अंमलबजावणी केली"
                        : language === "en"
                        ? "Under Review"
                        : "विचाराधीन"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-red-50 rounded-lg p-4 text-sm text-red-800">
          <p>
            {language === "en"
              ? "Your feedback is anonymous by default. Contact information is optional and will only be used if follow-up is needed."
              : "तुमचा अभिप्राय डीफॉल्टनुसार अनामिक आहे. संपर्क माहिती वैकल्पिक आहे आणि केवळ पाठपुरावा आवश्यक असल्यास वापरली जाईल."}
          </p>
        </div>
      </div>
    </div>
  );
}
