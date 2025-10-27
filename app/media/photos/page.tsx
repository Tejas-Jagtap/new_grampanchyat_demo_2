"use client";
import React, { useState } from "react";
import { FaImage } from "react-icons/fa";
import { MediaHeader, CategoryFilter, MediaGrid } from "../components";
import { MediaItem, mediaCategories } from "../types";

// Sample photo items - replace with actual data from your API or database
const photoItems: MediaItem[] = [
  {
    id: 1,
    type: "photo",
    title: {
      en: "New Road Construction",
      mr: "नवीन रस्ता बांधकाम",
    },
    description: {
      en: "Progress of main road construction project",
      mr: "मुख्य रस्ता बांधकाम प्रकल्पाची प्रगती",
    },
    thumbnail: "/images/development/road.jpg",
    date: "15 Oct 2025",
    category: "development",
  },
  {
    id: 2,
    type: "photo",
    title: {
      en: "Diwali Celebrations",
      mr: "दिवाळी साजरी",
    },
    description: {
      en: "Village Diwali festival celebrations",
      mr: "गावातील दिवाळी उत्सव साजरा",
    },
    thumbnail: "/images/cultural/diwali.jpg",
    date: "12 Oct 2025",
    category: "cultural",
  },
  {
    id: 3,
    type: "photo",
    title: {
      en: "Gram Sabha Meeting",
      mr: "ग्रामसभा बैठक",
    },
    description: {
      en: "Monthly Gram Sabha meeting with villagers",
      mr: "ग्रामस्थांसोबत मासिक ग्रामसभा बैठक",
    },
    thumbnail: "/images/community/meeting.jpg",
    date: "5 Oct 2025",
    category: "community",
  },
  // Add more items as needed
];

export default function PhotosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MediaHeader
          title={{
            en: "Photo Gallery",
            mr: "फोटो गॅलरी",
          }}
          description={{
            en: "Browse through our collection of photographs showcasing village life, development, and cultural events.",
            mr: "गावातील जीवन, विकास आणि सांस्कृतिक कार्यक्रमांचे छायाचित्रे पहा.",
          }}
          color="bg-blue-600"
          icon={<FaImage className="text-4xl" />}
        />

        <CategoryFilter
          categories={mediaCategories.photos}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <MediaGrid items={photoItems} selectedCategory={selectedCategory} />
      </div>
    </main>
  );
}
