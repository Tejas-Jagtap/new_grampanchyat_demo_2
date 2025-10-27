"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import {
  FaHome,
  FaGraduationCap,
  FaBriefcase,
  FaHandsHelping,
  FaUsers,
} from "react-icons/fa";

export default function CulturePage() {
  const { language } = useLanguage();

  const sections = [
    {
      id: "village",
      title: { en: "Our Village & Culture", mr: "आमचे गाव / संस्कृती" },
      description: {
        en: "Explore the rich heritage and cultural tapestry of our village",
        mr: "आमच्या गावाचा समृद्ध वारसा आणि सांस्कृतिक वैभव जाणून घ्या",
      },
      icon: FaHome,
      link: "/culture/village",
      color: "orange",
      stats: {
        traditions: 15,
        events: 8,
      },
    },
    {
      id: "youth",
      title: { en: "Education, Youth & Sports", mr: "शिक्षण, युवक व खेळ" },
      description: {
        en: "Youth development through education and sports activities",
        mr: "शिक्षण आणि क्रीडा उपक्रमांद्वारे युवा विकास",
      },
      icon: FaGraduationCap,
      link: "/culture/youth",
      color: "blue",
      stats: {
        students: 500,
        programs: 12,
      },
    },
    {
      id: "skills",
      title: {
        en: "Employment & Skill Development",
        mr: "रोजगार व कौशल्य विकास",
      },
      description: {
        en: "Empowering through skill development and job opportunities",
        mr: "कौशल्य विकास आणि रोजगाराच्या संधींद्वारे सक्षमीकरण",
      },
      icon: FaBriefcase,
      link: "/culture/skills",
      color: "green",
      stats: {
        trained: 250,
        employed: 180,
      },
    },
    {
      id: "partners",
      title: { en: "NGO/CSR Partners", mr: "भागीदार NGO / CSR सहकार्य" },
      description: {
        en: "Our collaboration with various development partners",
        mr: "विविध विकास भागीदारांसोबतचे आमचे सहकार्य",
      },
      icon: FaHandsHelping,
      link: "/culture/partners",
      color: "purple",
      stats: {
        partners: 8,
        projects: 15,
      },
    },
    {
      id: "volunteer",
      title: { en: "Become a Volunteer", mr: "स्वयंसेवक बना" },
      description: {
        en: "Join us in our village development journey",
        mr: "आमच्या गाव विकास प्रवासात सहभागी व्हा",
      },
      icon: FaUsers,
      link: "/culture/volunteer",
      color: "red",
      stats: {
        volunteers: 120,
        opportunities: 10,
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {getLabel("navigation.culture", language)}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Experience the vibrant culture and community initiatives of our village"
              : "आमच्या गावाची जीवंत संस्कृती आणि सामुदायिक उपक्रम अनुभवा"}
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm opacity-80">Cultural Programs</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm opacity-80">Active Youth</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">8</div>
              <div className="text-sm opacity-80">NGO Partners</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">120+</div>
              <div className="text-sm opacity-80">Volunteers</div>
            </div>
          </div>
        </div>

        {/* Sections Grid */}
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
                    {Object.entries(section.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center mb-2 last:mb-0"
                      >
                        <span className="text-gray-600 capitalize">{key}</span>
                        <span className="font-bold text-gray-900">
                          {value}+
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-8 text-center">
          <Link
            href="/culture/volunteer"
            className="inline-block bg-[#0A1931] text-white px-8 py-4 rounded-lg hover:bg-blue-900 transition-colors text-lg font-semibold"
          >
            {language === "en"
              ? "Join Our Community"
              : "आमच्या समुदायात सामील व्हा"}
          </Link>
        </div>
      </div>
    </div>
  );
}
