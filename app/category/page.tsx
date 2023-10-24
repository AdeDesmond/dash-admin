"use client";
import { withSwal } from "react-sweetalert2";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Plus } from "lucide-react";
import React from "react";
import { toast } from "react-hot-toast";

function CategoryPage({ swal }: { swal: any }) {
  const [category, setCategory] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [categories, setCategories] = React.useState<
    { _id: string; category: string }[] | null
  >(null);
  console.log(categories);
  const handleAddCategory = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios.post("/api/category", { category }).then((res) => {
        setCategory("");
      });
    } catch (err: any) {
      setError(err.message);
      toast.error(error);
    }
  };
  const fetchCategories = () => {
    axios.get("/api/category").then((res) => {
      setCategories(res.data.categoryData);
    });
  };
  React.useEffect(() => {
    fetchCategories();
  }, []);

  const handleDeleteCategory = (category: {
    _id: string;
    category: string;
  }): void => {
    categories?.filter((cat) => cat._id !== category._id);
    swal
      .fire({
        title: "Are you sure",
        text: `Do you want to delete ${category.category}`,
        showCancelButton: true,
        cancelButtonText: "Cancel",
        confirmButtonText: "Yes, Delete!",
        reverseButtons: true,
        confirmButtonColor: "#d55",
      })
      .then((result: any) => {
        // when confirmed and promise resolved...
        if (result.isConfirmed) {
          axios
            .delete(`/api/category/${category._id}`)
            .then(() => toast.success("Category Deleted Successfully"));
          fetchCategories();
        }
      });
  };
  return (
    <div className="w-full px-4">
      <div className="flex justify-between">
        <h1>Category Page</h1>
      </div>
      <form
        onSubmit={handleAddCategory}
        action=""
        className="flex flex-col w-3/4 mx-auto justify-center items-center"
      >
        <label htmlFor="categories" className="text-center mb-2 font-semibold">
          Categories
        </label>
        <div className="flex items-center justify-center border-2 border-slate-500 max-w-fit">
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            name="categories"
            id="categories"
            placeholder="Enter your categories"
            className="h-10 text-sm rounded-md border-gray-300  focus:outline-none px-2 shadow-md placeholder:italic placeholder:text-slate-400"
          />
          <Button className="bg-blue-500 text-white shadow-lg hover:bg-blue-300 hover:text-black">
            <Plus />
            Add Categories
          </Button>
        </div>
      </form>
      {categories?.length! > 0 && (
        <div>
          {categories?.map((category) => (
            <div
              key={category?._id}
              className="flex justify-between items-center w-3/4 mx-auto my-2"
            >
              <p>{category?.category}</p>
              <Button
                onClick={() => handleDeleteCategory(category)}
                className="bg-red-500 text-white shadow-lg hover:bg-red-300 hover:text-black"
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default withSwal(({ swal }: { swal: any }, ref: any) => (
  <CategoryPage swal={swal} />
));
