import { ReactNode } from "react";

// Base interfaces
export interface BilingualText {
  en: string;
  mr: string;
}

export interface DashboardStat {
  value: string;
  label: BilingualText;
  change?: {
    value: string;
    trend: "up" | "down" | "neutral";
  };
}

export interface DashboardQuickStat {
  value: string;
  label: BilingualText;
}

export interface DashboardCategory {
  id: string;
  title: BilingualText;
  description: BilingualText;
  stats: DashboardStat[];
}

export interface DashboardSection {
  icon: ReactNode;
  titleKey: string;
  descriptionKey?: string;
  content?: BilingualText;
  stats?: {
    main: DashboardQuickStat;
    sub: DashboardQuickStat;
  };
  href: string;
  color: string;
}

// Dashboard sections data
// Demographics data
const demographicsData: DashboardCategory[] = [
  {
    id: "population",
    title: {
      en: "Population Statistics",
      mr: "लोकसंख्या आकडेवारी",
    },
    description: {
      en: "Detailed breakdown of village population demographics",
      mr: "गावाच्या लोकसंख्येची सविस्तर माहिती",
    },
    stats: [
      {
        value: "15,234",
        label: { en: "Total Population", mr: "एकूण लोकसंख्या" },
        change: { value: "+1.2%", trend: "up" },
      },
      {
        value: "51.2%",
        label: { en: "Female Population", mr: "महिला लोकसंख्या" },
      },
      {
        value: "48.8%",
        label: { en: "Male Population", mr: "पुरुष लोकसंख्या" },
      },
    ],
  },
  {
    id: "education",
    title: {
      en: "Education Metrics",
      mr: "शैक्षणिक मेट्रिक्स",
    },
    description: {
      en: "Education and literacy statistics",
      mr: "शिक्षण आणि साक्षरता आकडेवारी",
    },
    stats: [
      {
        value: "92.3%",
        label: { en: "Literacy Rate", mr: "साक्षरता दर" },
        change: { value: "+2.1%", trend: "up" },
      },
      {
        value: "98.5%",
        label: { en: "School Enrollment", mr: "शाळा नोंदणी" },
        change: { value: "+0.5%", trend: "up" },
      },
      {
        value: "85%",
        label: { en: "Higher Education", mr: "उच्च शिक्षण" },
      },
    ],
  },
  {
    id: "health",
    title: {
      en: "Health Indicators",
      mr: "आरोग्य निर्देशांक",
    },
    description: {
      en: "Key health and medical infrastructure statistics",
      mr: "प्रमुख आरोग्य आणि वैद्यकीय पायाभूत सुविधांची आकडेवारी",
    },
    stats: [
      {
        value: "98.5%",
        label: { en: "Immunization Coverage", mr: "लसीकरण व्याप्ती" },
        change: { value: "+1.5%", trend: "up" },
      },
      {
        value: "100%",
        label: { en: "Healthcare Access", mr: "आरोग्यसेवा प्रवेश" },
      },
      {
        value: "2",
        label: { en: "Primary Health Centers", mr: "प्राथमिक आरोग्य केंद्रे" },
      },
    ],
  },
];

// Utilities data
const utilitiesData: DashboardCategory[] = [
  {
    id: "water",
    title: {
      en: "Water Supply",
      mr: "पाणी पुरवठा",
    },
    description: {
      en: "Water supply coverage and infrastructure",
      mr: "पाणी पुरवठा व्याप्ती आणि पायाभूत सुविधा",
    },
    stats: [
      {
        value: "95%",
        label: { en: "Household Coverage", mr: "घरगुती व्याप्ती" },
        change: { value: "+5%", trend: "up" },
      },
      {
        value: "24/7",
        label: { en: "Supply Duration", mr: "पुरवठा कालावधी" },
      },
    ],
  },
  {
    id: "electricity",
    title: {
      en: "Electricity",
      mr: "विद्युत",
    },
    description: {
      en: "Electricity coverage and infrastructure",
      mr: "विद्युत व्याप्ती आणि पायाभूत सुविधा",
    },
    stats: [
      {
        value: "100%",
        label: { en: "Electrification", mr: "विद्युतीकरण" },
      },
      {
        value: "85%",
        label: { en: "Solar Adoption", mr: "सौर ऊर्जा स्वीकार" },
        change: { value: "+15%", trend: "up" },
      },
    ],
  },
];

// Environmental data
const environmentalData: DashboardCategory[] = [
  {
    id: "green-cover",
    title: {
      en: "Green Coverage",
      mr: "हरित व्याप्ती",
    },
    description: {
      en: "Forest cover and green initiatives",
      mr: "वन व्याप्ती आणि हरित उपक्रम",
    },
    stats: [
      {
        value: "35%",
        label: { en: "Forest Cover", mr: "वन व्याप्ती" },
        change: { value: "+2%", trend: "up" },
      },
      {
        value: "10000+",
        label: { en: "Trees Planted", mr: "लावलेली झाडे" },
      },
    ],
  },
  {
    id: "waste-management",
    title: {
      en: "Waste Management",
      mr: "कचरा व्यवस्थापन",
    },
    description: {
      en: "Waste processing and recycling metrics",
      mr: "कचरा प्रक्रिया आणि पुनर्चक्रण मेट्रिक्स",
    },
    stats: [
      {
        value: "85%",
        label: { en: "Waste Processing", mr: "कचरा प्रक्रिया" },
        change: { value: "+10%", trend: "up" },
      },
      {
        value: "70%",
        label: { en: "Recycling Rate", mr: "पुनर्चक्रण दर" },
      },
    ],
  },
];

// Export dashboard sections
// Define the dashboard sections type
export type DashboardSections = {
  demographics: DashboardCategory[];
  utilities: DashboardCategory[];
  environmental: DashboardCategory[];
};

export const dashboardSections = {
  demographics: demographicsData,
  utilities: utilitiesData,
  environmental: environmentalData,
} satisfies DashboardSections;
