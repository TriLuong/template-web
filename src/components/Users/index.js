import React from 'react';
import { Button } from 'reactstrap';
import TableUsers from './TableUsers';
import ModalUsers from './ModalUsers';
import './styles.scss';

const Users = ({ data, visibleModal, toggle, onSubmit }) => (
  <div>
    <div className="btnAddContainer">
      <Button color="success" className="btnAdd" onClick={toggle}>
        +
      </Button>
    </div>
    <TableUsers data={data} />
    <ModalUsers
      title="ADD USER"
      visibleModal={visibleModal}
      toggle={toggle}
      onSubmit={onSubmit}
    />
  </div>
);

export default Users;
