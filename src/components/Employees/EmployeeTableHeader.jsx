import React from 'react';

const EmployeeTableHeader = () => {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col">Name</th>
        <th scope="col">ID</th>
        <th scope="col">Email</th>
        <th scope="col">Join Date</th>
        <th scope="col">Job Description</th>
        <th scope="col">Department</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
  );
};

export default EmployeeTableHeader;
