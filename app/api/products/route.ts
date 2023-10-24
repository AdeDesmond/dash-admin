import { ProductModel } from "@/models/productModel";
import { CategoryModel } from "@/models/categoryModel";
import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";

connectDB();
export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { title, description, price, selectedCategory, images, quantity } =
      jsonBody;
    const newProduct = await ProductModel.create({
      title,
      description,
      price,
      category: selectedCategory,
      images,
      quantity,
    });
    return NextResponse.json({
      success: true,
      message: "successfully uploaded",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function GET() {
  try {
    const products = await ProductModel.find({})
      .select("-__v -createdAt -updatedAt")
      .populate({
        path: "category",
        select: "category",
        model: CategoryModel,
      });
    return NextResponse.json({
      success: true,
      message: "successfully fetched",
      productData: products,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
