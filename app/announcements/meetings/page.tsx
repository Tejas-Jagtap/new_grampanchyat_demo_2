"use client";

import React from "react";
import {
  FaCalendarAlt,
  FaUsers,
  FaMapMarkerAlt,
  FaFileAlt,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const meetings = [
  {
    id: 1,
    date: "2025-11-01",
    time: "10:00",
    title: {
      en: "Monthly Gram Sabha Meeting",
      mr: "मासिक ग्रामसभा बैठक",
    },
    venue: {
      en: "Gram Panchayat Hall",
      mr: "ग्रामपंचायत सभागृह",
    },
    agenda: {
      en: "Discussion on water conservation project and budget allocation",
      mr: "जलसंवर्धन प्रकल्प आणि अर्थसंकल्प वाटप यावर चर्चा",
    },
  },
  {
    id: 2,
    date: "2025-11-05",
    time: "14:00",
    title: {
      en: "Women's Self Help Group Meeting",
      mr: "महिला स्वयंसहाय्यता गट बैठक",
    },
    venue: {
      en: "Community Center",
      mr: "सामुदायिक केंद्र",
    },
    agenda: {
      en: "Review of ongoing projects and new initiative planning",
      mr: "चालू प्रकल्पांचा आढावा आणि नवीन उपक्रम नियोजन",
    },
  },
  {
    id: 3,
    date: "2025-11-10",
    time: "11:00",
    title: {
      en: "Youth Development Committee",
      mr: "युवा विकास समिती",
    },
    venue: {
      en: "Digital Library",
      mr: "डिजिटल ग्रंथालय",
    },
    agenda: {
      en: "Sports facility improvement and skill development programs",
      mr: "क्रीडा सुविधा सुधारणा आणि कौशल्य विकास कार्यक्रम",
    },
  },
];

export default function MeetingsPage() {
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
            {language === "en" ? "Meeting Notices" : "बैठक सूचना"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Stay informed about upcoming meetings and important gatherings"
              : "आगामी बैठका आणि महत्त्वाच्या सभांबद्दल माहिती मिळवा"}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-2">
              <FaCalendarAlt className="text-blue-600 text-xl mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                {language === "en" ? "This Month" : "या महिन्यात"}
              </h3>
            </div>
            <div className="text-2xl font-bold text-blue-600">8</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "Scheduled Meetings" : "नियोजित बैठका"}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-2">
              <FaUsers className="text-blue-600 text-xl mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                {language === "en" ? "Committees" : "समित्या"}
              </h3>
            </div>
            <div className="text-2xl font-bold text-blue-600">5</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "Active Groups" : "सक्रिय गट"}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-2">
              <FaFileAlt className="text-blue-600 text-xl mr-2" />
              <h3 className="text-lg font-semibold text-gray-900">
                {language === "en" ? "Minutes" : "इतिवृत्त"}
              </h3>
            </div>
            <div className="text-2xl font-bold text-blue-600">15</div>
            <div className="text-sm text-gray-600">
              {language === "en" ? "Published Records" : "प्रकाशित नोंदी"}
            </div>
          </div>
        </div>

        {/* Meetings List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              {language === "en" ? "Upcoming Meetings" : "आगामी बैठका"}
            </h2>
            <div className="space-y-6">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="border-l-4 border-blue-600 bg-blue-50 rounded-r-lg p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 md:mb-0">
                      {getText(meeting.title)}
                    </h3>
                    <div className="flex items-center text-blue-800">
                      <FaCalendarAlt className="mr-2" />
                      <span>
                        {formatDate(meeting.date)} | {meeting.time}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start mb-3">
                    <FaMapMarkerAlt className="text-blue-600 mt-1 mr-2" />
                    <span className="text-gray-700">
                      {getText(meeting.venue)}
                    </span>
                  </div>
                  <div className="bg-white rounded p-4">
                    <div className="font-medium text-gray-900 mb-2">
                      {language === "en" ? "Agenda" : "कार्यसूची"}:
                    </div>
                    <p className="text-gray-600">{getText(meeting.agenda)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            {language === "en"
              ? "Download Meeting Schedule"
              : "बैठक वेळापत्रक डाउनलोड करा"}
          </button>
          <button className="bg-white text-blue-800 border-2 border-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            {language === "en"
              ? "View Past Meeting Minutes"
              : "मागील बैठकीचे इतिवृत्त पहा"}
          </button>
        </div>
      </div>
    </div>
  );
}
