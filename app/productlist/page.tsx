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
<div className="min-h-screen flex flex-col items-center px-4 py-8 bg-gradient-to-br from-gray-200 to-gray-500">
          <header className="w-full max-w-4xl flex justify-between items-center p-4 bg-white shadow-md rounded-md mb-4">
        <h1 className="text-xl font-bold">ClothBuddy</h1>
        <div>  <Image src="/logoaccounticon.png" alt="My Account" width={30} height={30} className="cursor-pointer "  />
        <h1 className='text-x1 font-bold'>My Account</h1></div>
        {/* <Image src="/logoaccounticon.png" alt="My Account" width={30} height={30} className="cursor-pointer" />
        <h4 className='text-x1 font-bold'>my accout</h4> */}
      </header>
      
      <div className="relative w-full max-w-4xl h-44 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold rounded-md mb-6" style={{ backgroundImage: "url('/productlistimges.webp')" }}>
        List Your Products
      </div>
      
      <div className="w-full max-w-4xl bg-white p-6 shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block cursor-pointer border p-4 rounded-md text-center">
            <input type="file" className="hidden" onChange={handleFileChange} />
            <p className="text-gray-600">Upload Photo of Product</p>
          </label>
          
          <input
            type="text"
            placeholder="Name of the product"
            className="w-full p-2 border rounded-md"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </div>
        
        <textarea
          placeholder="Product description"
          className="w-full p-2 border rounded-md mt-4"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
        ></textarea>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="border p-4 rounded-md">
            <p className="font-medium">Color Available</p>
            {colorOptions.map((color) => (
              <label key={color.value} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="w-6 h-6 appearance-none border-2 border-gray-400 rounded-md cursor-pointer"
                  style={{ backgroundColor: product.colors.includes(color.value) ? color.hex : 'transparent' }}
                  onChange={() => handleColorChange(color.value)}
                  checked={product.colors.includes(color.value)}
                />
                <span>{color.name}</span>
              </label>
            ))}
          </div>
          <div className="border p-4 rounded-md">
            <p className="font-medium">Others</p>
            <input
              type="text"
              placeholder="Place color picker here"
              className="w-full p-2 border rounded-md"
              value={product.otherColor}
              onChange={(e) => setProduct({ ...product, otherColor: e.target.value })}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="number"
            placeholder="₹ Price"
            className="w-full p-2 border rounded-md"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <input
            type="number"
            placeholder="Quantity"
            className="w-full p-2 border rounded-md"
            value={product.quantity}
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
          />
        </div>
        
        <p className="font-medium mt-4">Order delivery fulfillment</p>
        <div className="flex flex-col mb-4">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="delivery"
              value="self"
              className="w-4 h-4"
              checked={product.delivery === 'self'}
              onChange={() => setProduct({ ...product, delivery: 'self' })}
            />
            <span>I will ship my order on my own</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="delivery"
              value="rider"
              className="w-4 h-4"
              checked={product.delivery === 'rider'}
              onChange={() => setProduct({ ...product, delivery: 'rider' })}
            />
            <span>I will like ClothBuddy's Rider to ship my Product</span>
          </label>
        </div>
        
        <button className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 text-lg font-semibold">
          Add Product
        </button>
      </div>
    </div>
  );
}
