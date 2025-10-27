"use client";

import React from "react";
import {
  FaQrcode,
  FaHistory,
  FaReceipt,
  FaInfoCircle,
  FaSearch,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const taxTypes = [
  {
    id: "property",
    title: {
      en: "Property Tax",
      mr: "मालमत्ता कर",
    },
    description: {
      en: "Annual tax on residential and commercial properties",
      mr: "निवासी आणि व्यावसायिक मालमत्तांवरील वार्षिक कर",
    },
    dueDate: "2025-12-31",
    discount: "10%",
  },
  {
    id: "water",
    title: {
      en: "Water Tax",
      mr: "पाणी कर",
    },
    description: {
      en: "Charges for water supply and maintenance",
      mr: "पाणी पुरवठा आणि देखभालीसाठी शुल्क",
    },
    dueDate: "2025-11-30",
    discount: "5%",
  },
  {
    id: "business",
    title: {
      en: "Business License Fee",
      mr: "व्यवसाय परवाना शुल्क",
    },
    description: {
      en: "Annual fee for business operations",
      mr: "व्यवसाय संचालनासाठी वार्षिक शुल्क",
    },
    dueDate: "2025-11-15",
    discount: "None",
  },
];

const recentPayments = [
  {
    id: 1,
    type: {
      en: "Property Tax",
      mr: "मालमत्ता कर",
    },
    amount: "₹5,000",
    date: "2025-10-15",
    status: "success",
    reference: "TX2025001",
  },
  {
    id: 2,
    type: {
      en: "Water Tax",
      mr: "पाणी कर",
    },
    amount: "₹1,200",
    date: "2025-10-10",
    status: "success",
    reference: "TX2025002",
  },
];

export default function TaxPaymentPage() {
  const { language } = useLanguage();

  const getText = (obj: { en: string; mr: string }) => {
    return language === "en" ? obj.en : obj.mr;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat(language === "en" ? "en-US" : "mr-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-3xl font-bold mb-4">
            {language === "en" ? "Tax Payment (QR)" : "कर भरणा (QR)"}
          </h1>
          <p className="text-lg opacity-90">
            {language === "en"
              ? "Pay your taxes easily using QR code or online payment"
              : "QR कोड किंवा ऑनलाइन पेमेंटद्वारे सहज कर भरणा करा"}
          </p>
        </div>

        {/* Quick Search */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              placeholder={
                language === "en"
                  ? "Enter Property ID / Consumer Number..."
                  : "मालमत्ता ID / ग्राहक क्रमांक प्रविष्ट करा..."
              }
            />
            <FaSearch className="absolute left-3 top-4 text-gray-400" />
            <button className="absolute right-3 top-2 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700">
              {language === "en" ? "Search" : "शोधा"}
            </button>
          </div>
        </div>

        {/* Tax Types */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 text-gray-900">
            {language === "en" ? "Available Tax Payments" : "उपलब्ध कर भरणा"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {taxTypes.map((tax) => (
              <div
                key={tax.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {getText(tax.title)}
                </h3>
                <p className="text-gray-600 mb-4">{getText(tax.description)}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === "en" ? "Due Date" : "अंतिम तारीख"}:
                    </span>
                    <span className="text-purple-800 font-medium">
                      {formatDate(tax.dueDate)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      {language === "en"
                        ? "Early Payment Discount"
                        : "लवकर भरणा सवलत"}
                      :
                    </span>
                    <span className="text-green-600 font-medium">
                      {tax.discount}
                    </span>
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700">
                  {language === "en" ? "Pay Now" : "आता भरा"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* QR Code Section */}
        <div className="bg-purple-50 rounded-lg shadow-lg p-6 mb-8 text-center">
          <FaQrcode className="text-6xl text-purple-800 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2 text-gray-900">
            {language === "en" ? "Scan & Pay" : "स्कॅन करा आणि भरा"}
          </h2>
          <p className="text-gray-600 mb-4">
            {language === "en"
              ? "Scan the QR code at our office for instant payment"
              : "त्वरित पेमेंटसाठी आमच्या कार्यालयात QR कोड स्कॅन करा"}
          </p>
        </div>

        {/* Recent Payments */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
              <FaHistory className="mr-2" />
              {language === "en" ? "Recent Payments" : "अलीकडील भरणा"}
            </h2>
            <div className="space-y-4">
              {recentPayments.map((payment) => (
                <div
                  key={payment.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-gray-200 last:border-0 pb-4 last:pb-0"
                >
                  <div>
                    <div className="font-medium text-gray-900">
                      {getText(payment.type)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {payment.reference} • {formatDate(payment.date)}
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 flex items-center gap-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {payment.amount}
                    </span>
                    <button className="text-purple-800 hover:text-purple-600">
                      <FaReceipt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Help Box */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-start gap-4">
            <FaInfoCircle className="text-purple-800 text-2xl flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-900">
                {language === "en" ? "Need Help?" : "मदत हवी आहे?"}
              </h3>
              <p className="text-gray-600">
                {language === "en"
                  ? "Contact our support team for assistance with tax payments"
                  : "कर भरणा संबंधित मदतीसाठी आमच्या सहाय्य टीमशी संपर्क साधा"}
              </p>
              <button className="mt-4 px-4 py-2 text-purple-800 hover:text-purple-600 font-medium">
                {language === "en" ? "Contact Support" : "सहाय्य संपर्क"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
