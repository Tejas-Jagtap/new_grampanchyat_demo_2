"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getDepartments,
  getText,
  getLabel,
  getOfficeHours,
} from "@/lib/config";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaHammer,
  FaUsers,
  FaArrowRight,
} from "react-icons/fa";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaHammer,
  FaUsers,
  FaBuilding,
};

export default function DepartmentsPage() {
  const { language } = useLanguage();

  // Load departments from config
  const departments = getDepartments();
  const officeHours = getOfficeHours();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("dept.title", language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getLabel("common.allDepartmentsInfo", language)}
          </p>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getLabel("common.selectDepartment", language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept) => {
              const Icon = iconMap[dept.icon] || FaBuilding;
              return (
                <Link href={`/departments/${dept.slug}`} key={dept.id}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${dept.color} p-4 sm:p-5 text-white`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-3xl shrink-0 -translate-y-[1px]" />
                        <h3 className="text-xl sm:text-2xl font-bold leading-none m-0">
                          {getText(dept.name, language)}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 text-xs sm:text-sm mb-3">
                        {getText(dept.description, language)}
                      </p>
                      <div className="flex items-center text-government-orange font-semibold text-sm">
                        <span className="mr-2">
                          {getLabel("common.viewDepartment", language)}
                        </span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getLabel("common.officeHours", language)}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border-l-4 border-government-orange pl-3">
              <h3 className="font-bold text-base mb-1.5">
                {getText(officeHours.weekdays.label, language)}
              </h3>
              <p className="text-gray-700 text-sm">
                {officeHours.weekdays.hours}
              </p>
            </div>
            <div className="border-l-4 border-government-green pl-3">
              <h3 className="font-bold text-base mb-1.5">
                {getText(officeHours.saturday.label, language)}
              </h3>
              <p className="text-gray-700 text-sm">
                {officeHours.saturday.hours}
                <br />({getText(officeHours.saturday.note, language)})
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-3">
              <h3 className="font-bold text-base mb-1.5">
                {getText(officeHours.sunday.label, language)}
              </h3>
              <p className="text-gray-700 text-sm">
                {getText(officeHours.sunday.hours, language)}
                <br />({getText(officeHours.sunday.note, language)})
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
