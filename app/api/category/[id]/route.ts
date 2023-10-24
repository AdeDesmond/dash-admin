import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/dbConfig/dbConfig";
import { CategoryModel } from "@/models/categoryModel";
connectDB();
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deletedCategory = await CategoryModel.findByIdAndDelete(params.id);
    return NextResponse.json({
      success: true,
      message: "successfully deleted",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
