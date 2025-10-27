"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel } from "@/lib/config";

const Helpline = () => {
  const { language } = useLanguage();
  const [showNumbers, setShowNumbers] = React.useState(true);

  const helplines = [
    // 🏥 Existing helplines
    { labelPath: "components.helpline.emergency", number: "112" },
    { labelPath: "components.helpline.ambulance", number: "102" },
    { labelPath: "components.helpline.police", number: "100" },
    { labelPath: "components.helpline.fire", number: "101" },

    // 🌿 New Marathi-specific helplines
    { labelPath: "components.helpline.healthCenter", number: "---" },
    { labelPath: "components.helpline.bloodBank", number: "---" },
    { labelPath: "components.helpline.disasterManagement", number: "1077" },
    { labelPath: "components.helpline.fpoGroup", number: "---" },
    { labelPath: "components.helpline.msebDepartment", number: "1912" },
    { labelPath: "components.helpline.forestDepartment", number: "1926" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-red-600 text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <FaPhoneAlt className="text-xl mr-3" />
          <h2 className="text-xl font-bold">
            {getLabel("components.helpline.title", language)}
          </h2>
        </div>
        <button
          onClick={() => setShowNumbers(!showNumbers)}
          className="px-3 py-1 bg-white text-red-600 rounded text-sm hover:bg-gray-100 transition-colors duration-200"
        >
          {showNumbers ? "Hide Numbers" : "Show Numbers"}
        </button>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          {helplines.map((helpline, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded transition-colors duration-200"
            >
              <span className="text-sm text-gray-700">
                {getLabel(helpline.labelPath, language)}
              </span>
              <span
                className={`font-bold text-government-blue transition-opacity duration-200 ${
                  showNumbers ? "opacity-100" : "opacity-0"
                }`}
              >
                {helpline.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpline;
