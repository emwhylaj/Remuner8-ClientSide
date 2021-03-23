import React from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';

const DeleteModal = ({ isOpen, toggle, label, children }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalBody>
        <h3>{label}</h3>
        <p>{children}</p>
      </ModalBody>
      <ModalFooter className="justify-content-center">
        <CustomButton onClick={toggle}>CONFIRM</CustomButton>
        <CustomButton onClick={toggle}>CANCEL</CustomButton>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
