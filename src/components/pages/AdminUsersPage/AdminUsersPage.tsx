import React from "react";
import HeaderBar from "../../common/HeaderBar";
import SideBar from "../../common/SideBar";
import AdminUsersBody from "./AdminUsersBody/AdminUsersBody";

function AdminUsersPage() {
  return (
    <div>
      <HeaderBar />
      <div className="d-flex">
        <SideBar />
        <AdminUsersBody />
      </div>
    </div>
  );
}

export default AdminUsersPage;
