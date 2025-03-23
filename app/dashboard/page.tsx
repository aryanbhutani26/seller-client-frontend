"use client"
import OverviewPage from "@/components/Dashboard/OverView";
import ProductPerformance from "@/components/Dashboard/ProductPerformance";


// Use the imported components or remove them
export default function DashboardPage() {
  return (
    <div>
      <OverviewPage />
      <ProductPerformance />
    </div>
  );
}
