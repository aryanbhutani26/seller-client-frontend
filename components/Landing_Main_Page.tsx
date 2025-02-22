import React from "react";
import Landing_Nav from "./landing-page-components/Landing_Nav";
import Landing_Hero from "./landing-page-components/Landing_Hero";
import Landing_Reviews from "./landing-page-components/Landing_Reviews";
import Landing_Footer from "./landing-page-components/Landing_Footer";
import Boxes from "./landing-page-components/Landing_Boxes";
const Landing = () => {
  return (
    <div>
      <Landing_Nav />
      <Landing_Hero />
      <Boxes />
      <Landing_Reviews />
      <Landing_Footer />
    </div>
  );
};

export default Landing;
