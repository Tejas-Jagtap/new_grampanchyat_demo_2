"use client";
import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";
import { MediaHeader, CategoryFilter, MediaGrid } from "../components";
import { MediaItem, mediaCategories } from "../types";

// Sample video items - replace with actual data from your API or database
const videoItems: MediaItem[] = [
  {
    id: 1,
    type: "video",
    title: {
      en: "Water Project Documentary",
      mr: "पाणी प्रकल्प माहितीपट",
    },
    description: {
      en: "Documentary on the implementation of water conservation project",
      mr: "पाणी संवर्धन प्रकल्पाच्या अंमलबजावणीवरील माहितीपट",
    },
    thumbnail: "/images/videos/water-project.jpg",
    date: "20 Oct 2025",
    category: "documentation",
    url: "https://youtube.com/watch?v=example1",
  },
  {
    id: 2,
    type: "video",
    title: {
      en: "Independence Day Celebration",
      mr: "स्वातंत्र्य दिन समारंभ",
    },
    description: {
      en: "Coverage of village Independence Day celebrations",
      mr: "गावातील स्वातंत्र्य दिन समारंभाचे कव्हरेज",
    },
    thumbnail: "/images/videos/independence-day.jpg",
    date: "15 Aug 2025",
    category: "coverage",
    url: "https://youtube.com/watch?v=example2",
  },
  {
    id: 3,
    type: "video",
    title: {
      en: "Digital Village Initiative",
      mr: "डिजिटल गाव उपक्रम",
    },
    description: {
      en: "Success story of digital transformation in our village",
      mr: "आमच्या गावातील डिजिटल परिवर्तनाची यशोगाथा",
    },
    thumbnail: "/images/videos/digital.jpg",
    date: "10 Oct 2025",
    category: "success",
    url: "https://youtube.com/watch?v=example3",
  },
  // Add more items as needed
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MediaHeader
          title={{
            en: "Video Gallery",
            mr: "व्हिडिओ गॅलरी",
          }}
          description={{
            en: "Watch documentaries and videos about our village's development journey and cultural events.",
            mr: "आमच्या गावाच्या विकास प्रवासाबद्दल आणि सांस्कृतिक कार्यक्रमांबद्दल माहितीपट आणि व्हिडिओ पहा.",
          }}
          color="bg-red-600"
          icon={<FaVideo className="text-4xl" />}
        />

        <CategoryFilter
          categories={mediaCategories.videos}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <MediaGrid items={videoItems} selectedCategory={selectedCategory} />
      </div>
    </main>
  );
}
