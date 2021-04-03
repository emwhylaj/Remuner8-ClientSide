import React, { useState, useEffect } from 'react';
import ServerTable from 'react-strap-table';
import BTable from 'react-bootstrap/Table';

import PageHeader from 'components/Headers/PageHeader';
import DepartmentForm from 'components/Forms/Department/DepartmentForm';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import CustomButton from 'components/Custom-Buttons/Button';

const Departments = () => {
  const [state, setState] = useState({
    loading: true,
    departments: []
  });
  const [addModalOpen, setAddModalState] = useState(false);
  const [editModalOpen, setEditModalState] = useState(false);
  const [deleteModalOpen, setDeleteModalState] = useState(false);
  const toggleAddModal = () => setAddModalState(!addModalOpen);
  const toggleEditModal = () => setEditModalState(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalState(!deleteModalOpen);
  const url = 'https://3f780952a4ca.ngrok.io/api/departments';
  const columns = ['Id', 'Department Name'];
  const options = {
    headings: {
      id: '#',
      departmentName: 'Department Name',
    },
    sortable: ['Id', 'Department Name']
  };

  const fetchDepartments = async () => {
    try {
      const response = await fetch(
        'https://localhost:44333/api/departments'
      );

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
        {/* <EmployeeTable loading={loading} data={departments} /> */}
        <ServerTable
          columns={columns}
          url={url}
          options={options}
          bordered
          hover
        />
      </div>
      <CustomModal
        label="Add Department"
        isOpen={addModalOpen}
        toggle={toggleAddModal}
      >
        <DepartmentForm />
      </CustomModal>
      <CustomModal
        label="Edit Department"
        isOpen={editModalOpen}
        toggle={toggleEditModal}
      >
        <DepartmentForm />
      </CustomModal>
      <DeleteModal
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
        label="Delete Department"
      >
        Are you sure you want to delete this department?
      </DeleteModal>
    </div>
  );
};

export default Departments;
