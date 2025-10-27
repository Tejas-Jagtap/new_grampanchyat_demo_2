"use client";

import React, { useState } from "react";
import {
  FaDownload,
  FaCalendarAlt,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaEye,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

// ---------------------------
// DOCUMENTS DATA
// ---------------------------
const documents = [
  {
    id: 1,
    title: {
      en: "Guidelines for the Gram Panchayat Website",
      mr: "ग्रामपंचायत वेबसाईट मार्गदर्शक सूचना",
    },
    category: {
      en: "Financial Documents",
      mr: "आर्थिक कागदपत्रे",
    },
    type: "pdf",
    size: "2.5 MB",
    date: "2025-10-15",
    url: "/docs/annual-budget-report-2025.pdf", // ✅ Add file path
  },
];

// ---------------------------
// EVENTS DATA
// ---------------------------
const events = [
  {
    id: 1,
    title: { en: "Cultural Festival", mr: "सांस्कृतिक महोत्सव" },
    date: "2025-11-15",
    time: "16:00",
    venue: { en: "Village Ground", mr: "गाव मैदान" },
  },
  {
    id: 2,
    title: { en: "Health Camp", mr: "आरोग्य शिबीर" },
    date: "2025-11-20",
    time: "09:00",
    venue: { en: "Primary Health Center", mr: "प्राथमिक आरोग्य केंद्र" },
  },
  {
    id: 3,
    title: { en: "Farmers' Meeting", mr: "शेतकरी सभा" },
    date: "2025-11-25",
    time: "11:00",
    venue: { en: "Gram Panchayat Hall", mr: "ग्रामपंचायत सभागृह" },
  },
];

// ---------------------------
// MAIN COMPONENT
// ---------------------------
export default function DownloadsPage() {
  const { language } = useLanguage();
  const [selectedDoc, setSelectedDoc] = useState<(typeof documents)[0] | null>(
    null
  );

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

  const getFileIcon = (type: string) => {
    switch (type) {
      case "pdf":
        return <FaFilePdf className="text-red-600" />;
      case "doc":
      case "docx":
        return <FaFileWord className="text-blue-600" />;
      case "xlsx":
      case "xls":
        return <FaFileExcel className="text-green-600" />;
      default:
        return <FaDownload className="text-gray-600" />;
    }
  };

  // Build viewer URL (Google Docs for Word/Excel)
  const getViewerUrl = (doc: (typeof documents)[0]) => {
    if (doc.type === "pdf") return doc.url;
    const fullUrl = `${window.location.origin}${doc.url}`;
    return `https://docs.google.com/gview?url=${fullUrl}&embedded=true`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ------------------ HERO SECTION ------------------ */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en" ? "Downloads & Calendar" : "डाउनलोड / कॅलेंडर"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Access important documents and view upcoming events"
              : "महत्त्वाची कागदपत्रे आणि आगामी कार्यक्रम पहा"}
          </p>
        </div>

        {/* ------------------ DOCUMENTS SECTION ------------------ */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900">
              {language === "en"
                ? "Important Documents"
                : "महत्त्वाची कागदपत्रे"}
            </h2>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      {getFileIcon(doc.type)}
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {getText(doc.title)}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {getText(doc.category)} • {doc.size}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {/* View Button */}
                      <button
                        onClick={() => setSelectedDoc(doc)}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                      >
                        <FaEye />
                        <span>{language === "en" ? "View" : "पहा"}</span>
                      </button>

                      {/* Download Button */}
                      <a
                        href={doc.url}
                        download
                        className="flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700"
                      >
                        <FaDownload />
                        <span>
                          {language === "en" ? "Download" : "डाउनलोड"}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------ EVENTS SECTION ------------------ */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
              <FaCalendarAlt className="text-purple-600 mr-2" />
              {language === "en" ? "Upcoming Events" : "आगामी कार्यक्रम"}
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="border-l-4 border-purple-600 bg-purple-50 rounded-r-lg p-4"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {getText(event.title)}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-gray-600">
                      <FaCalendarAlt className="mr-2" />
                      <span>
                        {formatDate(event.date)} | {event.time}
                      </span>
                    </div>
                    <div className="text-gray-600">
                      {language === "en" ? "Venue: " : "ठिकाण: "}
                      {getText(event.venue)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------ CALENDAR DOWNLOAD ------------------ */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-purple-800 text-white rounded-lg hover:bg-purple-700">
            <FaCalendarAlt />
            <span>
              {language === "en"
                ? "Download Complete Event Calendar"
                : "संपूर्ण कार्यक्रम कॅलेंडर डाउनलोड करा"}
            </span>
          </button>
        </div>
      </div>

      {/* ------------------ DOCUMENT VIEWER MODAL ------------------ */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-1/2 rounded-lg overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">
                {getText(selectedDoc.title)}
              </h3>
              <button
                onClick={() => setSelectedDoc(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              <iframe
                src={getViewerUrl(selectedDoc)}
                className="w-full h-[70vh]"
                title={getText(selectedDoc.title)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
