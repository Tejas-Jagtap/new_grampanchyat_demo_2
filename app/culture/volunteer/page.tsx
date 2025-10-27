"use client";

import React from "react";
import {
  FaHandsHelping,
  FaGraduationCap,
  FaTree,
  FaHeartbeat,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const opportunities = [
  {
    id: 1,
    title: {
      en: "Education Support",
      mr: "शैक्षणिक सहाय्य",
    },
    description: {
      en: "Help students with studies and organize educational activities",
      mr: "विद्यार्थ्यांना अभ्यासात मदत आणि शैक्षणिक उपक्रम आयोजित करा",
    },
    commitment: "4-6 hours/week",
    volunteers: 25,
  },
  {
    id: 2,
    title: {
      en: "Environmental Projects",
      mr: "पर्यावरण प्रकल्प",
    },
    description: {
      en: "Participate in tree plantation and cleanliness drives",
      mr: "वृक्षारोपण आणि स्वच्छता मोहिमेत सहभागी व्हा",
    },
    commitment: "8 hours/month",
    volunteers: 40,
  },
  {
    id: 3,
    title: {
      en: "Health Awareness",
      mr: "आरोग्य जागृती",
    },
    description: {
      en: "Conduct health camps and awareness programs",
      mr: "आरोग्य शिबिरे आणि जागृती कार्यक्रम आयोजित करा",
    },
    commitment: "6-8 hours/month",
    volunteers: 30,
  },
];

const testimonials = [
  {
    id: 1,
    name: { en: "Amit Kumar", mr: "अमित कुमार" },
    role: { en: "Education Volunteer", mr: "शिक्षण स्वयंसेवक" },
    quote: {
      en: "Volunteering here has been incredibly rewarding. Seeing students grow is priceless.",
      mr: "येथे स्वयंसेवक म्हणून काम करणे अत्यंत समाधानकारक आहे. विद्यार्थ्यांची प्रगती पाहणे अमूल्य आहे.",
    },
  },
  {
    id: 2,
    name: { en: "Sunita Patil", mr: "सुनीता पाटील" },
    role: { en: "Environmental Volunteer", mr: "पर्यावरण स्वयंसेवक" },
    quote: {
      en: "Being part of the green initiatives has helped me contribute to our village's future.",
      mr: "हरित उपक्रमांचा भाग असल्याने मला आमच्या गावाच्या भविष्यात योगदान देण्यास मदत झाली.",
    },
  },
];

export default function VolunteerPage() {
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
            {language === "en" ? "Become a Volunteer" : "स्वयंसेवक बना"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Join our community of dedicated volunteers and make a difference"
              : "समर्पित स्वयंसेवकांच्या समुदायात सामील व्हा आणि बदल घडवा"}
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHandsHelping className="text-4xl text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">120+</div>
            <div className="text-gray-600">
              {language === "en" ? "Active Volunteers" : "सक्रिय स्वयंसेवक"}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaGraduationCap className="text-4xl text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">1000+</div>
            <div className="text-gray-600">
              {language === "en" ? "Students Helped" : "मदत केलेले विद्यार्थी"}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaTree className="text-4xl text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">5000+</div>
            <div className="text-gray-600">
              {language === "en" ? "Trees Planted" : "लावलेली झाडे"}
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <FaHeartbeat className="text-4xl text-red-600 mx-auto mb-4" />
            <div className="text-2xl font-bold text-gray-900">20+</div>
            <div className="text-gray-600">
              {language === "en" ? "Health Camps" : "आरोग्य शिबिरे"}
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Volunteer Opportunities" : "स्वयंसेवक संधी"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-red-800">
                    {getText(opportunity.title)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(opportunity.description)}
                  </p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>{opportunity.commitment}</span>
                    <span>
                      {opportunity.volunteers}+{" "}
                      {language === "en" ? "volunteers" : "स्वयंसेवक"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Volunteer Stories" : "स्वयंसेवक कथा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {getText(testimonial.name)}
                  </h3>
                  <p className="text-red-800">{getText(testimonial.role)}</p>
                </div>
                <p className="text-gray-600 italic">
                  {getText(testimonial.quote)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Registration Form */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en"
              ? "Join as a Volunteer"
              : "स्वयंसेवक म्हणून सामील व्हा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                {language === "en" ? "Full Name" : "पूर्ण नाव"}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                {language === "en" ? "Email" : "ईमेल"}
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700 mb-2">
                {language === "en" ? "Areas of Interest" : "रुचीचे क्षेत्र"}
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200">
                <option>{language === "en" ? "Education" : "शिक्षण"}</option>
                <option>
                  {language === "en" ? "Environment" : "पर्यावरण"}
                </option>
                <option>{language === "en" ? "Health" : "आरोग्य"}</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <button className="w-full bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                {language === "en" ? "Submit Application" : "अर्ज सबमिट करा"}
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
