import React from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-tab d-flex align-items-center sidebar-tab-active">
        <div className="w-100">
          <div className="d-flex justify-content-center">
            <i className="fa fa-home sidebar-tab-icons sidebar-tab-active-text"></i>
          </div>
          <div className="sidebar-tab-texts text-center">Home</div>
        </div>
      </div>
      <div className="sidebar-tab d-flex align-items-center">
        <div className="w-100">
          <div className="d-flex justify-content-center">
            <i className="fa fa-music sidebar-tab-icons"></i>
          </div>
          <div className="sidebar-tab-texts text-center">Musics</div>
        </div>
      </div>
      <div className="sidebar-tab d-flex align-items-center">
        <div className="w-100">
          <div className="d-flex justify-content-center">
            <i className="fa fa-users sidebar-tab-icons"></i>
          </div>
          <div className="sidebar-tab-texts text-center">Users</div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
