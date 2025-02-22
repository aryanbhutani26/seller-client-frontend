"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4">List Your Product</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        
        {/* Image Upload */}
        <label className="block">
          <span className="text-gray-700">Upload Photo of Product</span>
          <div className="border p-4 mt-2 rounded-md flex items-center justify-center cursor-pointer">
            {imagePreview ? (
              <img src={imagePreview} alt="Preview" className="h-24" />
            ) : (
              <span className="text-gray-500">Click to upload</span>
            )}
            <input
              type="file"
              accept="image/*"
              {...register("image")}
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </label>

        {/* Product Name */}
        <label className="block">
          <span className="text-gray-700">Name Of Product</span>
          <input
            type="text"
            {...register("productName", { required: true })}
            className="mt-2 p-2 border w-full rounded-md"
          />
        </label>

        {/* Colors Available */}
        <div>
          <span className="text-gray-700">Colors Available</span>
          <div className="mt-2 flex gap-4">
            {["Red", "Black", "Blue", "Purple"].map((color) => (
              <label key={color} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={color}
                  {...register("colors")}
                  className="mr-2"
                />
                <span>{color}</span>
              </label>
            ))}
          </div>
          <input
            type="text"
            placeholder="Other color"
            {...register("otherColor")}
            className="mt-2 p-2 border w-full rounded-md"
          />
        </div>

        {/* Price */}
        <label className="block">
          <span className="text-gray-700">Your Price ($)</span>
          <input
            type="number"
            {...register("price", { required: true })}
            className="mt-2 p-2 border w-full rounded-md"
          />
        </label>

        {/* Quantity */}
        <label className="block">
          <span className="text-gray-700">Quantity</span>
          <input
            type="number"
            {...register("quantity", { required: true })}
            className="mt-2 p-2 border w-full rounded-md"
          />
        </label>

        {/* Delivery Method */}
        <div>
          <span className="text-gray-700">Order Delivery Fulfillment</span>
          <div className="mt-2 space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="self"
                {...register("deliveryMethod")}
                className="mr-2"
              />
              I will ship my order on my own
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="clothbuddy"
                {...register("deliveryMethod")}
                className="mr-2"
              />
              I will like ClothBuddy's Rider to ship my Product
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600"
        >
          List My Product
        </button>
      </form>
    </div>
  );
}
