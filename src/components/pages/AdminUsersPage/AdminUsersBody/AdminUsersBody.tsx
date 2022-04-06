import React, { useEffect } from "react";
import AdminTable from "../../../common/AdminTable";
import CustomerTable from "../../../common/CustomerTable";

function AdminUsersBody() {
  // When the user clicks the button, open the modal
  const addAdminModalOpen = () => {
    (
      document.getElementsByClassName(
        "addAdminModal"
      ) as HTMLCollectionOf<HTMLElement>
    )[0].style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
//   (
//     document.getElementsByClassName(
//       "addAdminModal-close"
//     ) as HTMLCollectionOf<HTMLElement>
//   )[0].onclick = () => {
//     (
//       document.getElementsByClassName(
//         "addAdminModal"
//       ) as HTMLCollectionOf<HTMLElement>
//     )[0].style.display = "none";
//   };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    if (event.target == document.getElementsByClassName("addAdminModal")[0]) {
      (
        document.getElementsByClassName(
          "addAdminModal"
        ) as HTMLCollectionOf<HTMLElement>
      )[0].style.display = "none";
    }
  };

  return (
    <div className="dashboard-main">
      <div className="d-flex pl-5 pr-5 dashboard-tab-section">
        <div className="d-flex w-100">
          <div className="p-3 dashboard-tab">Users</div>
          <div className="p-3 dashboard-selected-tab">Admins</div>
          <div className="p-3 dashboard-tab">Customer</div>
          <div className="dashboard-tab-line"></div>
        </div>
      </div>

      <div className="pl-5 pr-5 mt-3 d-flex justify-content-between">
        <div className="users-search-section d-flex justify-content-center align-items-center">
          <div className="users-search-inner">
            <input type="text" className="users-search" />{" "}
            <i className="fa fa-search"></i>
          </div>
        </div>
        <div
          className="admin-buttons d-flex justify-content-center ml-3"
          onClick={() => addAdminModalOpen()}
        >
          <div className="admin-buttons-inner">Add Admin</div>
        </div>
      </div>
      <div className="pl-5 pr-5 mt-3">
        <AdminTable />
        <CustomerTable />
      </div>
    </div>
  );
}

export default AdminUsersBody;
