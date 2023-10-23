"use client";

import React from "react";
import { Button } from "./ui/button";

function PostNewEditProductForm() {
  return (
    <div>
      <form action="" className="flex flex-col gap-y-1 w-3/4 mx-auto">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Enter the title of product"
          className="h-10 text-sm rounded-md border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none px-2 shadow-md"
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          placeholder="Enter the price of product"
          className="h-10 w-32 text-xs rounded-md border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none px-2 shadow-md"
        />
        <label htmlFor="Quantity">Quantity</label>
        <select
          name="quantity"
          id="quantity"
          className="h-10 shadow-md rounded-lg w-32 mt-2 mb-2"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className="h-24 text-sm rounded-md border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none px-2 shadow-md"
        />
        <label htmlFor="images">Photos</label>
        <input type="file" name="images" id="images" multiple />
        <Button variant={"default"} size={"lg"} asChild>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default PostNewEditProductForm;
