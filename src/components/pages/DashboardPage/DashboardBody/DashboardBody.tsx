import React from "react";
import MonthlyGraphSection from "../GraphSection/MonthlyGraphSection";
import YearlyGraphSection from "../GraphSection/YearlyGraphSection";
import WidgetSection from "../WidgetSection/WidgetSection";

function DashboardBody() {
  return (
    <div className="dashboard-main">
      <div className="pl-5 pr-5">
        <div className="d-flex w-100 justify-content-between">
          <div className="p-3">MUSIC STATUS DASHBOARD</div>
          <div className="p-3">Last Updated 10 minutes ago</div>
        </div>
        <div className="dashboard-tab-line w-100"></div>
      </div>
      <div className="dashboard-body my-3 mx-5 p-5">
        <WidgetSection />
        <div className="d-flex mt-5 justify-content-between">
          <MonthlyGraphSection />
          <YearlyGraphSection />
        </div>
      </div>
    </div>
  );
}

export default DashboardBody;
