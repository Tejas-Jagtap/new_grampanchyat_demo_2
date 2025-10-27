"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import {
  FaFileAlt,
  FaCalendar,
  FaRupeeSign,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

interface ProposedProject {
  id: string;
  name: { en: string; mr: string };
  estimatedBudget: { en: string; mr: string };
  timeline: { en: string; mr: string };
  benefits: { en: string; mr: string };
  description: { en: string; mr: string };
  proposal: string;
}

// Dummy data - replace with actual config
const proposedProjects: ProposedProject[] = [
  {
    id: "skill-center",
    name: {
      en: "Skill Development Center",
      mr: "कौशल्य विकास केंद्र",
    },
    estimatedBudget: {
      en: "₹ 1.5 Crore",
      mr: "₹ १.५ कोटी",
    },
    timeline: {
      en: "12 months",
      mr: "१२ महिने",
    },
    benefits: {
      en: "Employment opportunities for 500+ youth annually",
      mr: "वार्षिक ५००+ युवकांसाठी रोजगाराच्या संधी",
    },
    description: {
      en: "State-of-the-art skill development center with modern training facilities",
      mr: "आधुनिक प्रशिक्षण सुविधांसह अत्याधुनिक कौशल्य विकास केंद्र",
    },
    proposal: "/documents/skill-center-proposal.pdf",
  },
];

export default function ProposedProjectsPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getLabel("navigation.proposedProjects", language)}
          </h1>
          <p className="text-gray-600">
            {getLabel("projects.proposed.description", language)}
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {proposedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {getText(project.name, language)}
                    </h2>
                    <p className="text-gray-600 mb-4">
                      {getText(project.description, language)}
                    </p>
                  </div>
                  <a
                    href={project.proposal}
                    className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaDownload className="mr-2" />
                    {getLabel("projects.downloadProposal", language)}
                  </a>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaRupeeSign className="text-green-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">
                        {getLabel("projects.estimatedBudget", language)}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {getText(project.estimatedBudget, language)}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaCalendar className="text-blue-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">
                        {getLabel("projects.timeline", language)}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {getText(project.timeline, language)}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FaCheckCircle className="text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">
                        {getLabel("projects.benefits", language)}
                      </h3>
                    </div>
                    <p className="text-gray-700">
                      {getText(project.benefits, language)}
                    </p>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="mt-6 border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    {getLabel("projects.keyDocuments", language)}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <a
                      href="#"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaFileAlt className="text-blue-600 mr-3" />
                      <span className="text-gray-700">
                        {getLabel("projects.detailedProposal", language)}
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaFileAlt className="text-green-600 mr-3" />
                      <span className="text-gray-700">
                        {getLabel("projects.budgetBreakdown", language)}
                      </span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <FaFileAlt className="text-purple-600 mr-3" />
                      <span className="text-gray-700">
                        {getLabel("projects.timeline", language)}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
