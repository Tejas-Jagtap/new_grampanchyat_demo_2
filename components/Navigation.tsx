"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getDepartments, getText, getLabel } from "@/lib/config";

// Type for dropdown items - can have either nameKey (translation) or name (direct text)
type DropdownItem =
  | { nameKey: string; href: string }
  | { name: string; href: string };

const Navigation = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Static visitor count data
  const visitorStats = {
    total: "12,547",
    today: "143",
    online: "27",
  };

  // Load departments dynamically from config
  const departments = getDepartments();

  const menuItems: Array<{
    labelPath: string;
    href: string;
    hasDropdown: boolean;
    dropdownItems?: DropdownItem[];
  }> = [
    { labelPath: "navigation.home", href: "/", hasDropdown: false },
    {
      labelPath: "navigation.about",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.introduction", href: "/about/introduction" },
        { nameKey: "navigation.history", href: "/about/history" },
        { nameKey: "navigation.administration", href: "/about/administration" },
        { nameKey: "navigation.contact", href: "/contact" },
      ],
    },

    {
      labelPath: "navigation.projects",
      href: "/projects",
      hasDropdown: true,
      dropdownItems: [
        {
          nameKey: "navigation.completedProjects",
          href: "/projects/completed",
        },
        { nameKey: "navigation.ongoingProjects", href: "/projects/ongoing" },
        { nameKey: "navigation.proposedProjects", href: "/projects/proposed" },
        { nameKey: "navigation.beforeAfter", href: "/projects/before-after" },
        {
          nameKey: "navigation.sankalpTracker",
          href: "/projects/sankalp-tracker",
        },
        { nameKey: "navigation.impactDashboard", href: "/projects/impact" },
      ],
    },
    {
      labelPath: "navigation.culture",
      href: "/culture",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.villageAndCulture", href: "/culture/village" },
        { nameKey: "navigation.youthAndSports", href: "/culture/youth" },
        { nameKey: "navigation.skillDevelopment", href: "/culture/skills" },
        { nameKey: "navigation.ngoPartners", href: "/culture/partners" },
        { nameKey: "navigation.volunteer", href: "/culture/volunteer" },
      ],
    },
    {
      labelPath: "navigation.schemes",
      href: "/schemes",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.centralSchemes", href: "/schemes/central" },
        { nameKey: "navigation.stateSchemes", href: "/schemes/state" },
        { nameKey: "navigation.localSchemes", href: "/schemes/local" },
      ],
    },
    {
      labelPath: "navigation.services",
      href: "/services",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.certificates", href: "/services/certificates" },
        { nameKey: "navigation.grievance", href: "/services/grievance" },
        { nameKey: "navigation.taxPayment", href: "/services/tax-payment" },
        { nameKey: "navigation.feedback", href: "/services/feedback" },
      ],
    },
    {
      labelPath: "navigation.announcements",
      href: "/announcements",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.meetings", href: "/announcements/meetings" },
        { nameKey: "navigation.circulars", href: "/announcements/circulars" },
        { nameKey: "navigation.deadlines", href: "/announcements/deadlines" },
        { nameKey: "navigation.downloads", href: "/announcements/downloads" },
      ],
    },
    { labelPath: "navigation.news", href: "/news", hasDropdown: false },
    {
      labelPath: "navigation.media",
      href: "/media",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.photoGallery", href: "/media/photos" },
        { nameKey: "navigation.videoGallery", href: "/media/videos" },
        { nameKey: "navigation.eventHighlights", href: "/media/events" },
      ],
    },
    {
      labelPath: "navigation.dashboard",
      href: "/dashboard",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "navigation.demographics", href: "/dashboard/demographics" },
        { nameKey: "navigation.utilities", href: "/dashboard/utilities" },
        {
          nameKey: "navigation.beneficiaries",
          href: "/dashboard/beneficiaries",
        },
        {
          nameKey: "navigation.grievanceStatus",
          href: "/dashboard/grievance-status",
        },
        {
          nameKey: "navigation.environmental",
          href: "/dashboard/environmental",
        },
        {
          nameKey: "navigation.wardAnalysis",
          href: "/dashboard/ward-analysis",
        },
        {
          nameKey: "navigation.topAchievements",
          href: "/dashboard/achievements",
        },
      ],
    },
  ];

  return (
    <nav className="bg-[#0A1931] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12">
          {/* Visitor Count Display */}
          <div className="hidden lg:flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">
                {language === "en" ? "Total Visitors:" : "एकूण भेटी:"}
              </span>
              <span className="font-semibold">{visitorStats.total}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">
                {language === "en" ? "Today:" : "आज:"}
              </span>
              <span className="font-semibold">{visitorStats.today}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-400">
                {language === "en" ? "Online:" : "ऑनलाईन:"}
              </span>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                <span className="font-semibold">{visitorStats.online}</span>
              </div>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 w-full justify-center">
            {menuItems.map((item) => (
              <div
                key={item.labelPath}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.labelPath)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-3 py-1.5 hover:bg-navy-medium transition-colors duration-200 flex items-center space-x-1 rounded text-sm"
                >
                  <span>{getLabel(item.labelPath, language)}</span>
                  {item.hasDropdown && <FaChevronDown className="text-xs" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.labelPath && (
                  <div className="absolute left-0 mt-0 w-56 bg-navy-lightest text-navy-darkest rounded-md shadow-lg overflow-hidden">
                    {item.dropdownItems?.map((dropItem) => {
                      const key =
                        "nameKey" in dropItem
                          ? dropItem.nameKey
                          : dropItem.name;
                      const text =
                        "nameKey" in dropItem
                          ? getLabel(dropItem.nameKey, language)
                          : dropItem.name;
                      return (
                        <Link
                          key={key}
                          href={dropItem.href}
                          className="block px-3 py-1.5 text-sm hover:bg-navy-light border-b border-navy-light last:border-0"
                        >
                          {text}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="font-semibold text-base">
              {getLabel("navigation.menu", language)}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1.5"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-3">
            {menuItems.map((item) => (
              <div key={item.labelPath}>
                <Link
                  href={item.href}
                  className="block px-3 py-1.5 hover:bg-navy-medium transition-colors duration-200 text-sm"
                  onClick={() => !item.hasDropdown && setIsOpen(false)}
                >
                  {getLabel(item.labelPath, language)}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-3 bg-navy-darkest bg-opacity-50">
                    {item.dropdownItems?.map((dropItem) => {
                      const key =
                        "nameKey" in dropItem
                          ? dropItem.nameKey
                          : dropItem.name;
                      const text =
                        "nameKey" in dropItem
                          ? getLabel(dropItem.nameKey, language)
                          : dropItem.name;
                      return (
                        <Link
                          key={key}
                          href={dropItem.href}
                          className="block px-3 py-1.5 text-xs hover:bg-navy-medium"
                          onClick={() => setIsOpen(false)}
                        >
                          {text}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
