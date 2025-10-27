"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaUserTie, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  getChiefMinister,
  getDeputyChiefMinister,
  getDeputyChiefMinister1,
  getSarpanch,
  getUpSarpanch,
  getGramSevak,
  // getSecretary,
  getText,
  getLabel,
} from "@/lib/config";

const Officials = () => {
  const { language } = useLanguage();

  // Load officials from config
  const chiefMinister = getChiefMinister();
  const deputyChiefMinister = getDeputyChiefMinister();
  const deputyChiefMinister1 = getDeputyChiefMinister1();
  const sarpanch = getSarpanch();
  const upSarpanch = getUpSarpanch();
  const gramSevak = getGramSevak();
  // const secretary = getSecretary();

  const officials = [
    sarpanch && {
      id: 1,
      name: sarpanch.name ? getText(sarpanch.name, language) : "",
      position: sarpanch.position ? getText(sarpanch.position, language) : "",
      photo: sarpanch.photo || "",
    },
    upSarpanch && {
      id: 2,
      name: upSarpanch.name ? getText(upSarpanch.name, language) : "",
      position: upSarpanch.position
        ? getText(upSarpanch.position, language)
        : "",
      photo: upSarpanch.photo || "",
    },
    gramSevak && {
      id: 3,
      name: gramSevak.name ? getText(gramSevak.name, language) : "",
      position: gramSevak.position ? getText(gramSevak.position, language) : "",
      photo: gramSevak.photo || "",
    },
  ].filter(Boolean); // Remove any null/undefined entries

  // Don't render if no officials
  if (!officials || officials.length === 0) {
    return null;
  }

  return (
    <section className="mb-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-4 py-3">
          <div className="flex items-center gap-2">
            <FaUserTie
              size={22}
              className="shrink-0 inline-block -translate-y-[1px]"
              style={{ verticalAlign: "middle" }}
            />
            <h2 className="text-lg sm:text-xl font-bold leading-none m-0">
              {getLabel("components.officials.title", language)}
            </h2>
          </div>
        </div>
        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4">
            {officials.map((official) => (
              <div
                key={official.id}
                className="text-center group hover:shadow-xl transition-shadow duration-200 p-3 rounded-lg border border-gray-200"
              >
                <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-2 rounded-full bg-gradient-to-br from-government-orange to-government-green p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden relative">
                    {official.photo ? (
                      <Image
                        src={official.photo}
                        alt={official.name || "Official"}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    ) : (
                      <FaUserTie className="text-3xl lg:text-4xl text-gray-400" />
                    )}
                  </div>
                </div>
                {official.name && (
                  <h3 className="font-bold text-sm lg:text-base text-government-blue mb-0.5">
                    {official.name}
                  </h3>
                )}
                {official.position && (
                  <p className="text-government-orange font-semibold text-xs lg:text-sm mb-1.5">
                    {official.position}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 text-center">
            <Link href="/about/administration">
              <button className="bg-[#0A1931] hover:bg-government-orange text-white px-4 sm:px-5 py-2 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center gap-2 text-sm sm:text-base">
                {getLabel("components.officials.viewAll", language)}
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officials;
