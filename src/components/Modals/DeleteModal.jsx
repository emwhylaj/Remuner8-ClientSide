import React from 'react';
import { Modal, ModalBody, ModalFooter, Button } from 'reactstrap';

const DeleteModal = ({ isOpen, toggle, label, children }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} centered>
      <ModalBody>
        <h3 className="mb-4">{label}</h3>
        <p className="text-center mt-3 text-darker mb-0">{children}</p>
      </ModalBody>
      <ModalFooter className="justify-content-center">
        <Button onClick={toggle} color="primary" outline>
          CONFIRM
        </Button>
        <Button onClick={toggle} color="primary" outline>
          CANCEL
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default DeleteModal;
