"use client";

import React from "react";
import Link from "next/link";
import { FaImages } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeGallery, getText, getLabel } from "@/lib/config";
import Image from "next/image";

const Gallery = () => {
  const { language } = useLanguage();

  // Load gallery items from config (limit to 4 for homepage)
  const images = getHomeGallery(4);

  // Don't render if no images
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="mt-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-4 py-3">
          <div className="flex items-center gap-2">
            <FaImages
              size={22}
              className="shrink-0 inline-block -translate-y-[1px]"
              style={{ verticalAlign: "middle" }}
            />
            <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
              {getLabel("components.gallery.title", language)}
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image) => {
              const imageTitle = image?.title
                ? getText(image.title, language)
                : "Untitled";
              const imageCategory = image?.category
                ? getText(image.category, language)
                : "";
              const imageSrc = image?.image || "";

              return (
                <div
                  key={image?.id || Math.random()}
                  className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
                >
                  <div className="relative h-36 sm:h-40 md:h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={imageTitle}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <FaImages className="text-5xl text-gray-400" />
                    )}
                    <div className="absolute inset-0 bg-[#0A1931] bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200"></div>
                  </div>
                  <div className="p-3 bg-white">
                    <h3 className="font-semibold text-government-blue mb-0.5 text-sm">
                      {imageTitle}
                    </h3>
                    {imageCategory && (
                      <p className="text-xs text-gray-600">{imageCategory}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <Link href="/gallery">
              <button className="bg-[#0A1931] hover:bg-government-orange text-white px-4 sm:px-5 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                {getLabel("components.gallery.viewFull", language)}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
