import React, { useState } from 'react';
import Header from 'components/Payroll/Header';

import AddSalaryModal from 'components/Payroll/AddSalaryModal';
import InputRow from 'components/Payroll/InputRow';

import 'assets/css/Payroll.css';
// import EmployeeTable from 'components/Employees/Table/EmployeeTable';

const Payroll = () => {
  const [modalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!modalOpen);

  const url = 'https://604529e6c0194f00170bca44.mockapi.io/api/users/employees';
  const columns = [
    'Name',
    'Employee ID',
    'email',
    'Join Date',
    'Job Description',
    'Salary',
    'Payslip',
    'Action'
  ];
  const options = {
    headings: {
      name: 'Name',
      Employee_id: 'Employee ID',
      email: 'email',
      join_date: 'Join Date',
      jo: 'Job Description',
      salary: 'Salary',
      payslip: 'Payslip',
      action: 'Action'
    },
    sortable: ['Name', 'Employee ID', 'email', 'Join Date', 'Salary']
  };

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Header toggleModal={toggleModal} />
        <InputRow />
        {/* <EmployeeTable/> */}
      </div>
      <AddSalaryModal isOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Payroll;
