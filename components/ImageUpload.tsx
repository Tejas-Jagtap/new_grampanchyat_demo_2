import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt, FaTimes } from "react-icons/fa";

interface ImageUploadProps {
  onUploadComplete: (imageUrl: string) => void;
  language: string;
  labels: {
    title: string;
    description: string;
  };
}

// Validate environment variables on component mount
const validateEnv = () => {
  // Only check NEXT_PUBLIC variable on client side
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (
    !cloudName ||
    cloudName === "undefined" ||
    cloudName === "your-cloud-name"
  ) {
    console.error("Invalid or missing Cloudinary cloud name");
    return false;
  }
  return true;
};

export default function ImageUpload({
  onUploadComplete,
  language,
  labels,
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [envValid, setEnvValid] = useState(false); // Start with false

  useEffect(() => {
    // Check environment variables on mount
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
    console.log("Cloudinary config:", {
      cloudName: cloudName || "not set",
      hasCloudName: !!cloudName,
    });
    setEnvValid(
      !!cloudName &&
        cloudName !== "undefined" &&
        cloudName !== "your-cloud-name"
    );
  }, []);

  useEffect(() => {
    setEnvValid(validateEnv());
  }, []);

  const validateImage = (file: File) => {
    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      throw new Error(
        language === "en"
          ? "Image size should be less than 5MB"
          : "प्रतिमेचा आकार 5MB पेक्षा कमी असावा"
      );
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      throw new Error(
        language === "en"
          ? "Please upload a valid image file"
          : "कृपया वैध प्रतिमा फाइल अपलोड करा"
      );
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setError(null);
      validateImage(file);

      // Show preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.onerror = () => {
        setError(
          language === "en"
            ? "Failed to read image file"
            : "प्रतिमा फाइल वाचण्यात अयशस्वी"
        );
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load image");
      e.target.value = ""; // Reset file input
    }
  };

  const handleUpload = async () => {
    try {
      if (!envValid) {
        setError(
          language === "en"
            ? "Image upload is not configured correctly"
            : "प्रतिमा अपलोड योग्यरित्या कॉन्फिगर केलेले नाही"
        );
        return;
      }

      setError(null);

      if (!previewUrl || !title) {
        setError(
          language === "en"
            ? "Please select an image and enter a title"
            : "कृपया एक प्रतिमा निवडा आणि शीर्षक प्रविष्ट करा"
        );
        return;
      }

      setUploading(true);

      // Upload to Cloudinary via our API
      const response = await fetch("/api/upload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: previewUrl,
          title,
          description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Upload failed");
      }

      if (data.success) {
        // Pass the uploaded image URL back to parent
        onUploadComplete(data.url);

        // Reset form
        setPreviewUrl(null);
        setTitle("");
        setDescription("");
        setError(null);
      } else {
        throw new Error(data.error || "Upload failed");
      }
    } catch (err) {
      console.error("Upload error:", err);
      setError(
        err instanceof Error
          ? err.message
          : language === "en"
          ? "Upload failed"
          : "अपलोड अयशस्वी"
      );
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-4">
        {/* Environment Error */}
        {!envValid && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
            <p className="text-yellow-700">
              {language === "en"
                ? "Image upload is not configured properly. Please contact the administrator."
                : "प्रतिमा अपलोड योग्यरित्या कॉन्फिगर केलेले नाही. कृपया प्रशासकाशी संपर्क साधा."}
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}
        {/* Title Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Image Title *" : "प्रतिमा शीर्षक *"}
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder={
              language === "en" ? "Enter title" : "शीर्षक प्रविष्ट करा"
            }
            required
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {language === "en" ? "Description (Optional)" : "वर्णन (पर्यायी)"}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            rows={3}
            placeholder={
              language === "en" ? "Enter description" : "वर्णन प्रविष्ट करा"
            }
          />
        </div>

        {/* Image Upload Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          {previewUrl ? (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
              <button
                onClick={() => setPreviewUrl(null)}
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
              >
                <FaTimes />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer">
              <FaCloudUploadAlt className="text-4xl text-gray-400" />
              <span className="mt-2 text-sm text-gray-600">
                {language === "en"
                  ? "Click to select image"
                  : "प्रतिमा निवडण्यासाठी क्लिक करा"}
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={!previewUrl || !title || uploading}
          className={`w-full py-2 px-4 rounded-lg text-white font-medium ${
            !previewUrl || !title || uploading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#01A3D6] hover:bg-[#0182aa]"
          }`}
        >
          {uploading
            ? language === "en"
              ? "Uploading..."
              : "अपलोड होत आहे..."
            : language === "en"
            ? "Upload Image"
            : "प्रतिमा अपलोड करा"}
        </button>
      </div>
    </div>
  );
}
