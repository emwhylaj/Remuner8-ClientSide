import React, { Component } from 'react';
import BTable from 'react-bootstrap/Table';
import { Row } from 'reactstrap';

import { paginate } from 'utils/paginate';

import TableHeader from 'components/Tables/TableHeader';
import TableBody from 'components/Tables/TableBody';
import TableInfo from 'components/Tables/TableInfo';
import TableLength from 'components/Tables/TableLength';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

class DepartmentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'id', order: 'asc' }
    };
  }

  columns = [
    { path: 'id', label: '#' },
    { path: 'departmentName', label: 'Department' },
    {
      key: 'Action',
      label: 'Action',
      content: departmentName => (
        <ActionToggle
          toggleEditModal={() => this.handleEdit(departmentName)}
          toggleDeleteModal={this.props.toggleDeleteModal}
        />
      )
    }
  ];

  localData = this.props.data;

  handlePageChange = page => this.setState({ currentPage: page });

  handlePageSizeChange = value => this.setState({ pageSize: Number(value) });

  handleSort = sortColumn => this.setState({ sortColumn });

  handleEdit = string => {
    this.props.setDepartmentName(string);
    this.props.toggleEditModal();
  };

  render() {
    const { data, toggleDeleteModal } = this.props;
    const { pageSize, currentPage, sortColumn } = this.state;

    const departments = data && paginate(this.localData, currentPage, pageSize);

    return (
      <div className="table-wrapper">
        <Row className="px-lg-4">
          <TableLength togglePageSize={this.handlePageSizeChange} />
        </Row>
        <BTable
          className="align-items-center my-3"
          responsive
          striped
          size="sm"
          style={{ background: '#fff', color: '#333' }}
        >
          <TableHeader
            columns={this.columns}
            sortColumn={sortColumn}
            onSort={this.handleSort}
            data={this.localData}
          />
          <TableBody
            data={departments}
            columns={this.columns}
            handleEdit={this.handleEdit}
            toggleDelete={toggleDeleteModal}
          />
        </BTable>

        <Row className="align-items-baseline justify-content-lg-between mt-2">
          <TableInfo start={1} end={10} total={data.length} />
          <Pagination
            itemsCount={data.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </Row>
      </div>
    );
  }
}

export default DepartmentsTable;
