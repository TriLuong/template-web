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
      itemSelected: 'Current Loads',
      modalCurrentLoads: false,
      visibleSidebar: true,
    };
  }

  componentDidMount() {
    const { doGetCurrentLoads } = this.props;
    doGetCurrentLoads();
  }

  setItemSelected = item => {
    this.setState({ itemSelected: item });
  };

  onSubmitCurrentLoads = values => {
    const { doAddLoad } = this.props;
    doAddLoad(values);
    this.toggle();
  };

  toggle = () => {
    this.setState(prevState => ({
      modalCurrentLoads: !prevState.modalCurrentLoads,
    }));
  };

  toggleSidebar = () => {
    this.setState(prevState => ({
      visibleSidebar: !prevState.visibleSidebar,
    }));
  };

  renderContent = content => {
    const { data } = this.props;
    const { modalCurrentLoads } = this.state;
    switch (content) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Current Loads':
        return (
          <CurrentLoads
            data={data}
            onSubmit={this.onSubmitCurrentLoads}
            visibleModal={modalCurrentLoads}
            toggle={this.toggle}
          />
        );
      case 'Users':
        return <Users data={dataUsers} />;
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
  data: getReducer.getData(store),
  eror: getReducer.getErr(store),
});

const mapDispatchToProps = dispatch => ({
  doGetCurrentLoads: evt => dispatch(actions.getCurrentLoads(evt)),
  doAddLoad: evt => dispatch(actions.addLoad(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'currentLoadsReducer', reducer });
const withSaga = injectSaga({ key: 'currentLoadsSaga', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
