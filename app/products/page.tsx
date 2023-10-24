"use client";

import DisplayProductsTable from "@/components/DisplayProductsTable";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";

function ProductsPage() {
  const [products, setProducts] = React.useState();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "GET",
      });
      const data = await res.json();
      setProducts(data.productData);
    };
    fetchProducts();
  }, []);
  return (
    <section className="w-full overflow-y-auto">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold bg-slate-200 w-[12.5rem] ml-4 p-2 shadow-md">
          Products Page
        </h1>
        <Button
          variant={"secondary"}
          size={"lg"}
          className=" mr-4 bg-blue-500 hover:bg-blue-600 text-white"
          asChild
        >
          <Link href="/products/new" className="flex gap-x-1">
            <Plus className="w-6 h-6" />
            New Product
          </Link>
        </Button>
      </div>
      {products && <DisplayProductsTable products={products} />}
    </section>
  );
}

export default ProductsPage;
