import React from "react";

function CustomerTable() {
  return (
    <table className="customer-table">
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Downloads</th>
      </tr>
      <tr>
        <td>Maria Anders</td>
        <td>maria@gmail.com</td>
        <td>01711111111</td>
        <td>1000+</td>
      </tr>
      <tr>
        <td>Francisco Chang</td>
        <td>francisco@gmail.com</td>
        <td>01722222222</td>
        <td>1000+</td>
      </tr>
      <tr>
        <td>Roland Mendel</td>
        <td>roland@gmail.com</td>
        <td>01733333333</td>
        <td>1000+</td>
      </tr>
      <tr>
        <td>Helen Bennett</td>
        <td>helen@gmail.com</td>
        <td>01811111111</td>
        <td>1000+</td>
      </tr>
      <tr>
        <td>Yoshi Tannamuri</td>
        <td>yoshi@gmail.com</td>
        <td>01711111112</td>
        <td>1000+</td>
      </tr>
      <tr>
        <td>Giovanni Rovelli</td>
        <td>giovanni@gmail.com</td>
        <td>01612121212</td>
        <td>1000+</td>
      </tr>
    </table>
  );
}

export default CustomerTable;
