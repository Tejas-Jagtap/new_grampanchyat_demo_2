"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeContent, getText } from "@/lib/config";

const Hero = () => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const homeContent = getHomeContent();
  const slides = homeContent.hero.slides;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[400px] md:h-[500px]  overflow-hidden">
      {/* Background Images Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={getText(slide.title, language)}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 animate-fade-in">
            {getText(slides[currentSlide].title, language)}
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 md:mb-6 px-4">
            {getText(slides[currentSlide].subtitle, language)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 px-4">
            <button className="bg-[#0A1931] hover:bg-[#142b4a] text-white px-4 sm:px-5 py-2 rounded-lg font-semibold transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
              {getText(homeContent.hero.buttons.viewServices, language)}
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#0A1931] px-4 sm:px-5 py-2 rounded-lg font-semibold transition-colors duration-200 w-full sm:w-auto text-sm sm:text-base">
              {getText(homeContent.hero.buttons.contactUs, language)}
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-government-orange w-8"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
