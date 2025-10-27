"use client";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaUsers, FaGraduationCap, FaToilet } from "react-icons/fa";
import { DashboardHeader, CategoryFilter, StatsGrid } from "../components";
import { dashboardSections } from "../types";
import { getLabel } from "@/lib/config";

export default function DemographicsPage() {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const stats = [
    {
      icon: <FaUsers />,
      titleKey: "pages.demographics.population",
      value: "15,234",
      growthKey: "pages.demographics.populationGrowth",
      growth: "+2.5%",
    },
    {
      icon: <FaGraduationCap />,
      titleKey: "pages.demographics.literacy",
      value: "92.3%",
      growthKey: "pages.demographics.literacyGrowth",
      growth: "+1.2%",
    },
    {
      icon: <FaToilet />,
      titleKey: "pages.demographics.sanitation",
      value: "98.7%",
      growthKey: "pages.demographics.sanitationGrowth",
      growth: "+3.1%",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader
          title={{
            en: getLabel("navigation.demographics", "en"),
            mr: getLabel("navigation.demographics", "mr"),
          }}
          description={{
            en: getLabel("pages.demographics.description", "en"),
            mr: getLabel("pages.demographics.description", "mr"),
          }}
          color="bg-blue-600"
          icon={<FaUsers className="text-4xl" />}
        />

        {/* Detailed Category Stats */}
        <StatsGrid
          selectedCategory={selectedCategory}
          categories={dashboardSections.demographics}
        />
      </div>
    </main>
  );
}
