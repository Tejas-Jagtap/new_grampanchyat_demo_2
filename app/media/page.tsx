"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaImage,
  FaVideo,
  FaCalendarAlt,
  FaArrowRight,
  FaPlayCircle,
} from "react-icons/fa";
import { getLabel } from "@/lib/config";

interface BilingualText {
  en: string;
  mr: string;
}

interface MediaItem {
  id: number;
  type: "photo" | "video" | "event";
  title: BilingualText;
  description: BilingualText;
  thumbnail: string;
  date: string;
}

interface MediaCategory {
  en: string;
  mr: string;
}

interface MediaSection {
  id: string;
  icon: React.ReactNode;
  title: BilingualText;
  description: BilingualText;
  categories: MediaCategory[];
  href: string;
  color: string;
}

export default function MediaPage() {
  const { language } = useLanguage();

  const featuredItems: MediaItem[] = [
    {
      id: 1,
      type: "photo",
      title: {
        en: "Republic Day Celebration 2025",
        mr: "प्रजासत्ताक दिन समारंभ २०२५",
      },
      description: {
        en: "Village gathering for flag hoisting ceremony",
        mr: "ध्वजारोहण समारंभासाठी ग्रामस्थांची उपस्थिती",
      },
      thumbnail: "/images/republic-day.jpg",
      date: "26 Jan 2025",
    },
    {
      id: 2,
      type: "video",
      title: {
        en: "Village Development Projects Overview",
        mr: "ग्राम विकास प्रकल्पांचा आढावा",
      },
      description: {
        en: "Documentary on recent infrastructure improvements",
        mr: "अलीकडील पायाभूत सुविधांच्या सुधारणांवरील माहितीपट",
      },
      thumbnail: "/images/development.jpg",
      date: "15 Jan 2025",
    },
    {
      id: 3,
      type: "event",
      title: {
        en: "Annual Cultural Festival 2024",
        mr: "वार्षिक सांस्कृतिक महोत्सव २०२४",
      },
      description: {
        en: "Traditional performances and art exhibitions",
        mr: "पारंपरिक कला सादरीकरण आणि प्रदर्शन",
      },
      thumbnail: "/images/cultural-fest.jpg",
      date: "20 Dec 2024",
    },
  ];

  const sections: MediaSection[] = [
    {
      id: "photos",
      icon: <FaImage className="text-4xl" />,
      title: {
        en: "Photo Gallery",
        mr: "फोटो गॅलरी",
      },
      description: {
        en: "Explore our village's visual journey through photographs capturing development projects, cultural events, and community life.",
        mr: "विकास प्रकल्प, सांस्कृतिक कार्यक्रम आणि सामुदायिक जीवनाचे क्षण टिपणाऱ्या छायाचित्रांद्वारे आमच्या गावाच्या दृश्य प्रवासाचा अनुभव घ्या.",
      },
      categories: [
        { en: "Development Projects", mr: "विकास प्रकल्प" },
        { en: "Cultural Events", mr: "सांस्कृतिक कार्यक्रम" },
        { en: "Community Gatherings", mr: "सामुदायिक मेळावे" },
      ],
      href: "/media/photos",
      color: "bg-blue-600",
    },
    {
      id: "videos",
      icon: <FaVideo className="text-4xl" />,
      title: {
        en: "Video Gallery",
        mr: "व्हिडिओ गॅलरी",
      },
      description: {
        en: "Watch documentaries and video updates about our village's progress, events, and initiatives.",
        mr: "आमच्या गावाची प्रगती, कार्यक्रम आणि उपक्रमांबद्दल माहितीपट आणि व्हिडिओ अपडेट्स पहा.",
      },
      categories: [
        { en: "Project Documentation", mr: "प्रकल्प दस्तऐवजीकरण" },
        { en: "Event Coverage", mr: "कार्यक्रम कव्हरेज" },
        { en: "Success Stories", mr: "यशोगाथा" },
      ],
      href: "/media/videos",
      color: "bg-red-600",
    },
    {
      id: "events",
      icon: <FaCalendarAlt className="text-4xl" />,
      title: {
        en: "Event Highlights",
        mr: "कार्यक्रम ठळक",
      },
      description: {
        en: "Stay updated with our village's festivals, ceremonies, and special occasions.",
        mr: "आमच्या गावातील उत्सव, समारंभ आणि विशेष प्रसंगांबद्दल अद्ययावत रहा.",
      },
      categories: [
        { en: "Traditional Festivals", mr: "पारंपारिक उत्सव" },
        { en: "Official Ceremonies", mr: "अधिकृत समारंभ" },
        { en: "Community Programs", mr: "सामुदायिक कार्यक्रम" },
      ],
      href: "/media/events",
      color: "bg-green-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("navigation.media", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.media.description", language)}
          </p>
        </div>

        {/* Featured Content */}
        <div className="mb-12">
          <h2 className="text-xl font-bold mb-4">
            {language === "en" ? "Featured Content" : "विशेष माहिती"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden group"
              >
                <div className="relative h-48">
                  <Image
                    src={item.thumbnail}
                    alt={item.title[language]}
                    fill
                    className="object-cover"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <FaPlayCircle className="text-white text-4xl opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-sm text-gray-500 mb-1">{item.date}</div>
                  <h3 className="font-bold mb-1">{item.title[language]}</h3>
                  <p className="text-sm text-gray-600">
                    {item.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className={`${section.color} text-white p-6`}>
                <div className="flex items-center gap-4">
                  {section.icon}
                  <h2 className="text-2xl font-bold">
                    {section.title[language]}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {section.description[language]}
                </p>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">
                    {language === "en" ? "Categories" : "श्रेणी"}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {section.categories.map((category, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                      >
                        {category[language]}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={section.href}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white ${section.color} hover:opacity-90 transition-opacity`}
                >
                  <span>{language === "en" ? "Browse All" : "सर्व पहा"}</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            {language === "en" ? "Quick Links" : "द्रुत दुवे"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/media/photos"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
            >
              <FaImage className="text-blue-600" />
              <span>
                {language === "en" ? "Latest Photos" : "नवीन छायाचित्रे"}
              </span>
            </Link>
            <Link
              href="/media/videos"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
            >
              <FaVideo className="text-red-600" />
              <span>
                {language === "en" ? "Recent Videos" : "अलीकडील व्हिडिओ"}
              </span>
            </Link>
            <Link
              href="/media/events"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50"
            >
              <FaCalendarAlt className="text-green-600" />
              <span>
                {language === "en" ? "Upcoming Events" : "येणारे कार्यक्रम"}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
