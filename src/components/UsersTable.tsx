import React, { FC } from "react"
import "./UsersTable.css"
import { IUser } from "./types/User"
import { IUsers } from "./types/User"
export const UsersTable = ({users}:IUsers) => {
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
        {users &&
          users.map((user:IUser) => (
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
  )
}
