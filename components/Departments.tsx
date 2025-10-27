"use client";

import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaHammer,
  FaUsers,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeDepartments, getText, getLabel } from "@/lib/config";

// Icon mapping
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaHammer,
  FaUsers,
  FaBuilding,
};

const Departments = () => {
  const { language } = useLanguage();

  // Load departments from config (limit to 4 for homepage)
  const departments = getHomeDepartments(4);

  // Don't render if no departments
  if (!departments || departments.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-4 py-3">
          <div className="flex items-center gap-2">
            <FaBuilding
              size={22}
              className="shrink-0 inline-block -translate-y-[1px]"
              style={{ verticalAlign: "middle" }}
            />
            <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
              {getLabel("components.departments.title", language)}
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {departments.map((dept) => {
              const Icon = iconMap[dept?.icon] || FaBuilding;
              const deptName = dept?.name
                ? getText(dept.name, language)
                : "Department";
              const deptDesc = dept?.description
                ? getText(dept.description, language)
                : "";
              const deptColor = dept?.color || "from-gray-600 to-gray-800";
              const deptSlug = dept?.slug || "#";

              return (
                <Link
                  href={`/departments/${deptSlug}`}
                  key={dept?.id || Math.random()}
                >
                  <div
                    className={`bg-gradient-to-br ${deptColor} text-white p-4 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 cursor-pointer`}
                  >
                    <Icon className="text-3xl mb-2" />
                    <h3 className="font-bold text-base mb-1">{deptName}</h3>
                    {deptDesc && (
                      <p className="text-xs opacity-90">{deptDesc}</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-4 text-center">
            <Link href="/project">
              <button className="bg-[#0A1931] hover:bg-government-orange text-white px-4 sm:px-5 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                {getLabel("components.departments.viewAll", language)}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
