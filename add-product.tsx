import AddProductForm from "@/components/AddProductForm";
"use client";
export default function AddProductPage() {
  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Add a New Product</h1>
      <AddProductForm />
    </div>
  );
}
