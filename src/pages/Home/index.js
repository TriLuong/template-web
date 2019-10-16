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
import CurrentLoads from 'pages/CurrentLoads';
import Loader from 'pages/Loader';
import Users from 'pages/Users';
import './styles.scss';

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
      itemSelected: 'Current Loads',
      visibleSidebar: true,
    };
  }

  componentDidMount() {}

  setItemSelected = item => {
    this.setState({ itemSelected: item });
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      visibleSidebar: !prevState.visibleSidebar,
    }));
  };

  renderContent = content => {
    const { users, user } = this.props;
    const { modalUser, isEditUser } = this.state;

    switch (content) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Current Loads':
        return <CurrentLoads />;
      case 'Users':
        return <Users />;
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
          <div className={`sideBar ${visibleSidebar ? '' : 'hiddenSiderbar'}`}>
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
            <Loader />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  // eror: getReducer.getErr(store),
  // users: getReducer.getUsers(store),
  // user: getReducer.getUser(store),
});

const mapDispatchToProps = dispatch => ({
  // doGetUsers: evt => dispatch(actions.getUsers(evt)),
  // doAddUser: evt => dispatch(actions.addUser(evt)),
  // doGetUser: evt => dispatch(actions.getUser(evt)),
  // doEditUser: evt => dispatch(actions.editUser(evt)),
  // doFilterUsers: evt => dispatch(actions.filterUsers(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homeReducer', reducer });
// const withSaga = injectSaga({ key: 'homeSaga', saga });

export default compose(
  withReducer,
  // withSaga,
  withConnect,
)(Home);
