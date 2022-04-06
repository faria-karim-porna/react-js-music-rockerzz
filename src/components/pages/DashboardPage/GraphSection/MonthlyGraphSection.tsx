import React from "react";

function MonthlyGraphSection() {
  return (
    <div className="graph-card w-45 p-1">
      <div className="graph-border">
        <div className="graph-main d-flex justify-content-center align-items-center">
          <div id="curve_chart" className="w-90 h-90"></div>
        </div>
      </div>
    </div>
  );
}

export default MonthlyGraphSection;
