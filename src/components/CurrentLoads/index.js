import React, { PureComponent } from 'react';
import TableCurrentLoads from './TableCurrentLoads';
import { Button } from 'reactstrap';
import ModalCurrentLoads from './ModalCurrentLoads';
import './styles.scss';

class CurrentLoads extends PureComponent {
  state = {
    modal: false,
  };
  toggle = () => {
    this.setState(prevState => ({ modal: !prevState.modal }));
  };
  render() {
    const { modal } = this.state;
    const { data } = this.props;
    return (
      <div>
        <div className="btnAddContainer">
          <Button color="success" className="btnAdd" onClick={this.toggle}>
            +
          </Button>
        </div>
        <TableCurrentLoads data={data} />
        <ModalCurrentLoads
          visibleModal={modal}
          toggle={this.toggle}
          title="ADD LOADS"
        />
      </div>
    );
  }
}

export default CurrentLoads;
