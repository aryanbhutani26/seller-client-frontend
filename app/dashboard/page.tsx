"use client";

import OverView from "@/app/components/Dashboard/OverView";
import ProductPerformance from "@/app/components/Dashboard/ProductPerformance";
import NavBar from "../components/Dashboard/NavBar";

export default function DashboardPage() {
  return (
    <div>
      <NavBar />
      <OverView />
      <ProductPerformance />
    </div>
  );
}
