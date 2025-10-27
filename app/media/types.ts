export interface BilingualText {
  en: string;
  mr: string;
}

export interface MediaItem {
  id: number;
  type: "photo" | "video" | "event";
  title: BilingualText;
  description: BilingualText;
  thumbnail: string;
  date: string;
  category: string;
  url?: string;
}

export interface MediaCategory {
  id: string;
  title: BilingualText;
  description: BilingualText;
  color: string;
}

export const mediaCategories = {
  photos: [
    {
      id: "development",
      title: {
        en: "Development Projects",
        mr: "विकास प्रकल्प",
      },
      description: {
        en: "Photos documenting village development and infrastructure projects",
        mr: "गाव विकास आणि पायाभूत सुविधा प्रकल्पांचे दस्तऐवजीकरण छायाचित्रे",
      },
      color: "bg-blue-600",
    },
    {
      id: "cultural",
      title: {
        en: "Cultural Events",
        mr: "सांस्कृतिक कार्यक्रम",
      },
      description: {
        en: "Photos from festivals, celebrations and cultural programs",
        mr: "उत्सव, समारंभ आणि सांस्कृतिक कार्यक्रमांची छायाचित्रे",
      },
      color: "bg-purple-600",
    },
    {
      id: "community",
      title: {
        en: "Community Gatherings",
        mr: "सामुदायिक मेळावे",
      },
      description: {
        en: "Photos from community meetings and social events",
        mr: "सामुदायिक बैठका आणि सामाजिक कार्यक्रमांची छायाचित्रे",
      },
      color: "bg-green-600",
    },
  ],
  videos: [
    {
      id: "documentation",
      title: {
        en: "Project Documentation",
        mr: "प्रकल्प दस्तऐवजीकरण",
      },
      description: {
        en: "Videos documenting various development projects",
        mr: "विविध विकास प्रकल्पांचे दस्तऐवजीकरण व्हिडिओ",
      },
      color: "bg-red-600",
    },
    {
      id: "coverage",
      title: {
        en: "Event Coverage",
        mr: "कार्यक्रम कव्हरेज",
      },
      description: {
        en: "Video coverage of village events and functions",
        mr: "गावातील कार्यक्रम आणि समारंभांचे व्हिडिओ कव्हरेज",
      },
      color: "bg-orange-600",
    },
    {
      id: "success",
      title: {
        en: "Success Stories",
        mr: "यशोगाथा",
      },
      description: {
        en: "Videos highlighting village achievements and success stories",
        mr: "गावाची यश आणि कामगिरी दर्शविणारे व्हिडिओ",
      },
      color: "bg-yellow-600",
    },
  ],
  events: [
    {
      id: "festivals",
      title: {
        en: "Traditional Festivals",
        mr: "पारंपारिक उत्सव",
      },
      description: {
        en: "Coverage of traditional festivals and cultural celebrations",
        mr: "पारंपारिक उत्सव आणि सांस्कृतिक समारंभांचे कव्हरेज",
      },
      color: "bg-pink-600",
    },
    {
      id: "ceremonies",
      title: {
        en: "Official Ceremonies",
        mr: "अधिकृत समारंभ",
      },
      description: {
        en: "Coverage of government functions and official events",
        mr: "सरकारी कार्यक्रम आणि अधिकृत समारंभांचे कव्हरेज",
      },
      color: "bg-indigo-600",
    },
    {
      id: "programs",
      title: {
        en: "Community Programs",
        mr: "सामुदायिक कार्यक्रम",
      },
      description: {
        en: "Coverage of community initiatives and social programs",
        mr: "सामुदायिक उपक्रम आणि सामाजिक कार्यक्रमांचे कव्हरेज",
      },
      color: "bg-teal-600",
    },
  ],
};
