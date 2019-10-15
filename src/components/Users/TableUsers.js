import React from 'react';
import { Table } from 'reactstrap';

const TableUsers = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>User Role</th>
        <th>Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>Cell</th>
        <th>Truck</th>
        <th>Availble(Y/N)</th>
        <th>Notes</th>
        <th>Edit Record</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.role}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.cell}</td>
          <td>{item.truck ? 'Yes' : 'No'}</td>
          <td>{item.availble ? 'Yes' : 'No'}</td>
          <td>{item.notes}</td>
          <td />
        </tr>
      ))}
    </tbody>
  </Table>
);

export default TableUsers;
