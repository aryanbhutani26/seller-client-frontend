"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const Line = dynamic(() => import("react-chartjs-2").then((mod) => mod.Line), {
  ssr: false,
});
const Bar = dynamic(() => import("react-chartjs-2").then((mod) => mod.Bar), {
  ssr: false,
});

const ProductPerformance = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("2024");
  const [salesData, setSalesData] = useState([]);
  const [performanceData, setPerformanceData] = useState([]);

  // Fetch Products
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Fetch Sales & Performance Data Year-wise
  useEffect(() => {
    fetch(`https://fakerapi.it/api/v1/custom?_quantity=12&year=${year}`)
      .then((res) => res.json())
      .then((data) => {
        setSalesData(data.data.map(() => Math.floor(Math.random() * 1000)));
        setPerformanceData(data.data.map(() => Math.floor(Math.random() * 100)));
      });
  }, [year]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Product Performance Overview</h1>

      {/* Year Selection for Graphs */}
      <div className="mb-4">
        <label className="mr-2 text-lg">Select Year:</label>
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="text-black p-2 rounded-md"
        >
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Side - Product List */}
        <div className="w-full lg:w-1/3 bg-gray-900 p-4 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">All Products</h2>
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 mb-4 rounded-md text-black"
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul>
            {products
              .filter((product) =>
                product.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((product) => (
                <li
                  key={product.id}
                  className="flex items-center gap-4 bg-gray-800 p-3 rounded-lg mb-3"
                >
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium">{product.title}</p>
                    <p className="text-gray-400">${product.price}</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        {/* Right Side - Graphs */}
        <div className="w-full lg:w-2/3 flex flex-col gap-6">
          <div className="bg-gray-900 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Monthly Sales ({year})</h2>
            <Line
              data={{
                labels: [
                  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
                ],
                datasets: [
                  {
                    label: `Sales in ${year}`,
                    data: salesData,
                    borderColor: "rgb(241, 245, 245)",
                    tension: 0.4,
                  },
                ],
              }}
              options={{
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>

          <div className="bg-gray-900 p-4 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-3">Product Performance ({year})</h2>
            <Bar
              data={{
                labels: ["Product A", "Product B", "Product C", "Product D"],
                datasets: [
                  {
                    label: `Performance in ${year}`,
                    data: performanceData,
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                  },
                ],
              }}
              options={{
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPerformance;
