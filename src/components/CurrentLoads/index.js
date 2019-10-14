import React, { PureComponent } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TableCurrentLoads from './TableCurrentLoads';
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
    return (
      <div>
        <div className="btnAddContainer">
          <Button color="success" className="btnAdd" onClick={this.toggle}>
            +
          </Button>
        </div>
        <TableCurrentLoads />
        <Modal isOpen={modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Do Something
            </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default CurrentLoads;
