import React from "react";

function YearlyGraphSection() {
  return (
    <div className="graph-card w-45 p-1">
      <div className="graph-border">
        <div className="graph-main d-flex justify-content-center align-items-center">
          <div id="columnchart_material" className="w-80 h-80"></div>
        </div>
      </div>
    </div>
  );
}

export default YearlyGraphSection;
