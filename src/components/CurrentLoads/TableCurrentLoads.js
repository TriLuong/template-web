import React from 'react';
import { Table } from 'reactstrap';

const TableCurrentLoads = ({ data }) => (
  <Table>
    <thead>
      <tr>
        <th>Load #</th>
        <th>Container #</th>
        <th>Reservation</th>
        <th>Appointment Time</th>
        <th>Return Rail</th>
        <th>Yard Pull</th>
        <th>#Drop/Hook empty dropped</th>
        <th>Loaded Container</th>
        <th>P/U Name</th>
        <th>Driver</th>
        <th>Rep</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <tr key={index}>
          <td>{item.load}</td>
          <td>{item.container}</td>
          <td>{item.reservation}</td>
          <td>{item.appointmentTime}</td>
          <td>{item.returnRail}</td>
          <td>{item.pull}</td>
          <td>{item.emptyDropped}</td>
          <td>{item.loadedRail}</td>
          <td>{item.puName}</td>
          <td>{item.driver}</td>
          <td>{item.rep}</td>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default TableCurrentLoads;
