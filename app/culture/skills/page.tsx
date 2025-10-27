"use client";

import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const courses = [
  {
    id: 1,
    title: {
      en: "Computer Skills Training",
      mr: "संगणक कौशल्य प्रशिक्षण",
    },
    description: {
      en: "Basic to advanced computer operation and office software",
      mr: "मूलभूत ते प्रगत संगणक ऑपरेशन आणि ऑफिस सॉफ्टवेअर",
    },
    duration: "3 months",
    students: 60,
  },
  {
    id: 2,
    title: {
      en: "Digital Marketing",
      mr: "डिजिटल मार्केटिंग",
    },
    description: {
      en: "Social media marketing, SEO, and online business basics",
      mr: "सोशल मीडिया मार्केटिंग, SEO, आणि ऑनलाइन व्यवसाय मूलतत्त्वे",
    },
    duration: "2 months",
    students: 45,
  },
  {
    id: 3,
    title: {
      en: "Agricultural Technology",
      mr: "कृषी तंत्रज्ञान",
    },
    description: {
      en: "Modern farming techniques and agricultural management",
      mr: "आधुनिक शेती तंत्रे आणि कृषी व्यवस्थापन",
    },
    duration: "4 months",
    students: 75,
  },
];

const successStories = [
  {
    id: 1,
    name: { en: "Rajesh Patil", mr: "राजेश पाटील" },
    story: {
      en: "Completed digital marketing course and now runs a successful online business",
      mr: "डिजिटल मार्केटिंग कोर्स पूर्ण केला आणि आता यशस्वी ऑनलाइन व्यवसाय चालवत आहे",
    },
    position: { en: "Digital Entrepreneur", mr: "डिजिटल उद्योजक" },
  },
  {
    id: 2,
    name: { en: "Priya Jadhav", mr: "प्रिया जाधव" },
    story: {
      en: "From basic computer course to IT professional in a leading company",
      mr: "मूलभूत संगणक कोर्स पासून आघाडीच्या कंपनीत IT व्यावसायिक",
    },
    position: { en: "IT Professional", mr: "IT व्यावसायिक" },
  },
];

export default function SkillsPage() {
  const { language } = useLanguage();

  const getText = (obj: { en: string; mr: string }) => {
    return language === "en" ? obj.en : obj.mr;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en"
              ? "Employment & Skill Development"
              : "रोजगार व कौशल्य विकास"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Building skills for a better future through comprehensive training programs"
              : "सर्वसमावेशक प्रशिक्षण कार्यक्रमांद्वारे उज्ज्वल भविष्यासाठी कौशल्य विकास"}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaGraduationCap className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === "en" ? "Skill Training" : "कौशल्य प्रशिक्षण"}
            </h3>
            <p className="text-gray-600">
              250+ {language === "en" ? "Trained" : "प्रशिक्षित"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaBriefcase className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === "en" ? "Job Placement" : "नोकरी प्लेसमेंट"}
            </h3>
            <p className="text-gray-600">
              180+ {language === "en" ? "Placed" : "नियुक्त"}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaChartLine className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === "en" ? "Success Rate" : "यश दर"}
            </h3>
            <p className="text-gray-600">85%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHandshake className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              {language === "en" ? "Industry Partners" : "उद्योग भागीदार"}
            </h3>
            <p className="text-gray-600">20+</p>
          </div>
        </div>

        {/* Courses Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Available Courses" : "उपलब्ध अभ्यासक्रम"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-green-800">
                    {getText(course.title)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(course.description)}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>
                      {language === "en" ? "Duration: " : "कालावधी: "}
                      {course.duration}
                    </span>
                    <span>
                      {language === "en" ? "Students: " : "विद्यार्थी: "}
                      {course.students}+
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Success Stories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Success Stories" : "यशोगाथा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-800"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {getText(story.name)}
                </h3>
                <p className="text-gray-600 mb-2">{getText(story.story)}</p>
                <p className="text-green-800 font-medium">
                  {getText(story.position)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="bg-gradient-to-r from-green-800 to-green-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === "en"
              ? "Start Your Journey Today"
              : "आजच तुमचा प्रवास सुरू करा"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "Join our skill development programs and take the first step towards a successful career"
              : "आमच्या कौशल्य विकास कार्यक्रमांमध्ये सामील व्हा आणि यशस्वी करिअरच्या दिशेने पहिले पाऊल टाका"}
          </p>
          <button className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {language === "en" ? "Enroll Now" : "आता नोंदणी करा"}
          </button>
        </section>
      </div>
    </div>
  );
}
