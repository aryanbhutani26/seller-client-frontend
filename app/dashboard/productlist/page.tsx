'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProductForm() {
  const [product, setProduct] = useState({
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

  const handleFileChange = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleColorChange = (color) => {
    setProduct((prev) => {
      const colors = prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors };
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 bg-gradient-to-br from-gray-100 to-gray-300 w-full">
      <div className="relative w-full h-52 bg-cover bg-center flex items-center justify-center text-white text-5xl font-bold rounded-md mb-8" style={{ backgroundImage: "url('/productlistimges.webp')" }}>
        List Your Products
      </div>
      
      <div className="w-full max-w-6xl bg-white p-8 shadow-xl rounded-lg border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <label className="block cursor-pointer border p-5 rounded-lg text-center bg-gray-100 hover:bg-gray-200 transition">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="border p-5 rounded-lg bg-gray-50">
            <p className="font-semibold mb-3">Color Available</p>
            {colorOptions.map((color) => (
              <label key={color.value} className="flex items-center space-x-3 py-1">
                <input
                  type="checkbox"
                  className="w-5 h-5 border-2 border-gray-400 rounded-lg cursor-pointer"
                  style={{ backgroundColor: product.colors.includes(color.value) ? color.hex : 'transparent' }}
                  onChange={() => handleColorChange(color.value)}
                  checked={product.colors.includes(color.value)}
                />
                <span>{color.name}</span>
              </label>
            ))}
          </div>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <input
            type="number"
            placeholder="₹ Price"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-400"
            value={product.quantity}
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          />
        </div>
        
        <p className="font-semibold mt-6">Order delivery fulfillment</p>
        <div className="flex flex-col mt-2">
          <label className="flex items-center space-x-3 py-1">
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
            <span>I want ClothBuddy's Rider to ship my Product</span>
          </label>
        </div>
        
        <button className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition text-lg font-semibold mt-6">
          Add Product
        </button>
      </div>
    </div>
  );
}
