import React from "react";
import GenresSection from "./GenresSection/GenresSection";
import TopChartSection from "./TopChartSection/TopChartSection";

function GenresAndTopChartSection() {
  return (
    <div className="d-flex">
      <div className="w-50 p-5">
        <GenresSection />
      </div>
      <div className="w-50 p-5">
        <TopChartSection />
      </div>
    </div>
  );
}

export default GenresAndTopChartSection;
