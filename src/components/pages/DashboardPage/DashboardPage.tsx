import React from "react";
import HeaderBar from "../../common/HeaderBar";
import SideBar from "../../common/SideBar";
import DashboardBody from "./DashboardBody/DashboardBody";

function DashboardPage() {
  return (
    <div>
      <HeaderBar />
      <div className="d-flex">
        <SideBar />
        <DashboardBody />
      </div>
    </div>
  );
}

export default DashboardPage;
