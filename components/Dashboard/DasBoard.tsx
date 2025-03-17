import React from 'react'
import Overview from "./OverView"
import ProductPerformance from './ProductPerformance'
import Link from 'next/link'

function DasBoard() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <div className="container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-semibold mb-8 text-gray-800">
          Dashboard
        </h1> */}
        <Overview/>
        <ProductPerformance/>
      </div>

      {/* Floating Action Button */}
      <Link 
        href="/dashboard/add-product" 
        className="fixed bottom-8 right-8 bg-[#3E54C8] hover:bg-[#2A3B9F] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M12 4v16m8-8H4" 
          />
        </svg>
        <span className="font-medium">Add a new product</span>
      </Link>
    </div>
  )
}

export default DasBoard