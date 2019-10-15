import React from 'react';
import { Button } from 'reactstrap';
import TableCurrentLoads from './TableCurrentLoads';
import ModalCurrentLoads from './ModalCurrentLoads';
import './styles.scss';

const CurrentLoads = ({ data, onSubmit, visibleModal, toggle }) => (
  <div>
    <div className="btnAddContainer">
      <Button color="success" className="btnAdd" onClick={toggle}>
        +
      </Button>
    </div>
    <TableCurrentLoads data={data} />
    <ModalCurrentLoads
      visibleModal={visibleModal}
      toggle={toggle}
      title="ADD LOADS"
      onSubmit={onSubmit}
    />
  </div>
);

export default CurrentLoads;
