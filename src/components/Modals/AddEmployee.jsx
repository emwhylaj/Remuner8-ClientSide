import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import EmployeeForm from '../Employees/Components/EmployeeForm';

const AddEmployee = ({ isOpen, toggle }) => (
  <Modal keyboard isOpen={true} toggle={toggle} centered>
    <ModalHeader toggle={toggle} className="align-items-center">
      Add Employee
    </ModalHeader>
    <ModalBody>
      <EmployeeForm />
    </ModalBody>
    <ModalFooter className="justify-content-center">
      <Button color="primary" onClick={toggle}>
        SAVE
      </Button>
    </ModalFooter>
  </Modal>
);

export default AddEmployee;
