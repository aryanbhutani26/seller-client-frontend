'use client';
<<<<<<< HEAD

import { useState } from 'react';

interface ProductType {
  name: string;
  description: string;
  colors: string[];
  otherColor: string;
  price: string;
  quantity: string;
  delivery: 'self' | 'rider';
  image: File | null;
}

export default function ProductForm() {
  const [product, setProduct] = useState<ProductType>({
=======
import { useState } from 'react';
import Image from 'next/image';

export default function ProductForm() {
  const [product, setProduct] = useState<{
    name: string;
    description: string;
    colors: string[];
    otherColor: string;
    price: number | '';
    quantity: number | '';
    delivery: string;
    image: File | null;
  }>({
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
    name: '',
    description: '',
    colors: [],
    otherColor: '',
    price: '',
    quantity: '',
    delivery: 'self',
    image: null,
  });

  const colorOptions = [
    { name: 'Red', value: 'red', hex: '#FF0000' },
    { name: 'Black', value: 'black', hex: '#000000' },
    { name: 'Blue', value: 'blue', hex: '#0000FF' },
    { name: 'Purple', value: 'purple', hex: '#800080' },
  ];

<<<<<<< HEAD
=======
  // File Input Handler
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setProduct({ ...product, image: e.target.files[0] });
    }
  };

<<<<<<< HEAD
=======
  // Color Selection Handler
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
  const handleColorChange = (color: string) => {
    setProduct((prev) => {
      const colors = prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors };
    });
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-gradient-to-br from-gray-100 to-gray-300 w-full mt-5">
      <div
        className="relative w-full h-52 bg-cover bg-center flex items-center justify-center text-white text-5xl font-bold rounded-md mb-8"
=======
<<<<<<<< HEAD:app/productlist/page.tsx
    <div className="min-h-screen flex flex-col items-center px-4 py-8 bg-gradient-to-br from-gray-200 to-gray-500">
      <header className="w-full max-w-4xl flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-4">
        <h1 className="text-xl font-bold">ClothBuddy</h1>
        <div>
          <Image src="/logoaccounticon.png" alt="My Account" width={30} height={30} className="cursor-pointer" />
          <h1 className="text-x1 font-bold">My Account</h1>
        </div>
      </header>

      <div
        className="relative w-full max-w-4xl h-44 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold rounded-md mb-6"
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
        style={{ backgroundImage: "url('/productlistimges.webp')" }}
      >
        List Your Products
      </div>

<<<<<<< HEAD
      <div className="w-full max-w-6xl bg-white p-8 shadow-xl rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block cursor-pointer border p-5 rounded-lg text-center bg-gray-100 hover:bg-gray-200 transition">
=======
      <div className="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block cursor-pointer border p-4 rounded-md text-center">
========
    <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-gradient-to-br from-gray-100 to-gray-300 w-full">
      <div className="relative w-full h-52 bg-cover bg-center flex items-center justify-center text-white text-5xl font-bold rounded-md mb-8" style={{ backgroundImage: "url('/productlistimges.webp')" }}>
        List Your Products
      </div>
      
      <div className="w-full max-w-6xl bg-white p-8 shadow-xl rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block cursor-pointer border p-5 rounded-lg text-center bg-gray-100 hover:bg-gray-200 transition">
>>>>>>>> f2045e295a734ffa12408c9571261a30ec357454:app/dashboard/productlist/page.tsx
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
            <input type="file" className="hidden" onChange={handleFileChange} />
            <p className="text-gray-700 font-semibold">Upload Photo of Product</p>
          </label>

          <input
            type="text"
            placeholder="Name of the product"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>

        <textarea
          placeholder="Product description"
          className="w-full p-3 border rounded-lg mt-6 bg-gray-50 focus:ring-2 focus:ring-blue-400"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        ></textarea>
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border p-5 rounded-lg bg-gray-50">
            <p className="font-semibold mb-3">Color Available</p>
=======
<<<<<<<< HEAD:app/productlist/page.tsx

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="border p-4 rounded-md">
            <p className="font-medium">Color Available</p>
========
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border p-5 rounded-lg bg-gray-50">
            <p className="font-semibold mb-3">Color Available</p>
>>>>>>>> f2045e295a734ffa12408c9571261a30ec357454:app/dashboard/productlist/page.tsx
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
            {colorOptions.map((color) => (
              <label key={color.value} className="flex items-center space-x-3 py-1">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-gray-400 rounded-lg cursor-pointer"
<<<<<<< HEAD
                  style={{
                    backgroundColor: product.colors.includes(color.value) ? color.hex : 'transparent',
                  }}
=======
                  style={{ backgroundColor: product.colors.includes(color.value) ? color.hex : 'transparent' }}
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
                  onChange={() => handleColorChange(color.value)}
                  checked={product.colors.includes(color.value)}
                />
                <span>{color.name}</span>
              </label>
            ))}
          </div>
<<<<<<< HEAD

=======
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
          <div className="border p-5 rounded-lg bg-gray-50">
            <p className="font-semibold mb-3">Other Color</p>
            <input
              type="text"
              placeholder="Enter custom color"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
              value={product.otherColor}
              onChange={(e) => setProduct({ ...product, otherColor: e.target.value })}
            />
          </div>
        </div>
<<<<<<< HEAD

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
=======
<<<<<<<< HEAD:app/productlist/page.tsx

        <div className="grid grid-cols-2 gap-4 mt-4">
========
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
>>>>>>>> f2045e295a734ffa12408c9571261a30ec357454:app/dashboard/productlist/page.tsx
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
          <input
            type="number"
            placeholder="₹ Price"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400"
            value={product.price}
<<<<<<< HEAD
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
=======
            onChange={(e) => setProduct({ ...product, price: e.target.value === '' ? '' : Number(e.target.value) })}
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
          />
          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400"
            value={product.quantity}
<<<<<<< HEAD
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          />
        </div>

        <p className="font-semibold mt-6">Order delivery fulfillment</p>
        <div className="flex flex-col mt-2">
          <label className="flex items-center space-x-3 py-1">
=======
            onChange={(e) => setProduct({ ...product, quantity: e.target.value === '' ? '' : Number(e.target.value) })}
          />
        </div>
<<<<<<<< HEAD:app/productlist/page.tsx

        <p className="font-medium mt-4">Order delivery fulfillment</p>
        <div className="flex flex-col mb-4">
          <label className="flex items-center space-x-2">
========
        
        <p className="font-semibold mt-6">Order delivery fulfillment</p>
        <div className="flex flex-col mt-2">
          <label className="flex items-center space-x-3 py-1">
>>>>>>>> f2045e295a734ffa12408c9571261a30ec357454:app/dashboard/productlist/page.tsx
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
            <input
              type="radio"
              name="delivery"
              value="self"
              className="w-5 h-5"
              checked={product.delivery === 'self'}
              onChange={() => setProduct({ ...product, delivery: 'self' })}
            />
            <span>I will ship my order on my own</span>
          </label>
          <label className="flex items-center space-x-3 py-1">
            <input
              type="radio"
              name="delivery"
              value="rider"
              className="w-5 h-5"
              checked={product.delivery === 'rider'}
              onChange={() => setProduct({ ...product, delivery: 'rider' })}
            />
<<<<<<< HEAD
            <span>I want ClothBuddy&apos;s Rider to ship my Product</span>
          </label>
        </div>

        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold mt-6">
=======
<<<<<<<< HEAD:app/productlist/page.tsx
            <span>I would like ClothBuddy&apos;s Rider to ship my Product</span>
          </label>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 text-lg font-semibold">
========
            <span>I want ClothBuddy's Rider to ship my Product</span>
          </label>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold mt-6">
>>>>>>>> f2045e295a734ffa12408c9571261a30ec357454:app/dashboard/productlist/page.tsx
>>>>>>> f2045e295a734ffa12408c9571261a30ec357454
          Add Product
        </button>
      </div>
    </div>
  );
}
