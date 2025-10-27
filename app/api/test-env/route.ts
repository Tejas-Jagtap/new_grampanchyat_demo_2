import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "not-set",
    hasApiKey: !!process.env.CLOUDINARY_API_KEY,
    hasApiSecret: !!process.env.CLOUDINARY_API_SECRET,
  });
}
