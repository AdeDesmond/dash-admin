"use client";

import axios from "axios";
import React, { useEffect } from "react";
import { MoonLoader } from "react-spinners";
import { Button } from "./ui/button";
import Image from "next/image";
import { toast } from "react-hot-toast";

function PostNewEditProductForm() {
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState<string | number>("");
  const [quantity, setQuantity] = React.useState<string | number>("");
  const [description, setDescription] = React.useState("");
  const [images, setImages] = React.useState<string[]>([]);
  const [isUploading, setIsUploading] = React.useState(false);
  const [categories, setCategories] = React.useState<
    { _id: string; category: string }[]
  >([]);
  const [error, setError] = React.useState<string | null>(null);
  const handleUploadImages = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    if (!files) return;
    const imageFormData = new FormData();
    for (let file = 0; file < files.length; file++) {
      imageFormData.append("file", files[file]);
    }
    try {
      setError(null);
      setIsUploading(true);
      axios.post("/api/upload", imageFormData).then((res) => {
        setImages((prevImages) => [...prevImages, ...res.data.imageData]);
        setIsUploading(false);
      });
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    axios.get("/api/category").then((res) => {
      setCategories(res.data?.categoryData);
    });
  }, []);
  return (
    <div>
      {error && toast.error(error)}
      <form action="" className="flex flex-col gap-y-1 w-3/4 mx-auto">
        <label
          htmlFor="title"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title of product"
          className="h-10 text-sm rounded-md border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none px-2 shadow-md placeholder:italic placeholder:text-slate-400"
        />
        <label
          htmlFor="price"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Price
        </label>
        <input
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          type="number"
          name="price"
          id="price"
          placeholder="Enter the price of product"
          className="h-10 w-32 text-xs rounded-md border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none px-2 shadow-md placeholder:italic placeholder:text-slate-400"
        />
        <label htmlFor="categories">Categories</label>
        <select
          name="categories"
          id="categories"
          className="h-10 shadow-md rounded-lg w-48 mt-2 mb-2 block py-2.5 px-0 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
        >
          {categories.length > 0 &&
            categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category?.category}
              </option>
            ))}
        </select>
        <label htmlFor="Quantity">Quantity</label>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          name="quantity"
          id="quantity"
          className="h-10 shadow-md rounded-lg w-32 mt-2 mb-2"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <label
          htmlFor="description"
          className="after:content-['*'] after:ml-0.5 after:text-red-500"
        >
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          name="description"
          id="description"
          className="h-24 text-sm rounded-md border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none px-2 shadow-md placeholder:italic placeholder:text-slate-400"
          placeholder="Enter the description of product"
        />
        <label htmlFor="images">Photos</label>
        <input
          onChange={handleUploadImages}
          type="file"
          name="images"
          id="images"
          multiple
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100 mb-2"
        />
        {isUploading && <MoonLoader color="#38bdf8" />}
        {images.length > 0 && (
          <div className="flex gap-x-1">
            {images.map((image, index) => (
              <Image
                src={image}
                alt="products photos"
                width={100}
                height={100}
                key={index}
                className=" shadow-md hover:scale-105 transition-all duration-150"
              />
            ))}
          </div>
        )}
        <Button variant={"secondary"} size={"lg"}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default PostNewEditProductForm;
