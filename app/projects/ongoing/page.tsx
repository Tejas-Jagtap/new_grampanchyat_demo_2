"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import { FaClock, FaRupeeSign, FaChartLine, FaTools } from "react-icons/fa";

interface OngoingProject {
  id: string;
  name: { en: string; mr: string };
  progress: number;
  startDate: string;
  expectedCompletion: string;
  budget: { en: string; mr: string };
  status: { en: string; mr: string };
  photos: string[];
}

// Dummy data - replace with actual config
const ongoingProjects: OngoingProject[] = [
  {
    id: "water-supply",
    name: {
      en: "24x7 Water Supply Project",
      mr: "२४x७ पाणी पुरवठा प्रकल्प"
    },
    progress: 65,
    startDate: "2025-01",
    expectedCompletion: "2025-12",
    budget: {
      en: "₹ 2.8 Crore",
      mr: "₹ २.८ कोटी"
    },
    status: {
      en: "Pipeline installation in progress",
      mr: "पाईपलाईन स्थापना प्रगतीपथावर"
    },
    photos: ["/images/projects/ongoing/water-1.jpg"]
  }
];

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-blue-600 rounded-full h-4 transition-all duration-500"
        style={{ width: `${progress}%` }}
      >
        <span className="absolute right-0 -top-6 text-sm font-medium">
          {progress}%
        </span>
      </div>
    </div>
  );
}

export default function OngoingProjectsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getLabel("navigation.ongoingProjects", language)}
          </h1>
          <p className="text-gray-600">
            {getLabel("projects.ongoing.description", language)}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {ongoingProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="lg:flex">
                {/* Project Image */}
                <div className="lg:w-1/3">
                  <div className="relative h-64 w-full">
                    <Image
                      src={project.photos[0]}
                      alt={getText(project.name, language)}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className="lg:w-2/3 p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {getText(project.name, language)}
                  </h2>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <ProgressBar progress={project.progress} />
                  </div>

                  {/* Project Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <FaClock className="text-blue-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">
                          {getLabel("projects.startDate", language)}
                        </p>
                        <p className="font-medium">{project.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaChartLine className="text-green-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">
                          {getLabel("projects.completion", language)}
                        </p>
                        <p className="font-medium">{project.expectedCompletion}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaRupeeSign className="text-purple-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">
                          {getLabel("projects.budget", language)}
                        </p>
                        <p className="font-medium">
                          {getText(project.budget, language)}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaTools className="text-orange-600 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">
                          {getLabel("projects.status", language)}
                        </p>
                        <p className="font-medium">
                          {getText(project.status, language)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}