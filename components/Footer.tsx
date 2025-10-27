"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getSiteConfig,
  getContactInfo,
  getSocialMedia,
  getHomeContent,
  getText,
  getLabel,
} from "@/lib/config";

const Footer = () => {
  const { language } = useLanguage();
  const [currentDate, setCurrentDate] = useState("");

  // Load config data
  const siteConfig = getSiteConfig();
  const contactInfo = getContactInfo();
  const socialMedia = getSocialMedia();
  const homeContent = getHomeContent();
  const village = siteConfig.village;
  const importantLinks = homeContent.importantLinks.links;

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);
  return (
    <footer className="bg-gradient-to-b from-navy-darkest to-navy-deep text-white mt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {getLabel("footer.about", language)}
            </h3>
            <p className="text-navy-light text-sm leading-relaxed opacity-90">
              {getLabel("footer.aboutText", language)}
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href={socialMedia.facebook || "#"}
                className="text-navy-light hover:text-navy-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={socialMedia.twitter || "#"}
                className="text-navy-light hover:text-navy-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={socialMedia.youtube || "#"}
                className="text-navy-light hover:text-navy-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={20} />
              </a>
              <a
                href={socialMedia.instagram || "#"}
                className="text-navy-light hover:text-navy-medium transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {getLabel("footer.quickLinks", language)}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getLabel("navigation.about", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/project"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getLabel("navigation.project", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getLabel("navigation.schemes", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getLabel("navigation.services", language)}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {getLabel("navigation.contact", language)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links - Dynamic */}
          {importantLinks && importantLinks.length > 0 && (
            <div>
              <h3 className="text-xl font-bold mb-4 text-navy-light">
                {homeContent?.importantLinks?.title
                  ? getText(homeContent.importantLinks.title, language)
                  : getLabel("footer.importantLinks", language)}
              </h3>
              <ul className="space-y-2 text-sm">
                {importantLinks.map((link) => {
                  const linkName = link?.name
                    ? getText(link.name, language)
                    : "Link";
                  const linkUrl = link?.url || "#";

                  return (
                    <li key={link?.id || Math.random()}>
                      <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                      >
                        <span>{linkName}</span>
                        <FaExternalLinkAlt className="text-xs" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {getLabel("footer.contactUs", language)}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-navy-light mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {getLabel("footer.office", language)}
                  <br />
                  {getText(village.name, language)}
                  <br />
                  {getText(village.district, language)}
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-navy-light" />
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-gray-400 hover:text-white"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-navy-light" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white"
                >
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>{getLabel("footer.copyright", language)}</p>
              <p className="mt-1">
                {getLabel("footer.content", language)}{" "}
                <a
                  href="https://ascentaconsulting.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-light hover:text-white"
                >
                  Ascenta Consulting
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.digitalindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs text-gray-400 hover:text-white">
                  Digital India
                </span>
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-xs text-gray-400">
                {getLabel("footer.lastUpdated", language)} {currentDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
