import React, { useState } from 'react';
import Header from 'components/Payroll/Header';

import AddSalaryModal from 'components/Payroll/AddSalaryModal';
import InputRow from 'components/Payroll/InputRow';

import 'assets/css/Payroll.css';

const Payroll = () => {
  const [modalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!modalOpen);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Header toggleModal={toggleModal} />
        <div className="row filter-row">
          {/* <EmployeeNameInput />
          <Role />
          <LeaveStatus />
          <InputDateFrom />
          <InputDateTo />
          <Search /> */}
        </div>
        <InputRow />

        <div className="row"></div>
      </div>
      <AddSalaryModal isOpen={modalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Payroll;
