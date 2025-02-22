"use client";

import { useState, useEffect } from "react";
import { FaBox, FaDollarSign, FaComments, FaHeartbeat, FaPlus, FaPhone, FaShoppingCart } from "react-icons/fa";
import Link from 'next/link'
const OverviewPage = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalEarnings: 0,
    buyerMessages: 0,
    accountHealth: 0,
    customerFeedback: 0,
  });

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/custom?_quantity=1")
      .then((res) => res.json())
      .then(() => {
        setStats({
          totalSales: Math.floor(Math.random() * 500),
          totalEarnings: Math.floor(Math.random() * 100000),
          buyerMessages: Math.floor(Math.random() * 200),
          accountHealth: Math.floor(Math.random() * 100),
          customerFeedback: Math.floor(Math.random() * 5) + 1,
        });
      });
  }, []);

  const statsData = [
    { label: "Total Sales", value: stats.totalSales, icon: <FaBox className="text-4xl text-blue-600" /> },
    { label: "Total Earnings", value: `$${stats.totalEarnings}`, icon: <FaDollarSign className="text-4xl text-green-600" /> },
    { label: "Buyer Messages", value: stats.buyerMessages, icon: <FaComments className="text-4xl text-purple-600" /> },
    { label: "Account Health", value: `${stats.accountHealth}%`, icon: <FaHeartbeat className="text-4xl text-red-600" /> },
    { label: "Customer Feedback", value: `${stats.customerFeedback} ⭐`, icon: <FaComments className="text-4xl text-orange-600" /> },
  ];

  return (
    <div className="bg-white text-gray-900 flex flex-col items-center p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">📊 Overview Dashboard</h1>

      <div className="flex flex-row flex-wrap lg:flex-nowrap justify-center gap-6 w-full max-w-6xl overflow-x-auto mb-8">
        {statsData.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-md flex items-center space-x-4 min-w-[200px]">
            {item.icon}
            <div>
              <p className="text-lg font-semibold">{item.label}</p>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Deposited Method</h2>
          ⚡Please add a deposit method
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto">
            <FaPlus className="mr-2" /> Add Deposit Method
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Action Needed</h2>
          ⚡Please add an Emergency Number
          <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto">
            <FaPhone className="mr-2" /> Add Emergency Number
          </button>
        </div>

        <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
          <h2 className="text-xl font-bold mb-4">Add Product Option</h2>
          Add more Product To Sell
          <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mx-auto">
            <FaShoppingCart className="mr-2" /><Link href="/AddProductForm">Add More Product</Link> 
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
