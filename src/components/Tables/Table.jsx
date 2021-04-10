import React from 'react';
import PropTypes from 'prop-types';
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

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  sortColumn: PropTypes.object.isRequired,
  onSort: PropTypes.func.isRequired,
  headerData: PropTypes.array.isRequired,
  bodyData: PropTypes.array.isRequired
};

export default Table;
