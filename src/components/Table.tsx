import React, { FC } from "react";
import "./Table.css";
import { IUsers } from "./pages/Main";
export const Table = (props: { users: IUsers[] }) => {
  return (
    <table>
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
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {props.users &&
          props.users.map((user) => (
            <tr key={user.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{user.name}</td>
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
};
