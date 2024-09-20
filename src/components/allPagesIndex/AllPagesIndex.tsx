import React from "react";
import LandingPage from "../LandingPage";
import HowItWorks from "../HowItWorks";
import Features from "../Features";
import Reviews from "../Reviews";
import Pricing from "../Pricing";
import FAQ from "../FAQ";
import { StickyBar, StickyLink } from "../LandingPageStyles";

const AllPagesIndex = () => {
  return (
    <div>
    
      <LandingPage/>
      <HowItWorks />
      <Features />
      <Reviews />
      <Pricing />
      <FAQ />
    </div>
  );
};

export default AllPagesIndex;
