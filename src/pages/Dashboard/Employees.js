import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/Employees/Page/Header';
import SearchRow from 'components/Employees/Page/SearchRow';
import Grid from 'components/Employees/Page/Grid';
import EmployeeTable from 'components/Employees/Table/EmployeeTable';


const Employees = () => {
   const [state, setState] = useState({
     loading: true,
     employees: null
   });

   useEffect(() => {
     fetch('https://604529e6c0194f00170bca44.mockapi.io/api/users/jk')
       .then(res => res.json())
       .then(
         users => {
           setState({ loading: false, employees: users });
         },
         error => {
           console.log(error);
           alert(error);
         }
       );
   }, []);
   
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <Header />
        <SearchRow />
        <Switch>
          <Route path="/admin/employees/all" component={Grid} />
          <Route
            path="/admin/employees/employees-list"
            component={EmployeeTable}
          />
          <Redirect exact from="/admin/employees" to="/admin/employees/all" />
        </Switch>
      </div>
    </div>
  );
};

export default Employees;
