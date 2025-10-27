"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getServices, getText, getLabel } from "@/lib/config";
import {
  FaIdCard,
  FaHome,
  FaUserTie,
  FaBaby,
  FaHeart,
  FaMoneyBill,
  FaLaptop,
  FaBuilding,
} from "react-icons/fa";

// Icon mapping for services
const iconMap: { [key: string]: any } = {
  "birth-certificate": FaBaby,
  "death-certificate": FaUserTie,
  "income-certificate": FaMoneyBill,
  "residence-certificate": FaHome,
  "building-permission": FaBuilding,
  "trade-license": FaIdCard,
  "widow-pension": FaHeart,
  "old-age-pension": FaUserTie,
  "property-tax": FaMoneyBill,
  "water-tax": FaMoneyBill,
};

// Color mapping for services
const colorMap: { [key: string]: string } = {
  "birth-certificate": "bg-blue-500",
  "death-certificate": "bg-gray-500",
  "income-certificate": "bg-green-500",
  "residence-certificate": "bg-orange-500",
  "building-permission": "bg-red-500",
  "trade-license": "bg-purple-500",
  "widow-pension": "bg-pink-500",
  "old-age-pension": "bg-yellow-500",
  "property-tax": "bg-indigo-500",
  "water-tax": "bg-cyan-500",
};

export default function ServicesPage() {
  const { language } = useLanguage();
  const services = getServices();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("pages.services.ourServices", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("pages.services.pageDesc", language)}
          </p>
        </div>

        {/* Online Services Banner */}
        {/* <div className="bg-government-orange text-white rounded-lg p-3 sm:p-4 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <FaLaptop className="text-3xl sm:text-4xl" />
              <div>
                <h3 className="text-base sm:text-lg font-bold mb-0.5">
                  {getLabel("pages.services.applyOnline", language)}
                </h3>
                <p className="text-xs sm:text-sm">
                  {getLabel("pages.services.allServicesOnline", language)}
                </p>
              </div>
            </div>
            <button className="bg-white text-government-orange px-4 sm:px-5 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto text-sm sm:text-base">
              {getLabel("pages.services.goToPortal", language)}
            </button>
          </div>
        </div> */}

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.id] || FaIdCard;
            const color = colorMap[service.id] || "bg-blue-500";
            const serviceName = getText(service.name, language);
            const serviceDesc = getText(service.description, language);
            const processingTime =
              typeof service.processingTime === "string"
                ? service.processingTime
                : getText(service.processingTime, language);
            const serviceFee =
              typeof service.fee === "string"
                ? service.fee
                : getText(service.fee, language);

            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${color} p-3 sm:p-4 text-white`}>
                  <div className="flex items-center gap-2">
                    <Icon
                      size={22}
                      className="shrink-0 inline-block -translate-y-[1px]"
                      style={{ verticalAlign: "middle" }}
                    />
                    <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
                      {serviceName}
                    </h2>
                  </div>
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-gray-700 mb-3 text-xs sm:text-sm">
                    {serviceDesc}
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-gray-50 p-2.5 rounded-lg">
                      <p className="text-xs text-gray-500 mb-0.5">
                        {getLabel("pages.services.processingTime", language)}
                      </p>
                      <p className="font-bold text-government-blue text-xs sm:text-sm">
                        {processingTime}{" "}
                        {getLabel("pages.services.workingDays", language)}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-2.5 rounded-lg">
                      <p className="text-xs text-gray-500 mb-0.5">
                        {getLabel("pages.services.fee", language)}
                      </p>
                      <p className="font-bold text-government-orange text-xs sm:text-sm">
                        {serviceFee}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-bold text-government-blue mb-2 text-sm sm:text-base">
                      {getLabel("pages.services.requiredDocuments", language)}
                    </h3>
                    <ul className="space-y-1">
                      {service.documents.map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-government-orange rounded-full"></span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-[#0A1931] hover:bg-government-orange text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                      {getLabel("pages.services.applyOnlineBtn", language)}
                    </button>
                    <button className="flex-1 border-2 border-government-blue text-government-blue hover:bg-[#0A1931] hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                      {getLabel("pages.services.downloadForm", language)}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-4 sm:p-5">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getLabel("pages.services.applicationProcess", language)}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-14 h-14 bg-[#0A1931] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                1
              </div>
              <h3 className="font-bold mb-1.5 text-xs sm:text-sm">
                {getLabel("pages.services.selectService", language)}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {getLabel("pages.services.selectServiceDesc", language)}
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-government-green text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                2
              </div>
              <h3 className="font-bold mb-1.5 text-xs sm:text-sm">
                {getLabel("pages.services.fillForm", language)}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {getLabel("pages.services.fillFormDesc", language)}
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-government-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                3
              </div>
              <h3 className="font-bold mb-1.5 text-xs sm:text-sm">
                {getLabel("pages.services.submit", language)}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {getLabel("pages.services.submitDesc", language)}
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                4
              </div>
              <h3 className="font-bold mb-1.5 text-xs sm:text-sm">
                {getLabel("pages.services.trackStatus", language)}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {getLabel("pages.services.trackStatusDesc", language)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
