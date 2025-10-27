"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import { FaArrowLeft, FaArrowRight, FaCalendar } from "react-icons/fa";

interface BeforeAfterProject {
  id: string;
  name: { en: string; mr: string };
  description: { en: string; mr: string };
  before: string;
  after: string;
  completionDate: string;
}

// Dummy data - replace with actual config
const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: "road-transformation",
    name: {
      en: "Main Road Transformation",
      mr: "मुख्य रस्ता कायापालट",
    },
    description: {
      en: "Complete renovation of village main road with proper drainage",
      mr: "योग्य ड्रेनेजसह गावातील मुख्य रस्त्याचे संपूर्ण नूतनीकरण",
    },
    before: "/images/projects/before-after/road-before.jpg",
    after: "/images/projects/before-after/road-after.jpg",
    completionDate: "2024-06",
  },
];

function BeforeAfterSlider({
  beforeImage,
  afterImage,
  label,
}: {
  beforeImage: string;
  afterImage: string;
  label: string;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg">
      {/* Before Image */}
      <div className="absolute inset-0">
        <Image src={beforeImage} alt="Before" layout="fill" objectFit="cover" />
      </div>

      {/* After Image */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image src={afterImage} alt="After" layout="fill" objectFit="cover" />
      </div>

      {/* Slider */}
      <div className="absolute inset-y-0 left-0 w-full">
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={(e) => setSliderPosition(Number(e.target.value))}
          className="w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute inset-y-0 w-1 bg-white"
        style={{ left: `${sliderPosition}%` }}
      />

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
        Before
      </div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded">
        After
      </div>
    </div>
  );
}

export default function BeforeAfterGalleryPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getLabel("navigation.beforeAfter", language)}
          </h1>
          <p className="text-gray-600">
            {getLabel("projects.beforeAfter.description", language)}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {beforeAfterProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {getText(project.name, language)}
                </h2>

                <div className="flex items-center text-gray-600 mb-4">
                  <FaCalendar className="mr-2" />
                  <span>{project.completionDate}</span>
                </div>

                <p className="text-gray-600 mb-6">
                  {getText(project.description, language)}
                </p>

                <BeforeAfterSlider
                  beforeImage={project.before}
                  afterImage={project.after}
                  label={getText(project.name, language)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
