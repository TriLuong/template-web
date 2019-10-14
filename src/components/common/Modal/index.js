import React, { PureComponent } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalBase extends PureComponent {
  render() {
    const { visibleModal, toggle, children, title, width } = this.props;
    return (
      <Modal isOpen={visibleModal} toggle={toggle} style={{ width }}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        {/* <ModalFooter /> */}
      </Modal>
    );
  }
}

export default ModalBase;
