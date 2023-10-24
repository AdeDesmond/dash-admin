import { NextResponse, NextRequest } from "next/server";
import { uploadFile } from "@/lib/uploadFile";
export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No file found" }, { status: 400 });
  }
  try {
    let imageLinks = [];
    const imagesFromSupabase = await uploadFile(file as File);
    imageLinks.push(imagesFromSupabase);
    return NextResponse.json({
      success: true,
      message: "successfully uploaded",
      imageData: imageLinks,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
