"use client";
import React, { useState } from "react";
import { FaTree } from "react-icons/fa";
import { DashboardHeader, CategoryFilter, StatsGrid } from "../components";
import { dashboardSections } from "../types";

export default function EnvironmentalPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader
          title={{
            en: "Environmental Metrics",
            mr: "पर्यावरण मेट्रिक्स",
          }}
          description={{
            en: "Monitor our village's environmental health and sustainability initiatives.",
            mr: "आमच्या गावाचे पर्यावरण आरोग्य आणि शाश्वतता उपक्रमांचे निरीक्षण करा.",
          }}
          color="bg-green-600"
          icon={<FaTree className="text-4xl" />}
        />

        <CategoryFilter
          categories={dashboardSections.environmental}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <StatsGrid
          selectedCategory={selectedCategory}
          categories={dashboardSections.environmental}
        />
      </div>
    </main>
  );
}
