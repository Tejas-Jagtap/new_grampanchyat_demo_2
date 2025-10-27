"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText, MediaCategory, MediaItem } from "./types";
import Link from "next/link";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

interface MediaHeaderProps {
  title: BilingualText;
  description: BilingualText;
  color: string;
  icon: React.ReactNode;
}

export function MediaHeader({
  title,
  description,
  color,
  icon,
}: MediaHeaderProps) {
  const { language } = useLanguage();
  return (
    <div className={`${color} text-white rounded-lg p-6 mb-8`}>
      <div className="flex items-center gap-4 mb-2">
        {icon}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {title[language]}
        </h1>
      </div>
      <p className="text-sm sm:text-base opacity-90">{description[language]}</p>
    </div>
  );
}

interface CategoryFilterProps {
  categories: MediaCategory[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  const { language } = useLanguage();

  return (
    <div className="mb-8">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full md:w-64 p-2 border border-gray-300 rounded-lg bg-white"
      >
        <option value="all">
          {language === "en" ? "All Categories" : "सर्व श्रेणी"}
        </option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.title[language]}
          </option>
        ))}
      </select>
    </div>
  );
}

interface MediaGridProps {
  items: MediaItem[];
  selectedCategory: string;
}

export function MediaGrid({ items, selectedCategory }: MediaGridProps) {
  const { language } = useLanguage();
  const filteredItems =
    selectedCategory === "all"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        {language === "en"
          ? "No items found in this category."
          : "या श्रेणीमध्ये कोणतीही माहिती आढळली नाही."}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredItems.map((item) => (
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
            <p className="text-sm text-gray-600 mb-4">
              {item.description[language]}
            </p>
            {item.url && (
              <Link
                href={item.url}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {language === "en" ? "View Details" : "अधिक माहिती"}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
