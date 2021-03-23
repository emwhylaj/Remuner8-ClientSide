import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EmployeeForm from '../Employees/Components/EmployeeForm';

const EditEmployeeModal = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} keyboard>
      <ModalHeader toggle={toggle} className="align-items-center">
        Edit Employee
      </ModalHeader>
      <ModalBody>
        <EmployeeForm readOnly />
      </ModalBody>
      <ModalFooter className="justify-content-center">
        <Button color="primary" onClick={toggle}>
          SAVE
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditEmployeeModal;
