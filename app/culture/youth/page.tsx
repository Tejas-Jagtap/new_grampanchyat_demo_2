"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const programs = [
  {
    id: 1,
    title: {
      en: "Youth Sports Academy",
      mr: "युवा क्रीडा अकादमी",
    },
    description: {
      en: "Training in cricket, kabaddi, and athletics for youth aged 8-18",
      mr: "८-१८ वयोगटातील युवकांसाठी क्रिकेट, कबड्डी आणि अॅथलेटिक्स प्रशिक्षण",
    },
    participants: 120,
    category: "sports",
  },
  {
    id: 2,
    title: {
      en: "Digital Learning Center",
      mr: "डिजिटल शिक्षण केंद्र",
    },
    description: {
      en: "Computer literacy and digital skills training for students",
      mr: "विद्यार्थ्यांसाठी संगणक साक्षरता आणि डिजिटल कौशल्य प्रशिक्षण",
    },
    participants: 200,
    category: "education",
  },
  {
    id: 3,
    title: {
      en: "Career Guidance Program",
      mr: "करिअर मार्गदर्शन कार्यक्रम",
    },
    description: {
      en: "Regular workshops and counseling sessions for career planning",
      mr: "करिअर नियोजनासाठी नियमित कार्यशाळा आणि समुपदेशन सत्रे",
    },
    participants: 150,
    category: "education",
  },
];

const achievements = [
  {
    id: 1,
    title: {
      en: "District Level Sports Championship",
      mr: "जिल्हास्तरीय क्रीडा स्पर्धा",
    },
    achievement: {
      en: "Gold in Kabaddi (2024)",
      mr: "कबड्डीमध्ये सुवर्णपदक (२०२४)",
    },
  },
  {
    id: 2,
    title: {
      en: "State Level Academic Excellence",
      mr: "राज्यस्तरीय शैक्षणिक उत्कृष्टता",
    },
    achievement: {
      en: "Best Rural Educational Initiative Award",
      mr: "सर्वोत्कृष्ट ग्रामीण शैक्षणिक उपक्रम पुरस्कार",
    },
  },
];

export default function YouthPage() {
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
              ? "Education, Youth & Sports"
              : "शिक्षण, युवक व खेळ"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Empowering our youth through education and sports activities"
              : "शिक्षण आणि क्रीडा उपक्रमांद्वारे युवकांचे सक्षमीकरण"}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-800">500+</div>
            <div className="text-gray-600">
              {language === "en" ? "Active Students" : "सक्रिय विद्यार्थी"}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-800">10+</div>
            <div className="text-gray-600">
              {language === "en" ? "Sports Teams" : "क्रीडा संघ"}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-3xl font-bold text-blue-800">15+</div>
            <div className="text-gray-600">
              {language === "en"
                ? "Educational Programs"
                : "शैक्षणिक कार्यक्रम"}
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Our Programs" : "आमचे कार्यक्रम"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => (
              <div
                key={program.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-800">
                  {getText(program.title)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {getText(program.description)}
                </p>
                <div className="text-sm text-gray-500">
                  {language === "en" ? "Participants: " : "सहभागी: "}
                  {program.participants}+
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Recent Achievements" : "अलीकडील यश"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-800"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {getText(item.title)}
                </h3>
                <p className="text-blue-800 font-medium">
                  {getText(item.achievement)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">
            {language === "en"
              ? "Join Our Programs"
              : "आमच्या कार्यक्रमांमध्ये सहभागी व्हा"}
          </h2>
          <p className="mb-6">
            {language === "en"
              ? "Whether you're interested in sports or education, we have a program for you."
              : "तुम्हाला क्रीडा किंवा शिक्षणात रस असो, आमच्याकडे तुमच्यासाठी एक कार्यक्रम आहे."}
          </p>
          <button className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            {language === "en" ? "Register Now" : "आता नोंदणी करा"}
          </button>
        </section>
      </div>
    </div>
  );
}
