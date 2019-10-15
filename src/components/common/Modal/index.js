import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const ModalBase = ({ visibleModal, toggle, children, title, width }) => (
  <Modal isOpen={visibleModal} toggle={toggle} style={{ width }}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>{children}</ModalBody>
    {/* <ModalFooter /> */}
  </Modal>
);

export default ModalBase;
