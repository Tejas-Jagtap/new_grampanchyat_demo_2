"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaImage, FaTimes } from "react-icons/fa";
import { getGallery, getText, formatDate, getLabel } from "@/lib/config";
import ImageUpload from "@/components/ImageUpload";

export default function GalleryPage() {
  const { language } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [images, setImages] = useState(() => getGallery());

  const handleUploadComplete = (imageUrl: string) => {
    // Add new image to the list
    const newImage = {
      id: images.length + 1,
      image: imageUrl,
      title: {
        en: "New Upload",
        mr: "नवीन अपलोड"
      },
      description: {
        en: "",
        mr: ""
      },
      category: {
        en: "General",
        mr: "सामान्य"
      },
      date: new Date().toISOString()
    };
    
    setImages([newImage, ...images]);
    setShowUploadModal(false);
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("pages.gallery.photoGallery", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.gallery.description", language)}
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={image.image}
                  alt={getText(image.title, language)}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <FaImage className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-government-blue mb-1 line-clamp-2 text-sm sm:text-base">
                  {getText(image.title, language)}
                </h3>
                {image.description && (
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 line-clamp-2">
                    {getText(image.description, language)}
                  </p>
                )}
                <p className="text-xs text-gray-500">
                  {formatDate(image.date, language)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl hover:text-government-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            {images
              .filter((img) => img.id === selectedImage)
              .map((image) => (
                <div
                  key={image.id}
                  className="max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={image.image}
                    alt={getText(image.title, language)}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="bg-white p-4 sm:p-6 rounded-b-lg">
                    <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-2">
                      {getText(image.title, language)}
                    </h2>
                    {image.description && (
                      <p className="text-sm sm:text-base text-gray-700 mb-3">
                        {getText(image.description, language)}
                      </p>
                    )}
                    <p className="text-sm text-gray-500">
                      {formatDate(image.date, language)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Upload Section */}
        <div className="mt-8 bg-[#01A3D6] text-white rounded-lg p-4 sm:p-5">
          <div className="max-w-3xl mx-auto text-center">
            <FaImage className="text-4xl sm:text-5xl mx-auto mb-3" />
            <h2 className="text-xl sm:text-2xl font-bold mb-3">
              {getLabel("pages.gallery.sharePhotos", language)}
            </h2>
            <p className="text-sm sm:text-base mb-4 opacity-90">
              {getLabel("pages.gallery.shareDescription", language)}
            </p>
            <button 
              onClick={() => setShowUploadModal(true)}
              className="bg-white text-government-orange px-5 sm:px-6 py-2.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
              {getLabel("pages.gallery.uploadPhotos", language)}
            </button>
          </div>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold text-gray-900">
                    {language === "en" ? "Upload New Image" : "नवीन प्रतिमा अपलोड करा"}
                  </h2>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>
                <ImageUpload
                  onUploadComplete={handleUploadComplete}
                  language={language}
                  labels={{
                    title: getLabel("pages.gallery.uploadTitle", language),
                    description: getLabel("pages.gallery.uploadDescription", language)
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
