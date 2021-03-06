import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './EmployeeTableHeader';
import TableBody from './EmployeeTableBody';
import ActionToggle from './ActionToggle';

const EmployeeTable = props => {
  const columns = [
    { path: 'name', label: 'Name' },
    { path: 'id', label: 'ID' },
    { path: 'email', label: 'Email' },
    { path: 'mobile', label: 'Phone Number' },
    { path: 'joinDate', label: 'Join Date' },
    { path: 'jobDescription', label: 'Job Description' },
    { key: 'Action', label: 'Action', content: <ActionToggle /> }
  ];

  return (
    <>
      <Table className="align-items-center table-flush" responsive>
        <TableHeader columns={columns}></TableHeader>
        <TableBody columns={columns} />
      </Table>
    </>
  );
};

export default EmployeeTable;
