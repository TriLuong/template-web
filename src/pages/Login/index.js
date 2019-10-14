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
class Button extends PureComponent {
  onClick = () => {
    const { getData, data } = this.props;
    getData('adsfsd');
    console.log(data);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="containerContent">
          <div className="sideBar">
            <SideBar listMenu={sideBar} />
          </div>
          <div className="content">
            <p>sdfsd</p>
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
)(Button);
