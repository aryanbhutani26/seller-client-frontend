"use client"
import OverviewPage from "@/components/Dashboard/OverView";
import ProductPerformance from "@/components/Dashboard/ProductPerformance";
export default function DashboardPage() {
  return (
    <>
     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <OverviewPage/>
      <ProductPerformance/>
    </div>
    </>
  );
}
