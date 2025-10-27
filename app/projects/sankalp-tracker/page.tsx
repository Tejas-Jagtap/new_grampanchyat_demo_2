"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import {
  FaClipboardCheck,
  FaCalendar,
  FaChartLine,
  FaFlag,
} from "react-icons/fa";

interface SankalpItem {
  id: string;
  resolution: { en: string; mr: string };
  date: string;
  status: { en: string; mr: string };
  nextMilestone: { en: string; mr: string };
}

// Dummy data - replace with actual config
const sankalpItems: SankalpItem[] = [
  {
    id: "sankalp-1",
    resolution: {
      en: "100% Digital Literacy",
      mr: "१००% डिजिटल साक्षरता",
    },
    date: "2025-01-26",
    status: {
      en: "In Progress - 75% Achieved",
      mr: "प्रगतीपथावर - ७५% साध्य",
    },
    nextMilestone: {
      en: "Youth Training Program - March 2025",
      mr: "युवा प्रशिक्षण कार्यक्रम - मार्च २०२५",
    },
  },
];

function ProgressIndicator({ status }: { status: string }) {
  const percentage = parseInt(status.match(/\d+/)?.[0] || "0");

  return (
    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}

export default function SankalpTrackerPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getLabel("navigation.sankalpTracker", language)}
          </h1>
          <p className="text-gray-600">
            {getLabel("projects.sankalpTracker.description", language)}
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-green-600 text-2xl font-bold">15</div>
            <div className="text-gray-600">Total Resolutions</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-blue-600 text-2xl font-bold">8</div>
            <div className="text-gray-600">In Progress</div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-purple-600 text-2xl font-bold">7</div>
            <div className="text-gray-600">Completed</div>
          </div>
        </div>

        {/* Resolutions List */}
        <div className="space-y-6">
          {sankalpItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Resolution Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">
                      {getText(item.resolution, language)}
                    </h2>
                    <div className="flex items-center text-gray-600">
                      <FaCalendar className="mr-2" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    <FaChartLine className="mr-2" />
                    {getText(item.status, language)}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <ProgressIndicator status={getText(item.status, language)} />
                </div>

                {/* Next Milestone */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <FaFlag className="text-orange-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {getLabel("projects.nextMilestone", language)}
                      </h3>
                      <p className="text-gray-700">
                        {getText(item.nextMilestone, language)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    {getLabel("projects.viewDetails", language)}
                  </button>
                  <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    {getLabel("projects.downloadReport", language)}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
