"use client";
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BilingualText, DashboardCategory, DashboardStat } from "./types";
import { FaArrowUp, FaArrowDown, FaMinus } from "react-icons/fa";

interface DashboardHeaderProps {
  title: BilingualText;
  description: BilingualText;
  color: string;
  icon: React.ReactNode;
}

export function DashboardHeader({
  title,
  description,
  color,
  icon,
}: DashboardHeaderProps) {
  const { language } = useLanguage();
  return (
    <div className={`${color} text-white rounded-lg p-6 mb-8`}>
      <div className="flex items-center gap-4 mb-2">
        {icon}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          {title[language]}
        </h1>
      </div>
    </div>
  );
}

interface CategoryFilterProps {
  categories: DashboardCategory[];
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

interface StatCardProps {
  stat: DashboardStat;
}

export function StatCard({ stat }: StatCardProps) {
  const { language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-gray-500">{stat.label[language]}</p>
          <p className="text-2xl font-bold mt-1">{stat.value}</p>
        </div>
        {stat.change && (
          <div
            className={`flex items-center ${
              stat.change.trend === "up"
                ? "text-green-600"
                : stat.change.trend === "down"
                ? "text-red-600"
                : "text-gray-600"
            }`}
          >
            {stat.change.trend === "up" ? (
              <FaArrowUp className="mr-1" />
            ) : stat.change.trend === "down" ? (
              <FaArrowDown className="mr-1" />
            ) : (
              <FaMinus className="mr-1" />
            )}
            <span className="text-sm font-medium">{stat.change.value}</span>
          </div>
        )}
      </div>
    </div>
  );
}

interface StatsGridProps {
  selectedCategory: string;
  categories: DashboardCategory[];
}

export function StatsGrid({ selectedCategory, categories }: StatsGridProps) {
  const { language } = useLanguage();

  const selectedCategories =
    selectedCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === selectedCategory);

  if (selectedCategories.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        {language === "en"
          ? "No data available for this category."
          : "या श्रेणीसाठी कोणताही डेटा उपलब्ध नाही."}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {selectedCategories.map((category) => (
        <div
          key={category.id}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">
              {category.title[language]}
            </h2>
            <p className="text-gray-600 mb-6">
              {category.description[language]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.stats.map((stat, index) => (
                <StatCard key={index} stat={stat} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
