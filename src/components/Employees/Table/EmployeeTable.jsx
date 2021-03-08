import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './EmployeeTableHeader';
import TableBody from './EmployeeTableBody';
import Avatar from './EmployeeAvatar';
import ActionToggle from './ActionToggle';

const EmployeeTable = props => {
  const columns = [
    { path: 'name', label: 'Name', content: <Avatar /> },
    { path: 'id', label: 'ID' },
    { path: 'email', label: 'Email' },
    { path: 'mobile', label: 'Phone Number' },
    { path: 'joinDate', label: 'Join Date' },
    { path: 'department', label: 'Department' },
    { key: 'Action', label: 'Action', content: <ActionToggle /> }
  ];

  return (
    <Table className="align-items-center table-flush " responsive hover>
      <TableHeader columns={columns} />
      <TableBody columns={columns} />
    </Table>
  );
};

export default EmployeeTable;
