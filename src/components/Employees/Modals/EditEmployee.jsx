import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditForm from './Components/EditForm';

const EditEmployeeModal = ({ isModalOpen, toggle }) => {
  const [keyboard] = useState(true);

  return (
    <Modal isOpen={isModalOpen} toggle={toggle} keyboard={keyboard}>
      <ModalHeader toggle={toggle}>Edit Employee</ModalHeader>
      <ModalBody>
        <EditForm />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditEmployeeModal;
