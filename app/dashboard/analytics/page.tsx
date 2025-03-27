"use client"
//import UnderDevelopmentCard from "@/components/ui/under-development-card";
import ProductPerformance from "@/components/Dashboard/ProductPerformance";
export default function SettingsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mt-20 sm:mt-12">Product Analytics</h1>
      <p className="mt-2 text-gray-600">Configure your preferences here.</p>
      <ProductPerformance/>
    
    </div>
  );
}
