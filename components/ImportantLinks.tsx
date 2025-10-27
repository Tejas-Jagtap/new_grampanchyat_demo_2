"use client";

import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getHomeContent, getText } from "@/lib/config";

const ImportantLinks = () => {
  const { language } = useLanguage();
  const homeContent = getHomeContent();
  const links = homeContent?.importantLinks?.links || [];

  // Don't render if no links
  if (!links || links.length === 0) {
    return null;
  }

  const title = homeContent?.importantLinks?.title
    ? getText(homeContent.importantLinks.title, language)
    : "Important Links";

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#0A1931] text-white px-6 py-4">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-2">
          {links.map((link) => {
            const linkName = link?.name ? getText(link.name, language) : "Link";
            const linkUrl = link?.url || "#";

            return (
              <li key={link?.id || Math.random()}>
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded transition-colors duration-200 text-sm text-government-blue hover:text-government-orange"
                >
                  <span>{linkName}</span>
                  <FaExternalLinkAlt className="text-xs" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImportantLinks;
