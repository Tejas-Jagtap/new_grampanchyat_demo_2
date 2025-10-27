"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getText } from "@/lib/config";

const traditions = [
  {
    id: 1,
    title: {
      en: "Village Fair (जत्रा)",
      mr: "गावची जत्रा",
    },
    description: {
      en: "Annual village fair celebrating local culture and traditions",
      mr: "स्थानिक संस्कृती आणि परंपरांचा जल्लोष करणारी वार्षिक गाव जत्रा",
    },
    date: "February",
    image: "/images/placeholder.jpg",
  },
  {
    id: 2,
    title: {
      en: "Harvest Festival",
      mr: "पीक हर्षोत्सव",
    },
    description: {
      en: "Celebration of harvest season with traditional rituals and gatherings",
      mr: "पारंपारिक विधी आणि मेळाव्यांसह पीक हंगामाचा उत्सव",
    },
    date: "November",
    image: "/images/placeholder.jpg",
  },
];

const heritage = [
  {
    id: 1,
    title: {
      en: "Ancient Temple",
      mr: "प्राचीन मंदिर",
    },
    description: {
      en: "A historic temple showcasing traditional architecture",
      mr: "पारंपारिक वास्तुकला दर्शविणारे ऐतिहासिक मंदिर",
    },
    age: "200+ years",
    image: "/images/placeholder.jpg",
  },
  {
    id: 2,
    title: {
      en: "Community Hall",
      mr: "ग्रामसभा भवन",
    },
    description: {
      en: "Historic gathering place for village meetings and celebrations",
      mr: "गाव सभा आणि समारंभांसाठी ऐतिहासिक सभास्थान",
    },
    age: "100+ years",
    image: "/images/placeholder.jpg",
  },
];

export default function VillageCulturePage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en"
              ? "Our Village & Culture"
              : "आमचे गाव / संस्कृती"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Discover the rich cultural heritage and traditions of our village"
              : "आमच्या गावाचा समृद्ध सांस्कृतिक वारसा आणि परंपरा जाणून घ्या"}
          </p>
        </div>

        {/* Traditions Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Festivals & Traditions" : "सण आणि परंपरा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traditions.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={getText(item.title, language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {getText(item.title, language)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(item.description, language)}
                  </p>
                  <div className="text-sm text-gray-500">
                    {language === "en" ? "Celebrated in: " : "साजरा होतो: "}
                    {item.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Heritage Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Heritage Sites" : "वारसा स्थळे"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heritage.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={getText(item.title, language)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {getText(item.title, language)}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {getText(item.description, language)}
                  </p>
                  <div className="text-sm text-gray-500">
                    {language === "en" ? "Age: " : "वय: "}
                    {item.age}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engagement Section */}
        <section className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {language === "en" ? "Get Involved" : "सहभागी व्हा"}
          </h2>
          <p className="text-gray-600">
            {language === "en"
              ? "Want to contribute to preserving our cultural heritage? Join our cultural committee or participate in our events."
              : "आमचा सांस्कृतिक वारसा जतन करण्यात योगदान द्यायचे आहे? आमच्या सांस्कृतिक समितीत सामील व्हा किंवा आमच्या कार्यक्रमांमध्ये सहभागी व्हा."}
          </p>
          <button className="mt-4 bg-[#0A1931] text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition-colors">
            {language === "en"
              ? "Contact Cultural Committee"
              : "सांस्कृतिक समितीशी संपर्क साधा"}
          </button>
        </section>
      </div>
    </div>
  );
}
