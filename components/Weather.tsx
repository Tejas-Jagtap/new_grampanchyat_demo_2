"use client";

import React, { useEffect, useState } from "react";
import { FaCloud, FaWind, FaTint, FaEye, FaSun, FaMoon } from "react-icons/fa";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiSnow,
  WiThunderstorm,
} from "react-icons/wi";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSiteConfig, getText } from "@/lib/config";

interface WeatherData {
  location: {
    name: string;
    region: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: number;
    humidity: number;
    feelslike_c: number;
    vis_km: number;
    uv: number;
  };
  forecast: {
    forecastday: Array<{
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        condition: {
          text: string;
          icon: string;
          code: number;
        };
      };
    }>;
  };
}

const Weather = () => {
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const villageNameEn = siteConfig.village?.name?.en ?? "";
  const districtEn = siteConfig.village?.district?.en ?? "";
  const villageNameDisplay = getText(siteConfig.village?.name, language) ?? "";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        // WeatherAPI.com free tier API key (get your own from weatherapi.com)
        const API_KEY = "90e71dbda53645eb938101643252110";
        const location = `${villageNameEn}, ${districtEn}, Maharashtra, India`;

        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
            location
          )}&days=3&aqi=no`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const data = await response.json();
        setWeather(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load weather");
      } finally {
        setLoading(false);
      }
    };

    if (villageNameEn) {
      fetchWeather();
      // Refresh every 30 minutes
      const interval = setInterval(fetchWeather, 30 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [villageNameEn, districtEn]);

  const getWeatherIcon = (code: number) => {
    if (code === 1000) return <WiDaySunny className="text-yellow-500" />;
    if (code >= 1003 && code <= 1009)
      return <WiCloudy className="text-gray-500" />;
    if (code >= 1063 && code <= 1201)
      return <WiRain className="text-blue-500" />;
    if (code >= 1204 && code <= 1237)
      return <WiSnow className="text-blue-300" />;
    if (code >= 1273 && code <= 1282)
      return <WiThunderstorm className="text-purple-600" />;
    return <WiDaySunny className="text-yellow-500" />;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const days =
      language === "mr"
        ? ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"]
        : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6 mt-6">
      <div className="bg-[#0A1931] text-white px-4 py-3">
        <div className="flex items-center gap-2">
          <FaCloud
            size={22}
            className="shrink-0 inline-block -translate-y-[1px]"
            style={{ verticalAlign: "middle" }}
          />
          <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
            {language === "mr" ? "हवामान" : "Weather"}
          </h2>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {loading && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A1931] mx-auto"></div>
            <p className="text-sm text-gray-600 mt-2">
              {language === "mr" ? "लोड होत आहे..." : "Loading..."}
            </p>
          </div>
        )}

        {error && (
          <div className="text-center py-4">
            <p className="text-sm text-red-600">
              {language === "mr"
                ? "हवामान लोड करता आले नाही"
                : "Unable to load weather"}
            </p>
          </div>
        )}

        {weather && !loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Current Weather - Takes more space */}
            <div className="md:col-span-1 text-center border-r border-gray-200 pr-4">
              <p className="text-xs text-gray-600 mb-2">{villageNameDisplay}</p>
              <div className="flex items-center justify-center text-6xl mb-2">
                {getWeatherIcon(weather.current.condition.code)}
              </div>
              <div className="text-3xl font-bold text-[#0A1931] mb-1">
                {Math.round(weather.current.temp_c)}°C
              </div>
              <p className="text-xs text-gray-600 mb-1">
                {weather.current.condition.text}
              </p>
              <p className="text-xs text-gray-500">
                {language === "mr" ? "वाटते" : "Feels like"}{" "}
                {Math.round(weather.current.feelslike_c)}°C
              </p>
            </div>

            {/* Weather Details - Horizontal Grid */}
            <div className="md:col-span-1 grid grid-cols-2 gap-3 text-xs content-center border-r border-gray-200 pr-4">
              <div className="flex items-center">
                <FaWind className="text-blue-500 mr-2 text-lg" />
                <div>
                  <p className="text-gray-500">
                    {language === "mr" ? "वारा" : "Wind"}
                  </p>
                  <p className="font-semibold">
                    {weather.current.wind_kph} km/h
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <FaTint className="text-blue-500 mr-2 text-lg" />
                <div>
                  <p className="text-gray-500">
                    {language === "mr" ? "आर्द्रता" : "Humidity"}
                  </p>
                  <p className="font-semibold">{weather.current.humidity}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEye className="text-gray-500 mr-2 text-lg" />
                <div>
                  <p className="text-gray-500">
                    {language === "mr" ? "दृश्यमानता" : "Visibility"}
                  </p>
                  <p className="font-semibold">{weather.current.vis_km} km</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaSun className="text-orange-500 mr-2 text-lg" />
                <div>
                  <p className="text-gray-500">
                    {language === "mr" ? "UV इंडेक्स" : "UV Index"}
                  </p>
                  <p className="font-semibold">{weather.current.uv}</p>
                </div>
              </div>
            </div>

            {/* 3-Day Forecast - Takes remaining space */}
            <div className="md:col-span-2">
              <p className="text-xs font-semibold text-gray-700 mb-3 text-center">
                {language === "mr" ? "3 दिवसांचा अंदाज" : "3-Day Forecast"}
              </p>
              <div className="grid grid-cols-3 gap-3">
                {weather.forecast.forecastday.map((day, index) => (
                  <div
                    key={day.date}
                    className="text-center p-3 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                  >
                    <p className="text-xs font-semibold text-gray-600 mb-2">
                      {index === 0
                        ? language === "mr"
                          ? "आज"
                          : "Today"
                        : formatDate(day.date)}
                    </p>
                    <div className="flex justify-center text-3xl mb-2">
                      {getWeatherIcon(day.day.condition.code)}
                    </div>
                    <p className="text-sm text-orange-600 font-semibold">
                      {Math.round(day.day.maxtemp_c)}°
                    </p>
                    <p className="text-sm text-blue-600">
                      {Math.round(day.day.mintemp_c)}°
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <p className="text-xs text-gray-400 text-center mt-3">
          Powered by WeatherAPI.com
        </p>
      </div>
    </div>
  );
};

export default Weather;
