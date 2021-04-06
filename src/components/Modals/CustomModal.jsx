import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, label, children }) => (
  <Modal keyboard isOpen={isOpen} toggle={toggle} centered>
    <ModalHeader toggle={toggle}>
      <span style={{ fontSize: '1.25rem', marginLeft: '150px' }}>{label}</span>
    </ModalHeader>
    <ModalBody>{children}</ModalBody>
  </Modal>
);

export default CustomModal;
