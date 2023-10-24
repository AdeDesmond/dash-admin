import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Button } from "./ui/button";

interface DisplayProductsTableProps {
  _id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  category: { _id: string; category: string };
  quantity: number;
}

function DisplayProductsTable({
  products,
}: {
  products: DisplayProductsTableProps[];
}) {
  return (
    <Table>
      <TableCaption>Products</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[15rem] font-semibold">
            Product Title
          </TableHead>
          <TableHead className="font-semibold">Product Quantity</TableHead>
          <TableHead className="font-semibold">Product Price</TableHead>
          <TableHead className="text-left font-semibold">Category</TableHead>
          <TableHead className="text-left font-semibold">
            Product Image
          </TableHead>
          <TableHead className="text-center font-semibold">
            Edit Products
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.length > 0 &&
          products.slice(0, 4).map((product) => (
            <TableRow key={product._id}>
              <TableCell className="font-medium">{product?.title}</TableCell>
              <TableCell className="font-medium">{product?.quantity}</TableCell>
              <TableCell className="font-medium">{product?.price}$</TableCell>
              <TableCell className="font-medium">
                {product?.category?.category}
              </TableCell>
              <TableCell className="font-medium">
                {product?.images?.length > 0 && (
                  <Image
                    src={product?.images[0]}
                    alt={product?.title}
                    width={100}
                    height={100}
                  />
                )}
              </TableCell>
              <TableCell className="font-medium">
                <Button variant={"secondary"} className="bg-purple-400 px-6">
                  Edit
                </Button>
                <Button className="bg-red-300">Delete</Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default DisplayProductsTable;
