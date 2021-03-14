import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Employees/Page/Header';
import SearchRow from 'components/Employees/Page/SearchRow';
import Grid from 'components/Employees/Page/Grid';
import EmployeeTable from 'components/Employees/Table/EmployeeTable';
import CustomModal from 'components/Modals/CustomModal';
import DeleteModal from 'components/Modals/DeleteModal';
import EmployeeForm from 'components/Employees/Components/EmployeeForm';

const Employees = () => {
  const [state, setState] = useState({
    loading: true,
    employees: null
  });

  const [addModalOpen, setAddModalState] = useState(false);
  const [editModalOpen, setEditModalState] = useState(false);
  const [deleteModalOpen, setDeleteModalState] = useState(false);
  const toggleAddModal = () => setAddModalState(!addModalOpen);
  const toggleEditModal = () => setEditModalState(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalState(!deleteModalOpen);

  const fetchEmployees = async () => {
    try {
      const res = await fetch(
        'https://604529e6c0194f00170bca44.mockapi.io/api/users/jk'
      );
      const users = await res.json();
      setState({ loading: false, employees: users });
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => fetchEmployees(), []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Header toggleModal={toggleAddModal} />
        <SearchRow />
        <Switch>
          <Route
            path="/admin/employees/all"
            render={() => (
              <Grid
                loading={state.loading}
                employees={state.employees}
                toggleEditModal={toggleEditModal}
                toggleDeleteModal={toggleDeleteModal}
              />
            )}
          />
          <Route
            path="/admin/employees/employees-list"
            render={() => (
              <EmployeeTable
                loading={state.loading}
                employees={state.employees}
                toggleEditModal={toggleEditModal}
                toggleDeleteModal={toggleDeleteModal}
              />
            )}
          />
          <Redirect exact from="/admin/employees" to="/admin/employees/all" />
        </Switch>
      </div>
      <CustomModal
        label="Add Employee"
        isOpen={addModalOpen}
        toggle={toggleAddModal}
      >
        <EmployeeForm />
      </CustomModal>
      <CustomModal
        label="Edit Employee"
        isOpen={editModalOpen}
        toggle={toggleEditModal}
      >
        <EmployeeForm readOnly firstName="" lastName="q" />
      </CustomModal>
      <DeleteModal
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
        label="Delete Employee"
      >
        Are you sure you want to delete to this employee?
      </DeleteModal>
    </div>
  );
};

export default Employees;
