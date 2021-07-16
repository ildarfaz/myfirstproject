import React from "react";
import "./Table.css";
function Table({ users }) {

  return (
    <table id="table1">
      <thead>
        <tr>
          <th>
            <input type="checkbox" />
          </th>
          <th>Name</th>
          <th>Email</th>
          <th>Company name</th>
          <th>City</th>
          <th>Street</th>
          <th>website</th>
        </tr>
      </thead>
      <tbody>
        {users&&
          users.map(user => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td> {user.name}</td>
              <td> {user.email}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
              <td>{user.address.street}</td>
              <td>{user.website}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
export default Table;
