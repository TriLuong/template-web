import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as getReducer from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Header from 'components/Header';
import SideBar from 'components/SideBar';
import Dashboard from 'components/Dashboard';
import CurrentLoads from 'components/CurrentLoads';
import Users from 'components/Users';
import './styles.scss';

import dataUsers from './dataUsers';

const sideBar = [
  {
    label: 'Dashboard',
  },
  {
    label: 'Current Loads',
  },
  {
    label: 'Past Loads',
  },
  {
    label: 'Users',
  },
];
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: 'Users',
      modalCurrentLoads: false,
      modalUser: false,
      visibleSidebar: true,
    };
  }

  componentDidMount() {
    const { doGetCurrentLoads, doGetUsers } = this.props;
    doGetCurrentLoads();
    doGetUsers();
  }

  setItemSelected = item => {
    this.setState({ itemSelected: item });
  };

  onSubmitCurrentLoads = values => {
    const { doAddLoad } = this.props;
    doAddLoad(values);
    this.toggleCurrentLoads();
  };

  onSubmitUser = values => {
    const { doAddUser } = this.props;
    doAddUser(values);
    this.toggleUsers();
  };

  toggleCurrentLoads = () => {
    this.setState(prevState => ({
      modalCurrentLoads: !prevState.modalCurrentLoads,
    }));
  };

  toggleUsers = () => {
    this.setState(prevState => ({
      modalUser: !prevState.modalUser,
    }));
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      visibleSidebar: !prevState.visibleSidebar,
    }));
  };

  EditUser = id => {
    const { doGetUser } = this.props;
    doGetUser({ id });
    this.toggleUsers();
  };

  renderContent = content => {
    const { currentLoads, users, user } = this.props;
    const { modalCurrentLoads, modalUser } = this.state;

    switch (content) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Current Loads':
        return (
          <CurrentLoads
            data={currentLoads}
            onSubmit={this.onSubmitCurrentLoads}
            visibleModal={modalCurrentLoads}
            toggle={this.toggleCurrentLoads}
          />
        );
      case 'Users':
        return (
          <Users
            data={users}
            onSubmit={this.onSubmitUser}
            visibleModal={modalUser}
            toggle={this.toggleUsers}
            onEdit={this.EditUser}
            user={user}
          />
        );
      default:
        return null;
    }
  };

  render() {
    const { itemSelected, visibleSidebar } = this.state;
    return (
      <div className="containerHome">
        <Header toggleSideBar={this.toggleSidebar} />
        <div className="containerContent">
          <div
            className="sideBar"
            style={visibleSidebar ? null : { display: 'none' }}>
            <SideBar
              listMenu={sideBar}
              itemSelected={itemSelected}
              setItemSelected={this.setItemSelected}
            />
          </div>
          <div className="content">
            <div className="headerContent">
              <h2>{itemSelected}</h2>
              {this.renderContent(itemSelected)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  currentLoads: getReducer.getCurrentLoads(store),
  eror: getReducer.getErr(store),
  users: getReducer.getUsers(store),
  user: getReducer.getUser(store),
});

const mapDispatchToProps = dispatch => ({
  doGetCurrentLoads: evt => dispatch(actions.getCurrentLoads(evt)),
  doAddLoad: evt => dispatch(actions.addLoad(evt)),
  doGetUsers: evt => dispatch(actions.getUsers(evt)),
  doAddUser: evt => dispatch(actions.addUser(evt)),
  doGetUser: evt => dispatch(actions.getUser(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homeReducer', reducer });
const withSaga = injectSaga({ key: 'homeReducer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
