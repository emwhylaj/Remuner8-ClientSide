import React, { useState } from 'react';
import Header from 'components/Payroll/Header';
import EmployeeNameInput from 'components/Payroll/EmployeeNameInput';
import Role from 'components/Payroll/Role';
import LeaveStatus from 'components/Payroll/LeaveStatus';
import InputDateFrom from 'components/Payroll/InputDateFrom';
import InputDateTo from 'components/Payroll/InputDateTo';
import Search from 'components/Payroll/Search';
import ShowInput from 'components/Payroll/ShowInput';
import TableHead from 'components/Payroll/TableHead';
import AddSalaryModal from 'components/Payroll/AddSalaryModal';

import 'assets/css/Payroll.css';

const Payroll = () => {
  const [modalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!modalOpen);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Header toggleModal={toggleModal} />
        <div className="row filter-row">
          <EmployeeNameInput />
          <Role />
          <LeaveStatus />
          <InputDateFrom />
          <InputDateTo />
          <Search />
        </div>
        <ShowInput />
        <div className="row">
          <TableHead />
        </div>
      </div>
      <AddSalaryModal isOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Payroll;
