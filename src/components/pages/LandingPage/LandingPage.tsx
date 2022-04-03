import React from "react";
import CircularSection from "./CircularSection/CircularSection";
import HeaderBar from "./HeaderBar/HeaderBar";
import HeaderSection from "./HeaderSection/HeaderSection";

function LandingPage() {
  return (
    <div>
      <HeaderBar />
      <HeaderSection />
      <CircularSection />
    </div>
  );
}

export default LandingPage;
