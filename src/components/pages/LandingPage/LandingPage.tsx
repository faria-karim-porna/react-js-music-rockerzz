import React from "react";
import CircularSection from "./CircularSection/CircularSection";
import ComingSoonSection from "./ComingSoonSection/ComingSoonSection";
import HeaderBar from "./HeaderBar/HeaderBar";
import HeaderSection from "./HeaderSection/HeaderSection";

function LandingPage() {
  return (
    <div>
      <HeaderBar />
      <HeaderSection />
      <CircularSection />
      <ComingSoonSection />
    </div>
  );
}

export default LandingPage;
