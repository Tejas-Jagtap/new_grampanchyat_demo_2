"use client";
import React, { useState } from "react";
import { FaWater } from "react-icons/fa";
import { DashboardHeader, CategoryFilter, StatsGrid } from "../components";
import { dashboardSections } from "../types";

export default function UtilitiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader
          title={{
            en: "Village Utilities",
            mr: "गाव सुविधा",
          }}
          description={{
            en: "Track utilities and essential services coverage across our village.",
            mr: "आमच्या गावातील सार्वजनिक सुविधा आणि आवश्यक सेवांचा आढावा घ्या.",
          }}
          color="bg-cyan-600"
          icon={<FaWater className="text-4xl" />}
        />

        <CategoryFilter
          categories={dashboardSections.utilities}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <StatsGrid
          selectedCategory={selectedCategory}
          categories={dashboardSections.utilities}
        />
      </div>
    </main>
  );
}
