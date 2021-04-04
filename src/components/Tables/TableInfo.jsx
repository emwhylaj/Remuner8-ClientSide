import React from 'react';
import { Col } from 'reactstrap';

const TableInfo = props => (
  <Col sm={6} md={5}>
    <div
      className="dataTables_info text-center"
      id="DataTables_Table_info"
      role="status"
      aria-live="polite"
      style={{ color: '#1f1f1f'}}
    >
      Showing 1 to 2 of 2 entries
    </div>
  </Col>
);

export default TableInfo;
