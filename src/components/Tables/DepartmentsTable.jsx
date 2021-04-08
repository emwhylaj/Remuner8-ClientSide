import React, { Component } from 'react';
import BTable from 'react-bootstrap/Table';
import { Row, UncontrolledTooltip } from 'reactstrap';
import _ from 'lodash';

import { paginate } from 'utils/paginate';

import { StyledTh } from 'components/Tables/TableHeader';
import TableInfo from 'components/Tables/TableInfo';
import TableLength from 'components/Tables/TableLength';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

class DepartmentsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalOpen: false,
      deleteModalOpen: false,
      pageSize: 10,
      currentPage: 1,
      sortColumn: { path: 'id', order: 'asc' },
      sortOrder: 'asc'
    };
  }

  departments = this.props.data;

  handlePageChange = page => this.setState({ currentPage: page });

  handlePageSizeChange = value => this.setState({ pageSize: value });

  sortData = (sortColumn, data) => {
    const { path, order } = sortColumn;
    if (order === 'asc') {
      !path.includes('id')
        ? data.sort((a, b) => a[path].localeCompare(b[path]))
        : data.sort((a, b) => a[path] - b[path]);
    } else if (order === 'desc') {
      !path.includes('id')
        ? data.sort((a, b) => b[path].localeCompare(a[path]))
        : data.sort((a, b) => b[path] - a[path]);
    } else return null;
  };

  handleSort = path => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : '';
      if (sortColumn.order === '') sortColumn.order = 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn });
    this.sortData(sortColumn, this.departments);
  };

  handleEdit = string => {
    this.props.setDepartmentName(string);
    this.props.toggleEditModal();
  };

  render() {
    const { data, toggleDeleteModal } = this.props;
    const { pageSize, currentPage, sortColumn: { order } } = this.state;

    // const formattedData = data.map(data => {
    //   data.id = data.id.length === 1 ? `0${data.id}` : data.id;
    //   return data;
    // });

    const departments = data && paginate(this.departments, currentPage, pageSize);

    return (
      <div className="table-wrapper">
        <Row className="px-lg-4">
          <TableLength onSizeChange={this.handlePageSizeChange}/>
        </Row>
        <BTable
          className="align-items-center my-3"
          responsive
          striped
          bordered
          size="sm"
          style={{ background: '#fff', color: '#333' }}
        >
          <thead>
            <tr>
              <UncontrolledTooltip placement="top" target="id">
                {!order
                  ? 'Click to reset'
                  : `Click to sort by ${
                      order === 'asc' ? 'descending' : 'ascending'
                    } `}
              </UncontrolledTooltip>
              <StyledTh
                onClick={() => this.handleSort('id')}
                tabIndex={0}
                sort={'Department Id'}
                style={{ width: '4rem', fontSize: '2ch' }}
                id="id"
              >
                #
              </StyledTh>
              <StyledTh
                onClick={() => this.handleSort('departmentName')}
                tabIndex={0}
                sort={'Department Name'}
                id="name"
                className="pl-3"
              >
                DEPARTMENT
              </StyledTh>
              <UncontrolledTooltip placement="top" target="name">
                {!order
                  ? 'Click to reset'
                  : `Click to sort by ${
                      order === 'asc' ? 'descending' : 'ascending'
                    } `}
              </UncontrolledTooltip>
              <StyledTh style={{ width: '6rem' }} className="text-center">
                Action
              </StyledTh>
            </tr>
          </thead>
          <tbody>
            {data ? (
              departments.map(({ id, departmentName }) => (
                <tr key={id} role="row">
                  <th scope="row" className="pl-3">
                    {id}
                  </th>
                  <td className="pl-3">{departmentName}</td>
                  <td className="text-center">
                    <ActionToggle
                      toggleEditModal={() => this.handleEdit(departmentName)}
                      toggleDeleteModal={toggleDeleteModal}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>No departments found</tr>
            )}
          </tbody>
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
