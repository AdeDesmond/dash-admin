import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

function ProductsPage() {
  return (
    <section className="w-full">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold bg-slate-200 w-[12.5rem] ml-4 p-2 shadow-md">
          Products Page
        </h1>
        <Button
          variant={"secondary"}
          size={"lg"}
          className="shadow-md mr-4"
          asChild
        >
          <Link href="/products/new" className="flex gap-x-1">
            <Plus className="w-6 h-6" />
            New Product
          </Link>
        </Button>
      </div>
    </section>
  );
}

export default ProductsPage;
