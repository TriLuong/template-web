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
  };

  renderContent = content => {
    const { data } = this.props;

    switch (content) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Current Loads':
        return (
          <CurrentLoads data={data} onSubmit={this.onSubmitCurrentLoads} />
        );
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
