import React from 'react';
import { Table } from 'reactstrap';
import TableHeader from './EmployeeTableHeader';
import TableBody from './EmployeeTableBody';
import LoaderRing from 'components/Loading/Loader';

const EmployeeTable = props => {
  // const columns = [
  //   { path: 'name', label: 'Name', content: <Avatar /> },
  //   { path: 'id', label: 'ID' },
  //   { path: 'email', label: 'Email' },
  //   { path: 'mobile', label: 'Phone Number' },
  //   { path: 'joinDate', label: 'Join Date' },
  //   { path: 'department', label: 'Department' },
  //   { key: 'Action', label: 'Action', content: <ActionToggle /> }
  // ];

  const getTableHeaders = () => {
    const tableHeaders = props.employees.slice(1);
    return Object.keys(...tableHeaders);
  };

  return (
    <>
      {props.loading ? (
        <LoaderRing />
      ) : (
        <Table
          className="align-items-center table-flush"
          responsive
          striped
          bordered
          style={{ background: '#fff' }}
        >
          <TableHeader headers={getTableHeaders} />
          <TableBody
            body={props.employees}
            toggleEditModal={props.toggleEditModal}
            toggleDeleteModal={props.toggleDeleteModal}
          />
        </Table>
      )}
    </>
  );
};

export default EmployeeTable;
