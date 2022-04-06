import React from "react";

function AdminTable() {
  return (
    <table className="admins-table">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Role</th>
        <th className="d-flex justify-content-center">Actions</th>
      </tr>
      <tr>
        <td>Maria Anders</td>
        <td>maria@gmail.com</td>
        <td>01711111111</td>
        <td>Admin</td>
        <td>
          <div className="d-flex justify-content-center">
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Edit</div>
            </div>
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Delete</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Francisco Chang</td>
        <td>francisco@gmail.com</td>
        <td>01722222222</td>
        <td>Editor</td>
        <td>
          <div className="d-flex justify-content-center">
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Edit</div>
            </div>
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Delete</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Roland Mendel</td>
        <td>roland@gmail.com</td>
        <td>01733333333</td>
        <td>Moderator</td>
        <td>
          <div className="d-flex justify-content-center">
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Edit</div>
            </div>
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Delete</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Helen Bennett</td>
        <td>helen@gmail.com</td>
        <td>01811111111</td>
        <td>Admin</td>
        <td>
          <div className="d-flex justify-content-center">
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Edit</div>
            </div>
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Delete</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Yoshi Tannamuri</td>
        <td>yoshi@gmail.com</td>
        <td>01711111112</td>
        <td>Admin</td>
        <td>
          <div className="d-flex justify-content-center">
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Edit</div>
            </div>
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Delete</div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>Giovanni Rovelli</td>
        <td>giovanni@gmail.com</td>
        <td>01612121212</td>
        <td>Owner</td>
        <td>
          <div className="d-flex justify-content-center">
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Edit</div>
            </div>
            <div className="admin-buttons d-flex justify-content-center ml-3">
              <div className="admin-buttons-inner">Delete</div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  );
}

export default AdminTable;
