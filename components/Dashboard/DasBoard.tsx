import React from 'react'
import Overview from "./OverView"
import ProductPerformance from './ProductPerformance'
function DasBoard() {
  return (
    <>
    <div className="container">
      <Overview/>
      <ProductPerformance/>
    </div>
    </>
  )
}

export default DasBoard