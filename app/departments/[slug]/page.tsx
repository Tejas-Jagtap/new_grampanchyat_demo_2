"use client";

import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getDepartmentBySlug,
  getSiteConfig,
  getText,
  getLabel,
} from "@/lib/config";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaBriefcase,
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaUsers,
  FaHammer,
  FaBuilding,
  FaWater,
  FaRecycle,
  FaLightbulb,
} from "react-icons/fa";

// Icon mapping - converts string icon names to actual React Icon components
const iconMap: { [key: string]: React.ElementType } = {
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaUsers,
  FaHammer,
  FaBuilding,
  FaWater,
  FaRecycle,
  FaLightbulb,
};

export default function DepartmentPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { language } = useLanguage();
  const siteConfig = getSiteConfig();

  // Get department from config using slug
  const department = getDepartmentBySlug(slug);

  // Get the icon component from the icon map
  const IconComponent = department ? iconMap[department.icon] : null;

  // Handle 404 - Department not found
  if (!department) {
    return (
      <main className="min-h-screen py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-navy-darkest mb-4">
              {getLabel("common.notFound", language)}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              {getLabel("departments.notFoundMessage", language)}
            </p>
            <Link
              href="/project"
              className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-navy-darkest text-white rounded-lg hover:bg-navy-medium transition-colors"
            >
              {getLabel("common.backToDepartments", language)}
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-8 sm:py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Department Header */}
        <div
          className={`rounded-lg p-4 sm:p-6 md:p-8 mb-6 md:mb-8 text-white bg-gradient-to-br ${
            department.color || "from-gray-600 to-gray-800"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            {IconComponent && (
              <IconComponent className="text-4xl sm:text-5xl" />
            )}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
              {department.name
                ? getText(department.name, language)
                : "Department"}
            </h1>
          </div>
          {department.description && (
            <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
              {getText(department.description, language)}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Department Information */}
          <div className="md:col-span-2 order-2 md:order-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-navy-darkest mb-4 sm:mb-6">
                {getLabel("departments.about", language)}
              </h2>
              {department.description && (
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  {getText(department.description, language)}
                </p>
              )}

              {/* Services/Responsibilities */}
              {department.services && department.services.length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-darkest mb-3 sm:mb-4">
                    {getLabel("departments.services", language)}
                  </h3>
                  <ul className="space-y-2">
                    {department.services.map((service, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-navy-darkest mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-sm sm:text-base text-gray-700">
                          {service ? getText(service, language) : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Schemes */}
              {department.schemes && department.schemes.length > 0 && (
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-darkest mb-3 sm:mb-4">
                    {getLabel("departments.schemes", language)}
                  </h3>
                  <ul className="space-y-2">
                    {department.schemes.map((scheme, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-navy-darkest mt-1 flex-shrink-0">
                          •
                        </span>
                        <span className="text-sm sm:text-base text-gray-700">
                          {scheme ? getText(scheme, language) : ""}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
            {/* Department Head */}
            {department.head &&
              (department.head.name || department.head.designation) && (
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-navy-darkest mb-3 sm:mb-4 flex items-center gap-2">
                    <FaUser className="text-navy-medium flex-shrink-0" />
                    <span>{getLabel("departments.head", language)}</span>
                  </h3>
                  <div className="space-y-2">
                    {department.head.name && (
                      <p className="text-sm sm:text-base font-semibold text-gray-800">
                        {getText(department.head.name, language)}
                      </p>
                    )}
                    {department.head.designation && (
                      <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-2">
                        <FaBriefcase className="text-navy-medium flex-shrink-0" />
                        <span>
                          {getText(department.head.designation, language)}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              )}

            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-navy-darkest mb-3 sm:mb-4">
                {getLabel("contact.title", language)}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {siteConfig.contact.phone && (
                  <div className="flex items-start gap-3">
                    <FaPhoneAlt className="text-navy-medium mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">
                        {getLabel("contact.phone", language)}
                      </p>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-sm sm:text-base text-navy-darkest hover:text-navy-medium transition-colors break-words"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>
                )}
                {siteConfig.contact.email && (
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-navy-medium mt-1 flex-shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1">
                        {getLabel("contact.email", language)}
                      </p>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-sm sm:text-base text-navy-darkest hover:text-navy-medium transition-colors break-all"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
