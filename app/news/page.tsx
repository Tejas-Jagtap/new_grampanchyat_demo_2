"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaNewspaper, FaCalendarAlt, FaArrowRight } from "react-icons/fa";
import { getNews, getText, formatDate, getLabel } from "@/lib/config";

export default function NewsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Load news from config
  const allNews = getNews();

  // Get unique categories from news items
  const uniqueCategories = Array.from(
    new Set(allNews.map((item) => getText(item.category, "en").toLowerCase()))
  );

  const categories = [
    { id: "all", nameKey: "news.allNews" },
    ...uniqueCategories.map((cat) => ({
      id: cat,
      nameKey: cat,
    })),
  ];

  const filteredNews =
    selectedCategory === "all"
      ? allNews
      : allNews.filter(
          (item) =>
            getText(item.category, "en").toLowerCase() === selectedCategory
        );

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("pages.news.latestNews", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.news.description", language)}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold transition-all duration-200 text-xs sm:text-sm ${
                  selectedCategory === category.id
                    ? "bg-[#0A1931] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {category.id === "all"
                  ? getLabel(
                      category.nameKey === "news.allNews"
                        ? "pages.news.allNews"
                        : category.nameKey,
                      language
                    )
                  : category.nameKey.charAt(0).toUpperCase() +
                    category.nameKey.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* All News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={getText(news.title, language)}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {formatDate(news.date, language)}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2 line-clamp-2">
                  {getText(news.title, language)}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3 text-xs sm:text-sm">
                  {getText(news.description, language)}
                </p>
                <button className="flex items-center gap-2 text-government-orange hover:text-government-blue font-semibold transition-colors text-sm">
                  {getLabel("pages.news.readMore", language)}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-8 bg-[#01A3D6] text-white rounded-lg p-4 sm:p-5">
          <div className="max-w-3xl mx-auto text-center">
            <FaNewspaper className="text-4xl sm:text-5xl mx-auto mb-3" />
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              {getLabel("pages.news.subscribeNewsletter", language)}
            </h2>
            <p className="text-sm sm:text-base mb-4 opacity-90">
              {getLabel("pages.news.newsletterDesc", language)}
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder={getLabel("pages.news.yourEmail", language)}
                className="flex-1 px-3 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white text-sm"
              />
              <button className="bg-white text-government-orange px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                {getLabel("pages.news.subscribe", language)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
