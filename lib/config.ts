/**
 * Configuration Utility
 *
 * This utility loads all configuration files for the Gram Panchayat website.
 * To update data for a different village, simply modify the JSON files in the /config folder.
 */

import siteConfig from "@/config/site.config.json";
import officialsConfig from "@/config/officials.json";
import newsConfig from "@/config/news.json";
import galleryConfig from "@/config/gallery.json";
import departmentsConfig from "@/config/departments.json";
import schemesConfig from "@/config/schemes.json";
import servicesConfig from "@/config/services.json";
import homeConfig from "@/config/home.json";
import aboutConfig from "@/config/about.json";
import contactConfig from "@/config/contact.json";
import uiLabels from "@/config/ui-labels.json";
import officeSettings from "@/config/office-settings.json";
import dashboradConfig from "@/config/dashboard.json";

// Type definitions
export interface BilingualText {
  en: string;
  mr: string;
}

export interface Scheme {
  id: string;
  name: BilingualText;
  benefit: BilingualText | string;
  description?: BilingualText;
  eligibility?: BilingualText;
  documents?: BilingualText[];
  beneficiaries?: string;
  applicationUrl?: string;
  enabled?: boolean;
}

export interface ApplicationSteps {
  central: BilingualText[];
  state: BilingualText[];
  local: BilingualText[];
}

export interface DashboardStat {
  label: BilingualText;
  value: string;
  change: string;
  icon: string;
  color: string;
}

export interface DashboardAchievement {
  text: BilingualText;
  progress: string;
}

export interface DashboardMetric {
  label: BilingualText;
  data: number[];
  color: string;
}

export interface DashboardContent {
  title: BilingualText;
  subtitle: BilingualText;
  sections: {
    keyStats: {
      title: BilingualText;
      stats: DashboardStat[];
    };
    achievements: {
      title: BilingualText;
      items: DashboardAchievement[];
    };
    yearlyProgress: {
      title: BilingualText;
      metrics: DashboardMetric[];
      years: string[];
    };
  };
}

export interface VillageInfo {
  name: BilingualText;
  district: BilingualText;
  taluka: BilingualText;
  state: BilingualText;
  pincode: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: BilingualText;
}

export interface SocialMedia {
  facebook: string;
  twitter: string;
  youtube: string;
  instagram: string;
}

export interface Official {
  name: BilingualText;
  position: BilingualText;
  phone: string;
  email: string;
  photo: string;
  address?: BilingualText;
}

export interface Member {
  id: number;
  name: BilingualText;
  wardNumber: number;
  position: BilingualText;
  phone: string;
}

export interface NewsItem {
  id: number;
  title: BilingualText;
  description: BilingualText;
  date: string;
  category: BilingualText;
  image: string;
  link: string;
  featured: boolean;
}

export interface GalleryItem {
  id: number;
  title: BilingualText;
  category: BilingualText;
  image: string;
  date: string;
  description: BilingualText;
}

export interface Department {
  id: string;
  name: BilingualText;
  slug: string;
  icon: string;
  color: string;
  description: BilingualText;
  head: {
    name: BilingualText;
    designation: BilingualText;
  };
  services?: BilingualText[];
  schemes?: BilingualText[];
  enabled: boolean;
}

export interface Scheme {
  id: string;
  name: BilingualText;
  benefit: BilingualText | string;
  description?: BilingualText;
  eligibility?: BilingualText;
  documents?: string[];
  beneficiaries?: number;
  status?: BilingualText | string;
  enabled: boolean;
}

export interface ServiceItem {
  id: string;
  category: string;
  name: BilingualText;
  description: BilingualText;
  processingTime: string | BilingualText;
  fee: string | BilingualText;
  documents: string[];
  enabled: boolean;
}

// Configuration accessors
export const getSiteConfig = () => siteConfig;
export const getVillageInfo = (): VillageInfo => siteConfig.village;
export const getContactInfo = (): ContactInfo => siteConfig.contact;
export const getSocialMedia = (): SocialMedia => siteConfig.social;
export const getBranding = () => siteConfig.branding;
export const getFeatures = () => siteConfig.features;

// Officials
export const getOfficials = () => officialsConfig;
export const getChiefMinister = (): Official => officialsConfig.chiefMinister;
export const getDeputyChiefMinister = (): Official =>
  officialsConfig.deputyChiefMinister;
