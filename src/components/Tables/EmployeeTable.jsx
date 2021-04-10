import React, { Component } from 'react';
import { Row } from 'reactstrap';
import dateFormat from 'dateformat';
import { paginate } from 'utils/paginate';

import Avatar from 'components/Avatars/EmployeeAvatar';
import LoaderRing from 'components/Loading/Loader';
import Table from 'components/Tables/Table';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'employeeId', order: 'asc' },
      start: 1,
      end: 10
    };
  }

  columns = [
    {
      path: 'name',
      label: 'Name',
      content: employee => <Avatar employee={employee} />
    },
    { path: 'employee_id', label: 'Employee ID' },
    { path: 'email', label: 'Email' },
    { path: 'phone_number', label: 'Phone Number' },
    { path: 'join_date', label: 'Join Date' },
    { path: 'department', label: 'Department' },
    {
      key: 'Action',
      label: 'Action',
      content: employee => (
        <ActionToggle
          toggleEditModal={() => this.props.onEdit(employee)}
          toggleDeleteModal={this.props.onDelete}
        />
      )
    }
  ];

  handlePageChange = page => this.setState({ currentPage: page });

  handlePageSizeChange = value => this.setState({ pageSize: Number(value) });

  handleSort = sortColumn => this.setState({ sortColumn });

  getPagedData = () => {
    const { data } = this.props;
    const { pageSize, currentPage } = this.state;
    const departments = data && paginate(data, currentPage, pageSize);

    return { totalCount: data.length, data: departments };
  };

  formatDate = date => {
    return dateFormat(date, 'dd/mm/yyyy');
  };

  render() {
    const { loading, data } = this.props;
    const { start, end, pageSize, currentPage, sortColumn } = this.state;
    const { totalCount, data: employees } = this.getPagedData();

    return (
      <div className="table-wrapper">
        {loading ? (
          <LoaderRing />
        ) : (
          <>
            <Table
              className="align-items-center table-flush"
              columns={this.columns}
              headerData={data}
              bodyData={employees}
              sortColumn={sortColumn}
              onSort={this.handleSort}
            />
            <Row className="align-items-baseline justify-content-lg-between mt-4">
              <TableInfo start={start} end={end} total={totalCount} />
              <Pagination
                itemsCount={totalCount}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                currentPage={currentPage}
                onPageSizeChange={this.handlePageSizeChange}
              />
            </Row>
          </>
        )}
      </div>
    );
  }
}

export default EmployeeTable;
