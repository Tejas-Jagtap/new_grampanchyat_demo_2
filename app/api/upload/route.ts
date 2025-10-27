import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

// Validate environment variables
const requiredEnvVars = {
  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

// Check if any required environment variables are missing
const missingEnvVars = Object.entries(requiredEnvVars)
  .filter(([_, value]) => !value)
  .map(([key]) => key);

if (missingEnvVars.length > 0) {
  console.error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
}

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(request: Request) {
  try {
    // Check if environment variables are properly configured
    if (missingEnvVars.length > 0) {
      throw new Error(`Missing Cloudinary configuration: ${missingEnvVars.join(", ")}`);
    }

    const { image } = await request.json();

    // Validate image data
    if (!image) {
      return NextResponse.json(
        { success: false, error: "No image data provided" },
        { status: 400 }
      );
    }

    // Check if image is a valid base64 string
    if (!image.startsWith('data:image')) {
      return NextResponse.json(
        { success: false, error: "Invalid image format" },
        { status: 400 }
      );
    }

    const result = await cloudinary.uploader.upload(image, {
      folder: "gram-panchayat-gallery",
      transformation: [
        { width: 1200, height: 800, crop: "limit" }, // Set maximum dimensions
        { quality: "auto" }, // Optimize quality
        { fetch_format: "auto" }, // Auto-select best format
      ],
    });

    return NextResponse.json({
      success: true,
      url: result.secure_url,
      public_id: result.public_id,
      width: result.width,
      height: result.height,
    });
  } catch (error) {
    console.error("Upload error:", error);
    
    const errorMessage = error instanceof Error ? error.message : "Upload failed";
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
      },
      { status: 500 }
    );
  }
}
