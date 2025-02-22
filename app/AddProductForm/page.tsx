"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { CloudUpload } from "@mui/icons-material";

type FormData = {
  productName: string;
  price: number;
  quantity: number;
  colors: string[];
  otherColor: string;
  deliveryMethod: string;
  image: FileList;
};

export default function AddProductForm() {
  const { register, handleSubmit, watch, setValue } = useForm<FormData>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    alert("Product Listed Successfully!");
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setValue("image", event.target.files);
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl px-10 py-8 rounded-xl max-w-md w-full border border-gray-200"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Add a New Product
        </h2>

        {/* Upload Product Image */}
        <div className="mb-5 text-center">
          <label className="block text-gray-700 font-medium mb-2">
            Upload Product Photo
          </label>
          <label className="border-2 border-dashed border-gray-300 p-5 rounded-lg bg-gray-50 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition w-44 h-44 mx-auto">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="h-full w-full object-cover rounded-lg"
              />
            ) : (
              <>
                <CloudUpload className="text-gray-400 text-4xl" />
                <span className="text-gray-500 text-sm mt-2">Upload Image</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Product Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Product Name</label>
          <input
            type="text"
            {...register("productName")}
            className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none shadow-sm"
          />
        </div>

        {/* Colors Available */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Available Colors</label>
          <div className="flex flex-wrap gap-3">
            {["Red", "Black", "Blue", "Purple"].map((color) => (
              <label
                key={color}
                className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md transition"
              >
                <input type="checkbox" value={color} {...register("colors")} />
                <span
                  className={`${
                    color === "Black" ? "text-black" : `text-${color.toLowerCase()}-500`
                  } font-medium`}
                >
                  {color}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Other Color */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Other Colors</label>
          <input
            type="text"
            {...register("otherColor")}
            className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none shadow-sm"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Price</label>
          <div className="relative">
            <span className="absolute left-3 top-2.5 text-gray-500">$</span>
            <input
              type="number"
              {...register("price")}
              className="border border-gray-300 w-full pl-7 px-3 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none shadow-sm"
            />
          </div>
        </div>

        {/* Quantity */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Quantity</label>
          <input
            type="number"
            {...register("quantity")}
            className="border border-gray-300 w-full px-3 py-2 rounded-lg focus:ring focus:ring-blue-300 outline-none shadow-sm"
          />
        </div>

        {/* Delivery Method */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Delivery Fulfillment</label>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md transition">
              <input type="radio" value="own" {...register("deliveryMethod")} />
              <span>Ship it myself</span>
            </label>
            <label className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-md transition">
              <input type="radio" value="clothbuddy" {...register("deliveryMethod")} />
              <span>Use ClothBuddy's Rider</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition shadow-lg transform hover:scale-105"
        >
          List Product
        </button>
      </form>
    </div>
  );
}
