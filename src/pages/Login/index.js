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
import './styles.scss';

class Button extends PureComponent {
  onClick = () => {
    const { getData, data } = this.props;
    getData('adsfsd');
    console.log(data);
  };

  render() {
    const { data } = this.props;
    return (
      <div>
        <Header />
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
