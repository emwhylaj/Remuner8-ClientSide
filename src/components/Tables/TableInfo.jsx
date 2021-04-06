import React from 'react';
import { Col } from 'reactstrap';

const TableInfo = ({ start, end, total }) => (
  <Col sm={6} md={5}>
    <div
      className="dataTables_info text-center"
      id="DataTables_Table_info"
      role="status"
      aria-live="polite"
      style={{ color: '#1f1f1f' }}
    >
      Showing {start} to {end} of {total} entries
    </div>
  </Col>
);

export default TableInfo;
