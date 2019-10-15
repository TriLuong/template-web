import React from 'react';
import { Button } from 'reactstrap';
import TableUsers from './TableUsers';
import ModalUsers from './ModalUsers';
import './styles.scss';

const Users = ({ data, visibleModal, toggle, onSubmit, onEdit, user }) => (
  <div>
    <div className="btnAddContainer">
      <Button color="success" className="btnAdd" onClick={toggle}>
        +
      </Button>
    </div>
    <TableUsers data={data} onEdit={onEdit} />
    <ModalUsers
      title="ADD USER"
      visibleModal={visibleModal}
      toggle={toggle}
      onSubmit={onSubmit}
      user={user}
    />
  </div>
);

export default Users;
