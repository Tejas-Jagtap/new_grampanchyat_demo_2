"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import { FaCheck, FaRupeeSign, FaCalendar, FaChartLine } from "react-icons/fa";

interface ProjectsConfig {
  completedProjects: Array<{
    id: string;
    name: { en: string; mr: string };
    year: string;
    budget: { en: string; mr: string };
    impact: { en: string; mr: string };
    photos: string[];
    description: { en: string; mr: string };
  }>;
}

// This would normally come from your config, using dummy data for now
const projectsConfig: ProjectsConfig = {
  completedProjects: [
    {
      id: "road-improvement",
      name: {
        en: "Road Improvement Project",
        mr: "रस्ता सुधारणा प्रकल्प",
      },
      year: "2024",
      budget: {
        en: "₹ 1.5 Crore",
        mr: "₹ १.५ कोटी",
      },
      impact: {
        en: "Improved connectivity for 5000+ residents",
        mr: "५०००+ रहिवाशांसाठी सुधारित मार्ग जोडणी",
      },
      photos: ["/images/hero1.jpg"],
      description: {
        en: "Complete renovation of main village road with proper drainage system",
        mr: "योग्य ड्रेनेज सिस्टमसह मुख्य गाव रस्त्याचे संपूर्ण नूतनीकरण",
      },
    },
    // Add more dummy projects here
  ],
};

export default function CompletedProjectsPage() {
  const { language } = useLanguage();
  const projects = projectsConfig.completedProjects;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("navigation.completedProjects", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("navigation", language)}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={project.photos[0]}
                  alt={getText(project.name, language)}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {getText(project.name, language)}
                </h2>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <FaCalendar className="text-government-blue mr-2" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center">
                    <FaRupeeSign className="text-green-600 mr-2" />
                    <span>{getText(project.budget, language)}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">
                  {getText(project.description, language)}
                </p>

                {/* Impact Section */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <FaChartLine className="text-blue-600 mt-1 mr-2" />
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-1">
                        {getLabel("projects.impact", language)}
                      </h3>
                      <p className="text-blue-800">
                        {getText(project.impact, language)}
                      </p>
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
