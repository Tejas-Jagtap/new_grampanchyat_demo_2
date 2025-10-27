"use client";
import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { MediaHeader, CategoryFilter, MediaGrid } from "../components";
import { MediaItem, mediaCategories } from "../types";

// Sample event items - replace with actual data from your API or database
const eventItems: MediaItem[] = [
  {
    id: 1,
    type: "event",
    title: {
      en: "Ganesh Festival 2025",
      mr: "गणेश उत्सव २०२५",
    },
    description: {
      en: "10-day celebration of Ganesh Festival",
      mr: "१० दिवसांचा गणेश उत्सव साजरा",
    },
    thumbnail: "/images/events/ganesh.jpg",
    date: "19 Sep 2025",
    category: "festivals",
    url: "/media/events/ganesh-2025",
  },
  {
    id: 2,
    type: "event",
    title: {
      en: "Smart Village Award Ceremony",
      mr: "स्मार्ट गाव पुरस्कार समारंभ",
    },
    description: {
      en: "State-level Smart Village award ceremony",
      mr: "राज्यस्तरीय स्मार्ट गाव पुरस्कार समारंभ",
    },
    thumbnail: "/images/events/award.jpg",
    date: "15 Oct 2025",
    category: "ceremonies",
    url: "/media/events/smart-village-award",
  },
  {
    id: 3,
    type: "event",
    title: {
      en: "Health Camp 2025",
      mr: "आरोग्य शिबिर २०२५",
    },
    description: {
      en: "Free health checkup camp for villagers",
      mr: "ग्रामस्थांसाठी मोफत आरोग्य तपासणी शिबिर",
    },
    thumbnail: "/images/events/health-camp.jpg",
    date: "25 Oct 2025",
    category: "programs",
    url: "/media/events/health-camp-2025",
  },
  // Add more items as needed
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MediaHeader
          title={{
            en: "Event Highlights",
            mr: "कार्यक्रम ठळक",
          }}
          description={{
            en: "Discover and stay updated with various events, festivals, and programs in our village.",
            mr: "आमच्या गावातील विविध कार्यक्रम, उत्सव आणि कार्यक्रमांबद्दल माहिती मिळवा आणि अद्ययावत रहा.",
          }}
          color="bg-green-600"
          icon={<FaCalendarAlt className="text-4xl" />}
        />

        <CategoryFilter
          categories={mediaCategories.events}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <MediaGrid items={eventItems} selectedCategory={selectedCategory} />
      </div>
    </main>
  );
}
