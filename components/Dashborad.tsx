"use client";
import {
  Users,
  BookOpen,
  Droplets,
  Home,
  Zap,
  Leaf,
  BarChart3,
  Award,
  Target,
  Wallet,
  MessageSquare,
  TrendingUp,
} from "lucide-react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { getAboutContent, getDashboardContent, getText } from "@/lib/config";
import { useLanguage } from "@/contexts/LanguageContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const { language } = useLanguage();
  const content = getDashboardContent();

  const yearlyData = {
    labels: ["२०२१", "२०२२", "२०२३", "२०२४", "२०२५"],
    datasets: [
      {
        label: "साक्षरता दर %",
        data: [82, 83, 85, 86, 87],
        backgroundColor: "rgba(34, 197, 94, 0.5)",
      },
      {
        label: "वृक्षारोपण",
        data: [800, 900, 1000, 1100, 1200],
        backgroundColor: "rgba(16, 185, 129, 0.5)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "वार्षिक प्रगती तुलना",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const stats = [
    {
      label: "लोकसंख्या",
      value: "३५००",
      icon: <Users className="text-blue-600 w-6 h-6" />,
      change: "+५०",
    },
    {
      label: "साक्षरता दर",
      value: "८७%",
      icon: <BookOpen className="text-green-600 w-6 h-6" />,
      change: "+२%",
    },
    {
      label: "स्वच्छता कव्हरेज",
      value: "९५%",
      icon: <Droplets className="text-sky-600 w-6 h-6" />,
      change: "+५%",
    },
    {
      label: "नळजोडणी",
      value: "८२०",
      icon: <Home className="text-teal-600 w-6 h-6" />,
      change: "+१५",
    },
    {
      label: "वीजपुरवठा",
      value: "१००%",
      icon: <Zap className="text-yellow-500 w-6 h-6" />,
      change: "०%",
    },
    {
      label: "वृक्षारोपण",
      value: "१२००",
      icon: <Leaf className="text-green-500 w-6 h-6" />,
      change: "+१००",
    },
    {
      label: "योजना लाभार्थी",
      value: "४५०",
      icon: <Target className="text-purple-600 w-6 h-6" />,
      change: "+२५",
    },
    {
      label: "ग्रामनिधी वापर",
      value: "९८%",
      icon: <Wallet className="text-rose-600 w-6 h-6" />,
      change: "+८%",
    },
    {
      label: "तक्रार निराकरण",
      value: "९२%",
      icon: <MessageSquare className="text-cyan-600 w-6 h-6" />,
      change: "+७%",
    },
  ];

  return (
    <section className="w-full mb-6">
      <div className=" w-full max-w-7xl mx-auto px-4">
        {/* Latest Stats Section - Full Width */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
          <h3 className="text-lg sm:text-xl font-semibold flex items-center gap-2 bg-[#0A1931] text-white px-4 py-3">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
            {language === "en"
              ? " My Village, My Progress "
              : " माझे गाव, माझी प्रगती "}
          </h3>
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
              {stats.map((item, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-lg p-3 sm:p-6 border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-0">
                    <div className="mb-1 sm:mb-0">
                      <h4 className="text-base sm:text-lg font-bold text-gray-900">
                        {item.value}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {item.label}
                      </p>
                    </div>
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Charts and Achievements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Yearly Comparison Chart - Takes 2 columns on large screens */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4 sm:mb-6">
                <BarChart3 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                वार्षिक प्रगती तुलना
              </h3>
              <div className="h-[300px] sm:h-[400px] w-full">
                <Bar
                  options={{
                    ...chartOptions,
                    maintainAspectRatio: false,
                    responsive: true,
                    plugins: {
                      ...chartOptions.plugins,
                      legend: {
                        position: "top",
                        labels: {
                          boxWidth: 12,
                          padding: 8,
                          font: {
                            size: 11,
                            family: "system-ui",
                          },
                        },
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          font: {
                            size: 11,
                          },
                        },
                      },
                      x: {
                        ticks: {
                          font: {
                            size: 11,
                          },
                        },
                      },
                    },
                  }}
                  data={yearlyData}
                />
              </div>
            </div>
          </div>

          {/* Top 5 Achievements Section - Takes 1 column on large screens */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h3 className="text-base sm:text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4 sm:mb-6">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                {getText(content.sections.achievements.title, language)}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {[
                  { text: "१००% वीजपुरवठा साध्य", progress: "100%" },
                  { text: "स्वच्छता स्पर्धा प्रथम पुरस्कार", progress: "100%" },
                  { text: "२००० वृक्षारोपण लक्ष्य", progress: "60%" },
                  { text: "ग्रामनिधीचा ९८% वापर", progress: "98%" },
                  { text: "डिजिटल ग्रामपंचायत पोर्टल", progress: "85%" },
                ].map((achievement, i) => (
                  <li key={i} className="flex flex-col gap-1 sm:gap-2">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-gray-700">{achievement.text}</span>
                      <span className="text-gray-500 ml-2">
                        {achievement.progress}
                      </span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-orange-500 rounded-full transition-all duration-500"
                        style={{ width: achievement.progress }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
