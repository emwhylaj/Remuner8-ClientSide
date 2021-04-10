import React from 'react';
import BTable from 'react-bootstrap/Table';

import TableHeader from './TableHeader';
import TableBody from './TableBody';

const Table = ({ columns, sortColumn, onSort, headerData, bodyData }) => {
  return (
    <BTable
      className="align-items-center my-3"
      responsive
      striped
      size="sm"
      style={{ background: '#fff', color: '#333' }}
    >
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={headerData}
      />
      <TableBody data={bodyData} columns={columns} />
    </BTable>
  );
};

export default Table;
