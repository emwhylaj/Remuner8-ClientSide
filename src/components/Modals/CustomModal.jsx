import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const CustomModal = ({ isOpen, toggle, label, children }) => (
  <Modal keyboard isOpen={isOpen} toggle={toggle} centered>
    <ModalHeader toggle={toggle} className="align-items-center">
      <span style={{ fontSize: '1.25rem' }}>{label}</span>
    </ModalHeader>
    <ModalBody>{children}</ModalBody>
    <ModalFooter className="justify-content-center">
      <Button color="primary" style={{ minWidth: '200px' }} onClick={toggle}>
        SAVE
      </Button>
    </ModalFooter>
  </Modal>
);

export default CustomModal;
