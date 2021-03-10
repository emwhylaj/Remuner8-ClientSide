import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditForm from './Components/EditForm';

const EditEmployeeModal = props => {
  const [keyboard] = useState(true);

  return (
    <Modal isOpen={props.isModalOpen} toggle={props.toggle} keyboard={keyboard}>
      <ModalHeader toggle={props.toggle}>Edit Employee</ModalHeader>
      <ModalBody>
        <EditForm />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.toggle}>
          Do Something
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditEmployeeModal;
