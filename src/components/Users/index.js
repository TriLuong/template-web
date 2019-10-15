import React from 'react';
import { Button } from 'reactstrap';
import { InputSelect } from 'components/common/Input';
import { optionRoleFilter } from 'pages/Home/constants';
import TableUsers from './TableUsers';
import ModalUsers from './ModalUsers';
import './styles.scss';

const Users = ({
  data,
  visibleModal,
  toggle,
  onSubmit,
  onEdit,
  user,
  title,
  handleChangeFilter,
}) => (
  <div>
    <div className="btnAddContainer">
      <div className="fitlerUser">
        <InputSelect
          label=""
          name="availble"
          option={optionRoleFilter}
          value="all"
          onChange={handleChangeFilter}
        />
      </div>
      <Button color="success" className="btnAdd" onClick={toggle}>
        +
      </Button>
    </div>
    <TableUsers data={data} onEdit={onEdit} />
    <ModalUsers
      title={title}
      visibleModal={visibleModal}
      toggle={toggle}
      onSubmit={onSubmit}
      user={user}
    />
  </div>
);

export default Users;
