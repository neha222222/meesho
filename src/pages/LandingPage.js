import React from "react";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FeaturedProducts from "../components/FeaturedProducts";

function LandingPage() {
  return (
    <div>
      <HeroSection />
      <HowItWorks />
      <FeaturedProducts />
    </div>
  );
}

export default LandingPage;
