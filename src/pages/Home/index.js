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
import './styles.scss';

import dataCurrent from './dataCurrent';

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
    };
  }
  setItemSelected = item => {
    this.setState({ itemSelected: item });
  };

  renderContent = content => {
    switch (content) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Current Loads':
        return <CurrentLoads data={dataCurrent} />;
      default:
        return null;
    }
  };

  render() {
    const { itemSelected } = this.state;
    return (
      <div className="containerHome">
        <Header />
        <div className="containerContent">
          <div className="sideBar">
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
  getData: evt => dispatch(actions.loginRequest(evt)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginReducer', reducer });
const withSaga = injectSaga({ key: 'loginSaga', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
