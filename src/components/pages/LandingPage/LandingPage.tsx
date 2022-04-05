import React from "react";
import CircularSection from "./CircularSection/CircularSection";
import ComingSoonSection from "./ComingSoonSection/ComingSoonSection";
import GenresAndTopChartSection from "./GenresAndTopChartSection/GenresAndTopChartSection";

import HeaderSection from "./HeaderSection/HeaderSection";
import PopularArtistsSection from "./PopularArtistsSection/PopularArtistsSection";
import HeaderBar from "../../common/HeaderBar";

function LandingPage() {
  return (
    <div>
      <HeaderBar />
      <HeaderSection />
      <CircularSection />
      <ComingSoonSection />
      <PopularArtistsSection />
      <GenresAndTopChartSection />
    </div>
  );
}

export default LandingPage;
