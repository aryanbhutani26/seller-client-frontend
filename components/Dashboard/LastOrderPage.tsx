"use client";

import { useState } from "react";
import { FaBoxOpen, FaRupeeSign } from "react-icons/fa";
import { IoPersonCircle, IoTimeOutline } from "react-icons/io5";

const LastOrdersPage = () => {
  const [orders] = useState([
    {
      id: "#1023",
      customer: "John Doe",
      amount: "$250.00",
      date: "Feb 18, 2025",
      status: "Delivered",
    },
    {
      id: "#1022",
      customer: "Emma Smith",
      amount: "$149.99",
      date: "Feb 17, 2025",
      status: "Pending",
    },
    {
      id: "#1021",
      customer: "Michael Brown",
      amount: "$320.00",
      date: "Feb 16, 2025",
      status: "Processing",
    },
    {
      id: "#1020",
      customer: "Sophia Johnson",
      amount: "$180.50",
      date: "Feb 15, 2025",
      status: "Delivered",
    },
  ]);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 text-black dark:text-white flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 transition-all duration-500 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 text-center">
        🛒 Last Orders
      </h1>

      {/* Orders List */}
      <div className="w-full max-w-7xl px-2 sm:px-4">
        {orders.map((order, index) => (
          <div
            key={index}
            className="group bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 p-4 sm:p-6 rounded-xl shadow-md flex flex-col sm:flex-row sm:justify-between items-center gap-4 sm:gap-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg mb-4"
          >
            {/* Order Details */}
            <div className="flex flex-wrap justify-between w-full">
              {/* Order ID */}
              <div className="flex items-center space-x-3 flex-1 min-w-[150px]">
                <FaBoxOpen className="text-xl sm:text-2xl md:text-3xl text-blue-500 group-hover:text-blue-600 transition-all" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Order ID</p>
                  <h2 className="text-sm sm:text-lg font-bold">{order.id}</h2>
                </div>
              </div>

              {/* Customer Name */}
              <div className="flex items-center space-x-3 flex-1 min-w-[150px]">
                <IoPersonCircle className="text-xl sm:text-2xl md:text-3xl text-green-500 group-hover:text-green-600 transition-all" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Customer</p>
                  <h2 className="text-sm sm:text-lg font-bold">{order.customer}</h2>
                </div>
              </div>

              {/* Order Amount */}
              <div className="flex items-center space-x-3 flex-1 min-w-[150px]">
                <FaRupeeSign className="text-xl sm:text-2xl md:text-3xl text-yellow-500 group-hover:text-yellow-600 transition-all" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Amount</p>
                  <h2 className="text-sm sm:text-lg font-bold">{order.amount}</h2>
                </div>
              </div>

              {/* Order Date */}
              <div className="flex items-center space-x-3 flex-1 min-w-[150px]">
                <IoTimeOutline className="text-xl sm:text-2xl md:text-3xl text-purple-500 group-hover:text-purple-600 transition-all" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-400">Date</p>
                  <h2 className="text-sm sm:text-lg font-bold">{order.date}</h2>
                </div>
              </div>
            </div>

            {/* Order Status */}
            <div
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-bold text-center ${
                order.status === "Delivered"
                  ? "bg-green-500 text-white"
                  : order.status === "Pending"
                  ? "bg-yellow-500 text-black"
                  : "bg-blue-500 text-white"
              }`}
            >
              {order.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LastOrdersPage;
