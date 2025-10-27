"use client";

import React from "react";
import Link from "next/link";
import { FaNewspaper, FaCalendar } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeNews, getText, formatDate, getLabel } from "@/lib/config";

const News = () => {
  const { language } = useLanguage();

  // Load news from config (limit to 4 for homepage)
  const newsItems = getHomeNews(4);

  // Don't render if no news
  if (!newsItems || newsItems.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-4 py-3">
          <div className="flex items-center gap-2">
            <FaNewspaper
              size={22}
              className="shrink-0 inline-block -translate-y-[1px]"
              style={{ verticalAlign: "middle" }}
            />
            <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
              {getLabel("components.news.title", language)}
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="space-y-3">
            {newsItems.map((news) => {
              const newsTitle = news?.title
                ? getText(news.title, language)
                : "Untitled";
              const newsDesc = news?.description
                ? getText(news.description, language)
                : "";
              const newsDate = news?.date || "";
              const newsCategory = news?.category
                ? getText(news.category, language)
                : "";

              return (
                <div
                  key={news?.id || Math.random()}
                  className="border-l-4 border-government-orange pl-3 py-2 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm sm:text-base text-government-blue mb-1">
                        {newsTitle}
                      </h3>
                      {newsDesc && (
                        <p className="text-gray-600 text-xs sm:text-sm mb-1.5">
                          {newsDesc}
                        </p>
                      )}
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        {newsDate && (
                          <span className="flex items-center">
                            <FaCalendar className="mr-1" />
                            {formatDate(newsDate, language)}
                          </span>
                        )}
                        {newsCategory && (
                          <span className="bg-government-orange bg-opacity-20 text-government-orange px-2 py-0.5 rounded text-xs">
                            {newsCategory}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <Link href="/news">
              <button className="text-government-blue hover:text-government-orange font-semibold transition-colors duration-200 text-sm">
                {getLabel("components.news.viewAll", language)}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
