"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import "chart.js/auto";
import { FaBox, } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { FaRupeeSign } from "react-icons/fa";
// Dynamically import Bar Chart to prevent SSR issues
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const OverviewPage = () => {
  const [stats] = useState({
    customer: 320,
    netProfit: 75800,
    product: 12000,
  });

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white flex flex-col items-center p-8 transition-all duration-500 ">
      {/* Welcome Message */}
      <div className="text-left w-full max-w-4xl mb-6">
        <h2 className="text-4xl font-extrabold  bg-clip-text animate-fade-in">
          👋 Welcome back, User
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-1 opacity-90">
          Here's your latest sales overview...
        </p>
      </div>

      {/* Main Heading */}
      <h1 className="text-5xl font-extrabold mb-10  bg-clip-text animate-fade-in">
       Overview Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Total Products Sold */}
        <div className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 p-6 rounded-3xl shadow-xl flex items-center space-x-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <FaBox className="text-5xl text-blue-500 transition-all duration-500 group-hover:text-blue-600" />
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Total Products Sold
            </p>
            <h2 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
              {stats.product}
            </h2>
          </div>
        </div>

        {/* Net Profit */}
        <div className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 p-6 rounded-3xl shadow-xl flex items-center space-x-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <FaRupeeSign className="text-5xl text-green-500 transition-all duration-500 group-hover:text-green-600" />
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Net Profit
            </p>
            <h2 className="text-4xl font-extrabold text-green-700 dark:text-green-400">
              ${stats.netProfit}
            </h2>
          </div>
        </div>

        {/* Total Customers */}
        <div className="relative group bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border border-gray-300 dark:border-gray-700 p-6 rounded-3xl shadow-xl flex items-center space-x-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br from-white to-gray-200 dark:from-gray-800 dark:to-gray-700">
          <IoPeople className="text-5xl text-yellow-500 transition-all duration-500 group-hover:text-yellow-600" />
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Total Customers
            </p>
            <h2 className="text-4xl font-extrabold text-yellow-700 dark:text-yellow-400">
              {stats.customer}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewPage;