export const getDeputyChiefMinister1 = (): Official =>
  officialsConfig.deputyChiefMinister1;
export const getSarpanch = (): Official => officialsConfig.sarpanch;
export const getUpSarpanch = (): Official => officialsConfig.upSarpanch;
export const getGramSevak = (): Official => officialsConfig.gramSevak;
// export const getSecretary = (): Official => officialsConfig.secretary;
export const getMembers = (): Member[] => officialsConfig.members;

// News
export const getNews = (): NewsItem[] => newsConfig.news;
export const getFeaturedNews = (): NewsItem[] =>
  newsConfig.news.filter((item) => item.featured);
export const getHomeNews = (limit: number = 4): NewsItem[] =>
  newsConfig.news.slice(0, limit);

// Gallery
export const getGallery = (): GalleryItem[] => galleryConfig.gallery;
export const getHomeGallery = (limit: number = 4): GalleryItem[] =>
  galleryConfig.gallery.slice(0, limit);

// Departments
export const getDepartments = (): Department[] =>
  departmentsConfig.departments.filter((dept) => dept.enabled);
export const getHomeDepartments = (limit: number = 4): Department[] =>
  departmentsConfig.departments.filter((dept) => dept.enabled).slice(0, limit);
export const getDepartmentBySlug = (slug: string): Department | undefined =>
  departmentsConfig.departments.find(
    (dept) => dept.slug === slug && dept.enabled
  );

// Schemes
export const getSchemeCategories = () => schemesConfig.schemeCategories;
export const getCentralSchemes = (): Scheme[] =>
  schemesConfig.centralSchemes.filter((scheme) => scheme.enabled);
export const getStateSchemes = (): Scheme[] =>
  schemesConfig.stateSchemes.filter((scheme) => scheme.enabled);
export const getLocalSchemes = (): Scheme[] =>
  schemesConfig.localSchemes.filter((scheme) => scheme.enabled);
export const getAllSchemes = (): Scheme[] => [
  ...getCentralSchemes(),
  ...getStateSchemes(),
  ...getLocalSchemes(),
];
export const getHomeSchemes = (limit: number = 4): Scheme[] =>
  getAllSchemes().slice(0, limit);

// Services
export const getServiceCategories = () =>
  servicesConfig.serviceCategories.filter((cat) => cat.enabled);
export const getServices = (): ServiceItem[] =>
  servicesConfig.services.filter((service) => service.enabled);
export const getServicesByCategory = (category: string): ServiceItem[] =>
  servicesConfig.services.filter(
    (service) => service.category === category && service.enabled
  );

// Helper function to get text by language
export const getText = (text: BilingualText, language: "en" | "mr"): string => {
  return text[language];
};

// Helper to format date
export const formatDate = (
  dateString: string,
  language: "en" | "mr"
): string => {
  const date = new Date(dateString);

  if (language === "mr") {
    const marathiMonths = [
      "जानेवारी",
      "फेब्रुवारी",
      "मार्च",
      "एप्रिल",
      "मे",
      "जून",
      "जुलै",
      "ऑगस्ट",
      "सप्टेंबर",
      "ऑक्टोबर",
      "नोव्हेंबर",
      "डिसेंबर",
    ];
    return `${date.getDate()} ${
      marathiMonths[date.getMonth()]
    }, ${date.getFullYear()}`;
  }

  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Page Content Helpers
export const getHomeContent = () => homeConfig;
export const getAboutContent = () => aboutConfig;
export const getContactContent = () => contactConfig;
export const getDashboardContent = () => dashboradConfig;

// Office Settings Helpers
export const getOfficeHours = () => officeSettings.officeHours;
export const getHelplineNumbers = () => officeSettings.helplineNumbers;

// UI Labels - Replaces translation files
export const getUILabels = () => uiLabels;

/**
 * Get UI label by path (e.g., "navigation.home", "components.news.title")
 * This replaces the translation t() function
 */
export const getLabel = (path: string, language: "en" | "mr"): string => {
  const keys = path.split(".");
  let value: any = uiLabels;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      console.warn(`Label not found: ${path}`);
      return path; // Return the path as fallback
    }
  }

  if (value && typeof value === "object" && language in value) {
    return value[language];
  }

  console.warn(`Language '${language}' not found for label: ${path}`);
  return path;
};
