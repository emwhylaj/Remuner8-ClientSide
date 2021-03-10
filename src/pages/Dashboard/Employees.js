import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Employees/Page/Header';
import SearchRow from 'components/Employees/Page/SearchRow';
import Grid from 'components/Employees/Page/Grid';
import EmployeeTable from 'components/Employees/Table/EmployeeTable';
import EditEmployeeModal from 'components/Employees/Modals/EditEmployee';
import AddEmployeeModal from 'components/Employees/Modals/AddEmployee';
import DeleteEmployeeModal from 'components/Employees/Modals/DeleteEmployee';

const Employees = () => {
  const [state, setState] = useState({
    loading: true,
    employees: null
  });
  const [isModalOpen, setModalState] = useState(false);
  const toggleModal = () => setModalState(!isModalOpen);

  useEffect(() => {
    fetch('https://604529e6c0194f00170bca44.mockapi.io/api/users/jk')
      .then(res => res.json())
      .then(
        users => {
          setState({ loading: false, employees: users });
        },
        error => {
          console.log(error);
        }
      );
  }, []);

  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Header />
        <SearchRow />
        <Switch>
          <Route
            path="/admin/employees/all"
            render={() => (
              <Grid
                loading={state.loading}
                employees={state.employees}
                modalOpen={isModalOpen}
                toggleModal={toggleModal}
              />
            )}
          />
          <Route
            path="/admin/employees/employees-list"
            render={() => (
              <EmployeeTable
                loading={state.loading}
                employees={state.employees}
                modalOpen={isModalOpen}
                toggleModal={toggleModal}
              />
            )}
          />
          <Redirect exact from="/admin/employees" to="/admin/employees/all" />
        </Switch>
      </div>
      <AddEmployeeModal modalOpen={isModalOpen} toggleModal={toggleModal} />
      <EditEmployeeModal modalOpen={isModalOpen} toggleModal={toggleModal} />
      <DeleteEmployeeModal modalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Employees;
