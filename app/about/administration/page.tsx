"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  getSarpanch,
  getUpSarpanch,
  // getSecretary,
  getGramSevak,
  getMembers,
  getText,
  getAboutContent,
} from "@/lib/config";

export default function AdministrationPage() {
  const { language } = useLanguage();
  const aboutContent = getAboutContent();
  const admin = aboutContent.administration;

  // Load officials from config
  const sarpanch = getSarpanch();
  const upSarpanch = getUpSarpanch();
  // const secretary = getSecretary();
  const gramSevak = getGramSevak();
  const wardMembers = getMembers();

  // Combine elected members
  const electedMembers = [
    {
      ...sarpanch,
      ward: language === "mr" ? "सर्व वार्ड" : "All Wards",
    },
    {
      ...upSarpanch,
      ward: language === "mr" ? "सर्व वार्ड" : "All Wards",
    },
    ...wardMembers.map((member) => ({
      ...member,
      ward: `${language === "mr" ? "वार्ड" : "Ward"} ${member.wardNumber}`,
    })),
  ];

  const administrativeStaff = [
    {
      ...gramSevak,
      department: language === "mr" ? "प्रशासन" : "Administration",
    },
  ];

  const committeeIcons = [FaClipboardList, FaBalanceScale, FaUsers];

  const committees = admin.committees.items.map((committee, index) => ({
    ...committee,
    icon: committeeIcons[index % committeeIcons.length],
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getText(admin.title, language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getText(admin.subtitle, language)}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <div className="flex items-center mb-4">
            <FaUserTie className="text-3xl sm:text-4xl text-government-orange mr-3" />
            <h2 className="text-xl sm:text-2xl font-bold text-government-blue">
              {getText(admin.about.title, language)}
            </h2>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-3">
            {getText(admin.about.text, language)}
          </p>
        </section>

        {/* Elected Members */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getText(admin.electedReps, language)}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {electedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-government-blue to-government-green p-3 text-white text-center">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-full overflow-hidden border-4 border-white bg-gray-200 flex items-center justify-center">
                    <FaUserTie className="text-4xl text-gray-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold">
                    {getText(member.position, language)}
                  </h3>
                </div>
                <div className="p-4">
                  <h4 className="text-base font-bold text-government-blue mb-1.5">
                    {getText(member.name, language)}
                  </h4>
                  <p className="text-gray-600 text-xs mb-3">{member.ward}</p>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <FaPhoneAlt className="text-government-orange" />
                      <span>{member.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        <section className="bg-white rounded-lg shadow-lg p-4 sm:p-5 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getText(admin.adminStaff, language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {administrativeStaff.map((staff, index) => (
              <div
                key={index}
                className="border-l-4 border-government-orange pl-3 py-3 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-bold text-government-blue mb-1.5">
                  {getText(staff.name, language)}
                </h3>
                <p className="text-government-orange font-semibold mb-1 text-xs sm:text-sm">
                  {getText(staff.position, language)}
                </p>
                <p className="text-gray-600 text-xs mb-2">{staff.department}</p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <FaPhoneAlt className="text-government-orange text-xs" />
                    <span>{staff.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-700">
                    <FaEnvelope className="text-government-orange text-xs" />
                    <span className="break-all">{staff.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Committees */}
        <section className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
            {getText(admin.committees.title, language)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-3xl text-government-orange mb-3" />
                  <h3 className="text-base sm:text-lg font-bold text-government-blue mb-2">
                    {getText(committee.name, language)}
                  </h3>
                  <div className="space-y-1.5 text-gray-700">
                    <p className="text-xs sm:text-sm">
                      <span className="font-semibold">
                        {getText(admin.committees.members, language)}:
                      </span>{" "}
                      {committee.members}
                    </p>
                    <p className="text-xs sm:text-sm">
                      <span className="font-semibold">
                        {getText(admin.committees.responsibility, language)}:
                      </span>
                      <br />
                      {getText(committee.responsibility, language)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
