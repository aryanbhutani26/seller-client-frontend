"use client";

import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  User,
  Settings,
  Package,
  BarChart3,
  Users,
  LifeBuoy,
  ClipboardList,
  X,
  MessageSquareMore,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: <BarChart3 size={22} className="text-blue-500" /> },
  { name: "Orders", href: "/dashboard/orders", icon: <ClipboardList size={22} className="text-green-500" /> },
  { name: "Products", href: "/dashboard/products", icon: <ShoppingCart size={22} className="text-green-500" /> },
  { name: "Settings", href: "/dashboard/settings", icon: <Settings size={22} className="text-gray-500" /> },
  { name: "Reports", href: "/dashboard/reports", icon: <Package size={22} className="text-yellow-500" /> },
  { name: "Analytics", href: "/dashboard/analytics", icon: <BarChart3 size={22} className="text-indigo-500" /> },
  { name: "Feedback", href: "/dashboard/feedback", icon: <MessageSquareMore size={22} className="text-pink-500" /> },
  { name: "Support", href: "/dashboard/support", icon: <LifeBuoy size={22} className="text-red-500" /> },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 py-4 px-6 flex items-center justify-between">
        {/* Sidebar Toggle Button */}
        <button className="text-gray-700 hover:bg-gray-200 p-2 rounded-lg transition" onClick={toggleSidebar}>
          <Menu size={26} />
        </button>

        {/* Brand Name */}
        <h1 className="text-2xl font-semibold tracking-wide text-gray-800">ClothBuddy</h1>

        {/* Search Bar */}
        <div className="relative flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white/80 backdrop-blur-md shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={18} className="absolute left-4 top-3 text-gray-500" />
        </div>

        {/* Icons - Notifications & Profile */}
        <div className="flex items-center space-x-4">
          <button className="relative text-gray-700 hover:text-blue-600 transition">
            <Bell size={22} />
          </button>
          <button className="text-gray-700 hover:text-blue-600 transition">
            <User size={22} />
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white/90 backdrop-blur-lg shadow-xl z-40 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } rounded-r-xl overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
          <button className="text-gray-700 hover:bg-gray-200 p-2 rounded-lg transition" onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Search (Optional) */}
        <div className="p-4">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 shadow-inner">
            <Search size={18} className="text-gray-500" />
            <input
              type="text"
              placeholder="Search menu..."
              className="bg-transparent focus:outline-none ml-2 text-sm w-full"
            />
          </div>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-2 p-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-200 hover:scale-105 rounded-lg transition-all duration-200"
              onClick={closeSidebar}
            >
              {item.icon}
              <span className="text-lg">{item.name}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for when sidebar is open */}
      {isOpen && <div className="fixed inset-0 bg-black/40" onClick={closeSidebar}></div>}
    </div>
  );
}
