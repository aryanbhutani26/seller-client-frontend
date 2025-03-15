"use client"
import React from 'react'
import Landing_Hero from "./landing-page-components/Landing_Hero";
import Landing_Nav from "./landing-page-components/Landing_Nav";
import Landing_Boxes from "./landing-page-components/Landing_Boxes";
import Landing_Footer from "./landing-page-components/Landing_Footer";
import Landing_Reviews from "./landing-page-components/Landing_Reviews";
function Landingpage() {
  return (
    <div>
          <Landing_Nav />
      <Landing_Hero />
      <Landing_Boxes />
      <Landing_Reviews />
      <Landing_Footer />
    </div>
  )
}

export default Landingpage