"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";
import {
  getSiteConfig,
  getContactInfo,
  getSocialMedia,
  getText,
  getContactContent,
  getHelplineNumbers,
} from "@/lib/config";
import Helpline from "@/components/Helpline";

export default function ContactPage() {
  const { language } = useLanguage();
  const contactContent = getContactContent();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Load configuration data
  const siteConfig = getSiteConfig();
  const contactInfo = getContactInfo();
  const socialMedia = getSocialMedia();
  const village = siteConfig.village;
  const helplineNumbers = getHelplineNumbers();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert(getText(contactContent.contactForm.successMessage, language));
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-4 sm:p-5 mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
            {getText(contactContent.title, language)}
          </h1>
          <p className="text-sm sm:text-base opacity-90">
            {getText(contactContent.subtitle, language)}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-4">
            {/* Office Address */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-[#0A1931] text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-1.5 text-base">
                    {getText(
                      contactContent.contactInfo.address.label,
                      language
                    )}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {language === "mr"
                      ? "ग्राम पंचायत कार्यालय"
                      : "Gram Panchayat Office"}
                    <br />
                    {getText(village.name, language)}
                    <br />
                    {getText(village.taluka, language)},{" "}
                    {getText(village.district, language)}
                    <br />
                    {getText(village.state, language)}
                    <br />
                    {language === "mr" ? "पिन कोड" : "PIN"}: {village.pincode}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-government-green text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-1.5 text-base">
                    {getText(contactContent.contactInfo.phone.label, language)}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {language === "mr" ? "कार्यालय" : "Office"}:{" "}
                    {contactInfo.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-government-orange text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-1.5 text-base">
                    {getText(contactContent.contactInfo.email.label, language)}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm break-all">
                    {contactInfo.email}
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="flex items-start gap-3">
                <div className="bg-red-500 text-white w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-lg" />
                </div>
                <div>
                  <h3 className="font-bold text-government-blue mb-1.5 text-base">
                    {getText(
                      contactContent.contactInfo.officeHours.label,
                      language
                    )}
                  </h3>
                  <p className="text-gray-700 text-xs sm:text-sm">
                    {getText(
                      contactContent.contactInfo.officeHours.value,
                      language
                    )}
                    <br />
                    <span className="text-red-500 font-semibold">
                      {language === "mr"
                        ? "रविवार आणि सुट्टीच्या दिवशी बंद"
                        : "Closed on Sundays & Holidays"}
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Helpline Numbers */}
            <Helpline />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5">
              <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-4">
                {getText(contactContent.contactForm.title, language)}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm">
                      {getText(
                        contactContent.contactForm.fullName.label,
                        language
                      )}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm"
                      placeholder={getText(
                        contactContent.contactForm.fullName.placeholder,
                        language
                      )}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm">
                      {getText(
                        contactContent.contactForm.email.label,
                        language
                      )}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={getText(
                        contactContent.contactForm.email.placeholder,
                        language
                      )}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm">
                      {getText(
                        contactContent.contactForm.phone.label,
                        language
                      )}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder={getText(
                        contactContent.contactForm.phone.placeholder,
                        language
                      )}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm">
                      {getText(
                        contactContent.contactForm.subject.label,
                        language
                      )}{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors text-sm sm:text-base"
                    >
                      <option value="">
                        {getText(
                          contactContent.contactForm.subject.placeholder,
                          language
                        )}
                      </option>
                      {contactContent.contactForm.subject.options.map(
                        (option) => (
                          <option key={option.value} value={option.value}>
                            {getText(option.label, language)}
                          </option>
                        )
                      )}
                      <option value="certificate">
                        {language === "mr" ? "प्रमाणपत्र" : "Certificate"}
                      </option>
                      <option value="scheme">
                        {language === "mr" ? "योजना" : "Scheme"}
                      </option>
                      <option value="other">
                        {language === "mr" ? "इतर" : "Other"}
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1.5 text-xs sm:text-sm">
                    {getText(
                      contactContent.contactForm.message.label,
                      language
                    )}{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg focus:border-government-blue focus:outline-none transition-colors resize-none text-sm"
                    placeholder={getText(
                      contactContent.contactForm.message.placeholder,
                      language
                    )}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0A1931] hover:bg-government-orange text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  {getText(contactContent.contactForm.sendButton, language)}
                </button>
              </form>
            </div>

            {/* Map Section */}
            <div className="h-[635px] mt-6 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-3 sm:p-4 bg-[#0A1931] text-white">
                <h3 className="text-base sm:text-lg font-bold">
                  {getText(contactContent.locationMap.title, language)}
                </h3>
              </div>
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2133198478436!2d73.8567437!3d18.5204303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0704334e675%3A0x90e1e4ac2f2e29d4!2sMaharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
