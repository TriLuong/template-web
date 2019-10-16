import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as getReducer from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { Button } from 'reactstrap';
import { InputSelect } from 'components/common/Input';
import { optionRoleFilter } from 'pages/Home/constants';
import TableUsers from 'components/Users/TableUsers';
import ModalUsers from 'components/Users/ModalUsers';
import './styles.scss';

class Users extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalUser: false,
      isEditUser: false,
    };
  }

  componentDidMount() {
    const { doGetUsers } = this.props;
    doGetUsers();
  }

  setItemSelected = item => {
    this.setState({ itemSelected: item });
  };

  onSubmitUser = values => {
    const { doAddUser, doEditUser } = this.props;
    const { isEditUser } = this.state;
    if (!isEditUser) {
      doAddUser(values);
    } else {
      doEditUser(values);
    }
    this.setState({ isEditUser: false });
    this.toggleUsers();
  };

  toggleUsers = () => {
    const { modalUser } = this.state;
    const newModalUser = !modalUser;
    if (!newModalUser) {
      this.setState({ isEditUser: false });
    }
    this.setState({ modalUser: newModalUser });
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      visibleSidebar: !prevState.visibleSidebar,
    }));
  };

  EditUser = id => {
    const { doGetUser } = this.props;
    this.setState({ isEditUser: true });
    doGetUser({ id });
    this.toggleUsers();
  };

  handleChangeFilter = event => {
    const { doFilterUsers } = this.props;
    const { value } = event.target;
    doFilterUsers({ role: value });
  };

  render() {
    const { users, user } = this.props;

    const { modalUser, isEditUser } = this.state;
    return (
      <div>
        <div className="btnAddContainer">
          <div className="fitlerUser">
            <InputSelect
              label=""
              name="availble"
              option={optionRoleFilter}
              value="all"
              onChange={this.handleChangeFilter}
            />
          </div>
          <Button color="success" className="btnAdd" onClick={this.toggleUsers}>
            +
          </Button>
        </div>
        <TableUsers data={users} onEdit={this.EditUser} />
        <ModalUsers
          title={isEditUser ? 'EDIT USER' : 'ADD USER'}
          visibleModal={modalUser}
          toggle={this.toggleUsers}
          onSubmit={this.onSubmitUser}
          user={isEditUser ? user : {}}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  eror: getReducer.getErr(store),
  users: getReducer.getUsers(store),
  user: getReducer.getUser(store),
});

const mapDispatchToProps = dispatch => ({
  doGetUsers: evt => dispatch(actions.getUsers(evt)),
  doAddUser: evt => dispatch(actions.addUser(evt)),
  doGetUser: evt => dispatch(actions.getUser(evt)),
  doEditUser: evt => dispatch(actions.editUser(evt)),
  doFilterUsers: evt => dispatch(actions.filterUsers(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'usersReducer', reducer });
const withSaga = injectSaga({ key: 'usersSaga', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Users);
