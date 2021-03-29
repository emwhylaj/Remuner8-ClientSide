import React, { useState } from 'react';

import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';
// import EmployeeTable from 'components/Employees/Table/EmployeeTable';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';

const Departments = () => {
  const [state, setState] = useState({
    loading: true,
    departments: null
  });

  const [addModalOpen, setAddModalState] = useState(false);
  const [editModalOpen, setEditModalState] = useState(false);
  const [deleteModalOpen, setDeleteModalState] = useState(false);
  const toggleAddModal = () => setAddModalState(!addModalOpen);
  const toggleEditModal = () => setEditModalState(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalState(!deleteModalOpen);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <PageHeader
          button={
            <CustomButton
              className="btn add-btn mr-0 float-right"
              onClick={toggleAddModal}
            >
              <i className="fa fa-plus"></i> Add Department
            </CustomButton>
          }
        />
      </div>
      <CustomModal
        label="Add Department"
        isOpen={addModalOpen}
        toggle={toggleAddModal}
      >
        {/* <EmployeeForm /> */}
      </CustomModal>
      <CustomModal
        label="Edit Department"
        isOpen={editModalOpen}
        toggle={toggleEditModal}
      >
        {/* <EmployeeForm readOnly firstName="" lastName="q" /> */}
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
