import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import { CategoryModel } from "@/models/categoryModel";

connectDB();
export async function POST(request: NextRequest) {
  const jsonBody = await request.json();
  const { category } = jsonBody;
  if (!category) {
    return NextResponse.json({ error: "No category found" }, { status: 400 });
  }
  try {
    const newCategory = await CategoryModel.create({ category });
    return NextResponse.json({
      success: true,
      message: "successfully uploaded",
      categoryData: newCategory,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const categories = await CategoryModel.find({}).select(
      "-__v -createdAt -updatedAt"
    );
    return NextResponse.json({
      success: true,
      message: "successfully fetched",
      categoryData: categories,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
