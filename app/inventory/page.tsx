"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Search,
  Menu,
  ChevronDown,
  Package,
  Home,
  ShoppingBag,
  FileText,
  DollarSign,
  TrendingUp,
  BarChart2,
  MessageSquare,
  HelpCircle,
  Mic,
} from "lucide-react";

// Define types
type SizeKey = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";

type Product = {
  id: number;
  name: string;
  image: string;
  sizes: SizeKey[];
  quantities: Record<SizeKey, number>;
  prices: Record<SizeKey, number>;
  colors: string[]; // New field for colors
};

interface NavItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  active?: boolean;
}

export default function InventoryPage() {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoading(true)); // Simulate loading state
  }, []);

  // Navigation items for the sidebar
  const navItems: NavItem[] = [
    { name: "Overview", icon: Home, href: "#" },
    { name: "Products", icon: Package, href: "#" },
    { name: "Inventory", icon: ShoppingBag, href: "#", active: true },
    { name: "Orders", icon: FileText, href: "#" },
    { name: "Pricing", icon: DollarSign, href: "#" },
    { name: "Growth", icon: TrendingUp, href: "#" },
    { name: "Performance", icon: BarChart2, href: "/performancePage" },
    { name: "Feedback", icon: MessageSquare, href: "#" },
    { name: "Help & Support", icon: HelpCircle, href: "#" },
  ];

  // Product data
  const products: Product[] = [
    {
      id: 1,
      name: "Product 1",
      image: "/men.png",
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      quantities: {
        XS: 157,
        S: 157,
        M: 157,
        L: 157,
        XL: 157,
        XXL: 157,
        XXXL: 157,
      },
      prices: { XS: 250, S: 250, M: 250, L: 250, XL: 250, XXL: 250, XXXL: 250 },
      colors: ["red", "blue", "green"],
    },
    {
      id: 2,
      name: "Product 2",
      image: "/men.png",
      sizes: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
      quantities: {
        XS: 157,
        S: 157,
        M: 157,
        L: 157,
        XL: 157,
        XXL: 157,
        XXXL: 157,
      },
      prices: { XS: 250, S: 250, M: 250, L: 250, XL: 250, XXL: 250, XXXL: 250 },
      colors: ["black", "white", "yellow"],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center px-6">
          <h1 className="text-2xl font-bold">ClothBuddy</h1>
        </div>

        {/* Navigation */}
        <nav className="mt-4 px-3">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center rounded-md px-3 py-3 text-sm border-black focus:border-2 focus:font-semibold ${
                    item.active
                      ? "border border-gray-800 font-medium"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        {/* Top header */}
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 lg:px-6">
          {/* Mobile menu button */}
          <button
            className="rounded-md p-1 lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>

          {/* Search */}
          <div className="relative ml-4 flex flex-1 max-w-md">
            <div className="relative w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              {loading && (
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Search..."
                />
              )}
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <Mic className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>

          {/* User profile */}
          <div className="ml-4 flex items-center">
            <div className="relative">
              <button className="flex items-center space-x-2 rounded-full">
                <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=32&width=32"
                    alt="User avatar"
                    width={32}
                    height={32}
                  />
                </div>
                <span className="hidden text-sm font-medium text-gray-700 md:block">
                  User name
                </span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="bg-white">
          {/* Products */}
          <div className="p-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="mb-10 border-2 border-gray-200 rounded-lg p-5 shadow"
              >
                {/* Product name */}
                <h1 className="text-2xl font-semibold">{product.name}</h1>

                <div className="md:flex justify-evenly">
                  <div className="flex items-center justify-center p-4 md:w-48">
                    {/* Product Image */}
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="h-32 w-32 object-cover"
                    />
                  </div>

                  {/* Product Details Table */}
                  <table className="w-full md:w-1/2 text-center border-2 border-gray-300">
                    <thead className="bg-gray-200 border-2 border-black">
                      <tr>
                        <th className="border-r-2 border-black">Size</th>
                        <th className="border-r-2 border-black">Price</th>
                        <th className="border-r-2 border-black">Quantity</th>
                        <th>Colors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizes.map((size) => (
                        <tr key={size}>
                          <td className="border-2 border-black">{size}</td>
                          <td className="border-2 border-black">
                            {product.prices[size]}
                          </td>
                          <td className="border-2 border-black">
                            {product.quantities[size]}
                          </td>
                          <td className="border-2 border-black">
                            <div className="flex justify-center space-x-1">
                              {product.colors.map((color, index) => (
                                <span
                                  key={index}
                                  className="inline-block h-4 w-4 rounded-full"
                                  style={{ backgroundColor: color }}
                                ></span>
                              ))}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
