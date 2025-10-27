"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useLanguage } from "@/contexts/LanguageContext";
import { getLabel, getText } from "@/lib/config";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface MetricData {
  label: { en: string; mr: string };
  data: Record<string, number>;
}

interface SectorMetrics {
  [key: string]: MetricData;
}

interface ImpactData {
  infrastructure: SectorMetrics;
}

// Dummy data - replace with actual config
const impactData: ImpactData = {
  infrastructure: {
    roadCoverage: {
      label: {
        en: "Road Network Coverage (%)",
        mr: "रस्ते नेटवर्क कव्हरेज (%)",
      },
      data: {
        "2020": 60,
        "2021": 65,
        "2022": 75,
        "2023": 85,
        "2024": 90,
      },
    },
    waterAccess: {
      label: {
        en: "24x7 Water Access (%)",
        mr: "२४x७ पाणी उपलब्धता (%)",
      },
      data: {
        "2020": 70,
        "2021": 75,
        "2022": 80,
        "2023": 85,
        "2024": 90,
      },
    },
  },
};

const chartColors = {
  infrastructure: "rgb(59, 130, 246)", // blue-500
  education: "rgb(16, 185, 129)", // green-500
  health: "rgb(236, 72, 153)", // pink-500
  environment: "rgb(139, 92, 246)", // purple-500
};

function LineChart({
  data,
  label,
}: {
  data: Record<string, number>;
  label: string;
}) {
  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label,
        data: Object.values(data),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

function MetricCard({
  title,
  value,
  change,
  icon: Icon,
}: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
}) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-600">{title}</div>
        <Icon className="text-blue-500 text-xl" />
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-2">{value}</div>
      <div className="text-sm text-green-600">{change}</div>
    </div>
  );
}

export default function ImpactDashboardPage() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {getLabel("navigation.impactDashboard", language)}
          </h1>
          <p className="text-gray-600">
            {getLabel("projects.impact.description", language)}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title={getLabel("metrics.overallProgress", language)}
            value="85%"
            change="+15% from last year"
            icon={FaChartLine}
          />
          <MetricCard
            title={getLabel("metrics.projectsCompleted", language)}
            value="24"
            change="+8 this year"
            icon={FaChartBar}
          />
          <MetricCard
            title={getLabel("metrics.beneficiaries", language)}
            value="5,000+"
            change="+1,200 this year"
            icon={FaChartPie}
          />
          <MetricCard
            title={getLabel("metrics.investment", language)}
            value="₹12.5 Cr"
            change="+₹3.2 Cr this year"
            icon={FaChartLine}
          />
        </div>

        {/* Sector-wise Impact */}
        {Object.entries(impactData).map(([sector, metrics]) => (
          <div key={sector} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {getLabel(`metrics.${sector}`, language)}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(metrics).map(([key, metric]) => (
                <div key={key} className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {getText(metric.label, language)}
                  </h3>
                  <div className="h-64">
                    <LineChart
                      data={metric.data}
                      label={getText(metric.label, language)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
