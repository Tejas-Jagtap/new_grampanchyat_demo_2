"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import {
  FaCheckCircle,
  FaClock,
  FaLightbulb,
  FaImage,
  FaClipboardCheck,
  FaChartLine,
} from "react-icons/fa";

export default function ProjectsPage() {
  const { language } = useLanguage();

  const sections = [
    {
      id: "completed",
      title: { en: "Completed Projects", mr: "पूर्ण झालेले प्रकल्प" },
      description: {
        en: "Successfully completed village development initiatives",
        mr: "यशस्वीरित्या पूर्ण झालेले गाव विकास उपक्रम",
      },
      icon: FaCheckCircle,
      link: "/projects/completed",
      color: "green",
      stats: { count: 12, value: "₹15.5 Cr" },
    },
    {
      id: "ongoing",
      title: { en: "Ongoing Projects", mr: "सुरू असलेले प्रकल्प" },
      description: {
        en: "Current projects in various stages of implementation",
        mr: "विविध टप्प्यांवर असलेले सध्याचे प्रकल्प",
      },
      icon: FaClock,
      link: "/projects/ongoing",
      color: "blue",
      stats: { count: 8, value: "₹25.2 Cr" },
    },
    {
      id: "proposed",
      title: { en: "Proposed Projects", mr: "प्रस्तावित प्रकल्प" },
      description: {
        en: "Upcoming initiatives for village development",
        mr: "गाव विकासासाठी येणारे उपक्रम",
      },
      icon: FaLightbulb,
      link: "/projects/proposed",
      color: "yellow",
      stats: { count: 5, value: "₹18.3 Cr" },
    },
    {
      id: "before-after",
      title: { en: "Before & After Gallery", mr: "आधी आणि नंतर दालन" },
      description: {
        en: "Visual transformation journey of our village",
        mr: "आमच्या गावाचा दृश्य बदलाचा प्रवास",
      },
      icon: FaImage,
      link: "/projects/before-after",
      color: "purple",
      stats: { count: 15, label: "Transformations" },
    },
    {
      id: "sankalp",
      title: { en: "Sankalp Tracker", mr: "संकल्प ट्रॅकर" },
      description: {
        en: "Progress on our village development resolutions",
        mr: "आमच्या गाव विकास संकल्पांची प्रगती",
      },
      icon: FaClipboardCheck,
      link: "/projects/sankalp-tracker",
      color: "orange",
      stats: { total: 25, completed: 15 },
    },
    {
      id: "impact",
      title: { en: "Impact Dashboard", mr: "प्रभाव डॅशबोर्ड" },
      description: {
        en: "Measuring the impact of our development initiatives",
        mr: "आमच्या विकास उपक्रमांचा प्रभाव मोजणे",
      },
      icon: FaChartLine,
      link: "/projects/impact",
      color: "indigo",
      stats: { sectors: 6, metrics: 24 },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {getLabel("navigation.projects", language)}
          </h1>
          <p className="text-lg opacity-90">
            {getLabel("projects.mainDescription", language)}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">₹58.5 Cr</div>
              <div className="text-sm opacity-80">Total Project Value</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">25</div>
              <div className="text-sm opacity-80">Active Projects</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">12,000+</div>
              <div className="text-sm opacity-80">Beneficiaries</div>
            </div>
          </div>
        </div>

        {/* Project Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <Link key={section.id} href={section.link} className="block">
              <div
                className={`bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden`}
              >
                <div className={`bg-${section.color}-50 p-6`}>
                  <div className="flex items-center mb-4">
                    <section.icon
                      className={`text-${section.color}-600 text-2xl mr-3`}
                    />
                    <h2 className="text-xl font-bold text-gray-900">
                      {getText(section.title, language)}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {getText(section.description, language)}
                  </p>

                  {/* Section-specific Stats */}
                  <div className="bg-white/50 rounded-lg p-4">
                    {"count" in section.stats && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Projects</span>
                        <span className="font-bold text-gray-900">
                          {section.stats.count}
                        </span>
                      </div>
                    )}
                    {"value" in section.stats && (
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-gray-600">Total Value</span>
                        <span className="font-bold text-gray-900">
                          {section.stats.value}
                        </span>
                      </div>
                    )}
                    {"completed" in section.stats && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Progress</span>
                        <span className="font-bold text-gray-900">
                          {section.stats.completed}/{section.stats.total}
                        </span>
                      </div>
                    )}
                    {"sectors" in section.stats && (
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Tracking</span>
                        <span className="font-bold text-gray-900">
                          {section.stats.sectors} Sectors,{" "}
                          {section.stats.metrics} Metrics
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/projects/impact"
            className="bg-government-blue text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {getLabel("projects.viewImpact", language)}
          </Link>
          <Link
            href="/projects/sankalp-tracker"
            className="bg-white text-government-blue px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors border border-government-blue"
          >
            {getLabel("projects.trackProgress", language)}
          </Link>
        </div>
      </div>
    </div>
  );
}
