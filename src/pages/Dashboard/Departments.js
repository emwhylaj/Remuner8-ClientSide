import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';
import DepartmentsTable from 'components/Tables/DepartmentsTable';

const Departments = () => {
  const [state, setState] = useState({
    loading: true,
    departments: []
  });
  const [addModalOpen, setAddModalState] = useState(false);
  const toggleAddModal = () => setAddModalState(!addModalOpen);

  const fetchDepartments = async () => {
    try {
      const response = await fetch('https://localhost:44333/api/departments');

      if (response.ok) {
        const data = await response.json();
        setState({ loading: false, departments: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => fetchDepartments(), []);

  const { loading, departments } = state;

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <PageHeader
          button={
            <CustomButton
              className="btn add-btn mr-0 float-right"
              onClick={toggleAddModal}
              style={{ padding: '0.625rem 0.25rem' }}
            >
              <i className="fa fa-plus"></i> Add Department
            </CustomButton>
          }
        />
        <Row>
          <Col md={12}>
            <DepartmentsTable data={departments.data} loading={loading} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Departments;
