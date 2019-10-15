import React from 'react';
import { Button } from 'reactstrap';
import TableUsers from './TableUsers';
import './styles.scss';

const Users = ({ data, toggle }) => (
  <div>
    <div className="btnAddContainer">
      <Button color="success" className="btnAdd" onClick={toggle}>
        +
      </Button>
    </div>
    <TableUsers data={data} />
  </div>
);

export default Users;
