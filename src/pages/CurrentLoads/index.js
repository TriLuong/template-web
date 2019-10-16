import React, { PureComponent } from 'react';
import { Button } from 'reactstrap';
import TableCurrentLoads from 'components/CurrentLoads/TableCurrentLoads';
import ModalCurrentLoads from 'components/CurrentLoads/ModalCurrentLoads';
import { compose } from 'redux';
import { connect } from 'react-redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import * as getReducer from './selectors';
import * as actions from './actions';
import reducer from './reducer';
import saga from './saga';
import './styles.scss';

class CurrentLoads extends PureComponent {
  state = {
    modalCurrentLoads: false,
  };

  componentDidMount() {
    const { doGetCurrentLoads } = this.props;
    doGetCurrentLoads();
  }

  onSubmitCurrentLoads = values => {
    const { doAddLoad } = this.props;
    console.log('current', values);
    doAddLoad(values);
    this.toggleCurrentLoads();
  };

  toggleCurrentLoads = () => {
    this.setState(prevState => ({
      modalCurrentLoads: !prevState.modalCurrentLoads,
    }));
  };

  render() {
    const { currentLoads } = this.props;
    const { modalCurrentLoads } = this.state;
    return (
      <div>
        <div className="btnAddContainer">
          <Button
            color="success"
            className="btnAdd"
            onClick={this.toggleCurrentLoads}>
            +
          </Button>
        </div>
        <TableCurrentLoads data={currentLoads} />
        <ModalCurrentLoads
          visibleModal={modalCurrentLoads}
          toggle={this.toggleCurrentLoads}
          title="ADD LOADS"
          onSubmit={this.onSubmitCurrentLoads}
        />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  currentLoads: getReducer.getCurrentLoads(store),
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
)(CurrentLoads);
