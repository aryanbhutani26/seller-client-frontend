"use client";

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { ChartOptions } from "chart.js";
import { MoreHorizontal, Search, User } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const chartData = {
  labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      data: [12, 11, 13, 9, 12, 11, 10, 13],
      backgroundColor: "#6A6A6A",
      borderRadius: 4,
    },
  ],
};
const chartOptions: ChartOptions<"bar"> = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value: number) => `₹ ${value}k`,
      },
    },
  },
};

type Order = {
  id: string;
  product: string;
  date: string;
  price: string;
  payment: string;
  status: string;
};
const orders: Order[] = [
  {
    id: "#2456JL",
    product: "Nike Sportswear",
    date: "Jan 12, 12:23 pm",
    price: "₹ 134.00",
    payment: "Transfer",
    status: "Processing",
  },
  {
    id: "#5435DF",
    product: "Acqua di Parma",
    date: "May 01, 01:13 pm",
    price: "₹ 23.00",
    payment: "Credit Card",
    status: "Completed",
  },
];

export default function Dashboard() {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => setLoading(true), []);
  return (
    <div className="min-h-screen bg-background p-4 md:p-6 max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          {isLoading && (
            <input
              placeholder="Search..."
              className="h-9 w-full md:w-auto rounded-md border pl-8 pr-4 text-sm"
            />
          )}
        </div>
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
      </div>

      <h1 className="text-2xl font-semibold text-center md:text-left">
        Welcome back, User!
      </h1>
      <p className="text-sm text-muted-foreground text-center md:text-left">
        Here's Your Current Sales Overview
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="p-6 bg-black text-white">
          <p>Net Profit</p>
          <h2 className="text-2xl font-bold">Rs. 7000000</h2>
        </Card>
        <Card className="p-6">
          <p>Product</p>
          <h2 className="text-2xl font-bold">2,107</h2>
        </Card>
        <Card className="p-6">
          <p>Customers</p>
          <h2 className="text-2xl font-bold">653</h2>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <h3 className="mb-5 font-semibold">Monthly Recurring Revenue</h3>
          <div className="h-[250px] sm:h-[300px]">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="mb-5 font-semibold">Top Selling Products</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-4 last:border-0"
              >
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 bg-muted" />
                  <p>PRODUCT {i}</p>
                </div>
                <span className="text-green-600">Available</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card>
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 gap-4">
          <h3 className="text-lg font-medium">Latest Orders</h3>
        </div>
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[800px]">
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className="whitespace-nowrap px-4">
                  Order Date
                </TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="text-sm">
                  <TableCell className="px-4">{order.id}</TableCell>
                  <TableCell className="px-4">{order.product}</TableCell>
                  <TableCell className="whitespace-nowrap px-4 text-center">
                    {order.date}
                  </TableCell>
                  <TableCell className="px-4">{order.price}</TableCell>
                  <TableCell className="px-4">{order.payment}</TableCell>
                  <TableCell
                    className={
                      order.status === "Completed"
                        ? "text-green-600 px-4"
                        : "text-blue-600 px-4"
                    }
                  >
                    {order.status}
                  </TableCell>
                  <TableCell className="px-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Download Invoice</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
