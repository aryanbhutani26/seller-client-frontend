"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/dashboard/orders" },
  { name: "Settings", href: "/dashboard/settings" },
  { name: "Reports", href: "/dashboard/reports" },
  { name: "Analytics", href: "/dashboard/analytics" },
  { name: "Users", href: "/dashboard/users" },
  { name: "Support", href: "/dashboard/support" },
];

export default function Sidebar({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button className="lg:hidden p-4 absolute top-2 left-2 z-30" onClick={toggleSidebar}>
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-20 w-64 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static`}
      >
        <nav className="h-full flex flex-col p-4 space-y-4">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block p-3 text-gray-700 hover:bg-gray-200 rounded"
              onClick={toggleSidebar} // Close on mobile
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 lg:hidden" onClick={toggleSidebar}></div>}
    </>
  );
}
