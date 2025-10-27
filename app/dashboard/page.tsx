"use client";
import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { DashboardSection } from "./types";
import {
  FaUsers,
  FaWater,
  FaHandHoldingHeart,
  FaExclamationTriangle,
  FaTree,
  FaChartBar,
  FaTrophy,
  FaArrowRight,
} from "react-icons/fa";
import { getLabel } from "@/lib/config";

export default function DashboardPage() {
  const { language } = useLanguage();

  const sections: DashboardSection[] = [
    {
      icon: <FaUsers className="text-3xl" />,
      titleKey: "navigation.demographics",
      content: {
        en: "Track population demographics, literacy rates, and sanitation coverage across our village.",
        mr: "आमच्या गावातील लोकसंख्या, साक्षरता दर आणि स्वच्छता व्याप्ती जाणून घ्या.",
      },
      stats: {
        main: {
          value: "15,234",
          label: { en: "Total Population", mr: "एकूण लोकसंख्या" },
        },
        sub: {
          value: "92.3%",
          label: { en: "Literacy Rate", mr: "साक्षरता दर" },
        },
      },
      href: "/dashboard/demographics",
      color: "bg-blue-600",
    },
    {
      icon: <FaWater className="text-4xl" />,
      titleKey: "navigation.utilities",
      descriptionKey: "pages.dashboard.utilitiesDescription",
      content: {
        en: "Monitor and analyze utilities coverage including water supply and electricity across wards.",
        mr: "वॉर्ड्समध्ये पाणी पुरवठा आणि वीज यांसारख्या सुविधांचे व्याप्ती निरीक्षण आणि विश्लेषण करा.",
      },
      stats: {
        main: {
          value: "95%",
          label: { en: "Water Coverage", mr: "पाणी पुरवठा व्याप्ती" },
        },
        sub: {
          value: "100%",
          label: { en: "Electrification", mr: "विद्युतीकरण" },
        },
      },
      href: "/dashboard/utilities",
      color: "bg-cyan-600",
    },
    {
      icon: <FaHandHoldingHeart className="text-4xl" />,
      titleKey: "navigation.beneficiaries",
      descriptionKey: "pages.dashboard.beneficiariesDescription",
      content: {
        en: "Track beneficiaries of various government schemes and their implementation status.",
        mr: "विविध सरकारी योजनांचे लाभार्थी आणि त्यांची अंमलबजावणी स्थिती ट्रॅक करा.",
      },
      stats: {
        main: {
          value: "1,234",
          label: { en: "Total Beneficiaries", mr: "एकूण लाभार्थी" },
        },
        sub: { value: "85%", label: { en: "Coverage", mr: "व्याप्ती" } },
      },
      href: "/dashboard/beneficiaries",
      color: "bg-purple-600",
    },
    {
      icon: <FaExclamationTriangle className="text-4xl" />,
      titleKey: "navigation.grievanceStatus",
      descriptionKey: "pages.dashboard.grievanceDescription",
      content: {
        en: "Monitor and track resolution status of registered grievances and complaints.",
        mr: "नोंदणीकृत तक्रारी आणि गाऱ्हाणी यांचे निराकरण स्थिती निरीक्षण आणि ट्रॅक करा.",
      },
      stats: {
        main: {
          value: "25",
          label: { en: "Active Cases", mr: "सक्रिय प्रकरणे" },
        },
        sub: {
          value: "92%",
          label: { en: "Resolution Rate", mr: "निराकरण दर" },
        },
      },
      href: "/dashboard/grievance-status",
      color: "bg-yellow-600",
    },
    {
      icon: <FaTree className="text-4xl" />,
      titleKey: "navigation.environmental",
      descriptionKey: "pages.dashboard.environmentalDescription",
      content: {
        en: "Track environmental initiatives, green coverage, and waste management metrics.",
        mr: "पर्यावरण उपक्रम, हरित व्याप्ती आणि कचरा व्यवस्थापन मेट्रिक्स ट्रॅक करा.",
      },
      stats: {
        main: {
          value: "35%",
          label: { en: "Green Coverage", mr: "हरित व्याप्ती" },
        },
        sub: {
          value: "85%",
          label: { en: "Waste Processing", mr: "कचरा प्रक्रिया" },
        },
      },
      href: "/dashboard/environmental",
      color: "bg-green-600",
    },
    {
      icon: <FaChartBar className="text-4xl" />,
      titleKey: "navigation.wardAnalysis",
      descriptionKey: "pages.dashboard.wardAnalysisDescription",
      content: {
        en: "View ward-wise development metrics and compare progress across different areas.",
        mr: "वॉर्ड-निहाय विकास मेट्रिक्स पहा आणि विविध क्षेत्रांमधील प्रगतीची तुलना करा.",
      },
      stats: {
        main: { value: "8", label: { en: "Total Wards", mr: "एकूण वॉर्ड" } },
        sub: {
          value: "100%",
          label: { en: "Development Coverage", mr: "विकास व्याप्ती" },
        },
      },
      href: "/dashboard/ward-analysis",
      color: "bg-indigo-600",
    },
    {
      icon: <FaTrophy className="text-4xl" />,
      titleKey: "navigation.topAchievements",
      descriptionKey: "pages.dashboard.achievementsDescription",
      content: {
        en: "Explore our village's key achievements, awards, and important development milestones.",
        mr: "आमच्या गावाची प्रमुख यश, पुरस्कार आणि महत्त्वाची विकास टप्पे जाणून घ्या.",
      },
      stats: {
        main: {
          value: "12",
          label: { en: "Major Awards", mr: "प्रमुख पुरस्कार" },
        },
        sub: {
          value: "25",
          label: { en: "Milestones", mr: "महत्त्वाचे टप्पे" },
        },
      },
      href: "/dashboard/achievements",
      color: "bg-red-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getLabel("navigation.dashboard", language)}
            {language === "en"
              ? " (My Village, My Progress) "
              : " (माझे गाव, माझी प्रगती) "}
          </h1>
        </div>

        {/* Recent Updates */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">
            {getLabel("pages.dashboard.recentUpdates", language)}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {sections.map((section) => (
              <div
                key={section.titleKey}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className={`${section.color} text-white p-4`}>
                  <div className="flex items-center gap-3">
                    {section.icon}
                    <h2 className="text-xl font-bold">
                      {getLabel(section.titleKey, language)}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  {section.content && (
                    <p className="text-gray-600 mb-6">
                      {section.content[language]}
                    </p>
                  )}

                  {/* Stats */}
                  {section.stats && (
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-2xl font-bold">
                          {section.stats.main.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {section.stats.main.label[language]}
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">
                          {section.stats.sub.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {section.stats.sub.label[language]}
                        </div>
                      </div>
                    </div>
                  )}

                  <Link
                    href={section.href}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white ${section.color} hover:opacity-90 transition-opacity`}
                  >
                    <span>
                      {language === "en" ? "View Details" : "अधिक माहिती"}
                    </span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
