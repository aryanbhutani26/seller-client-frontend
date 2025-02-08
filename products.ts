import { NextApiRequest, NextApiResponse } from "next";
"use client";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, price, category, description, image } = req.body;

    if (!name || !price || !category || !description || !image) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Here you can save the product to a database
    console.log("New Product Added:", req.body);

    return res.status(201).json({ message: "Product added successfully" });
  }

  return res.status(405).json({ message: "Method not allowed" });
}
