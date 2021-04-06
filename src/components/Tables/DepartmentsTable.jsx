import React, { useState } from 'react';
import BTable from 'react-bootstrap/Table';
import { Row, UncontrolledTooltip } from 'reactstrap';

import { paginate } from 'utils/paginate';

import { StyledTh } from 'components/Tables/TableHeader';
import TableInfo from 'components/Tables/TableInfo';
import TableLength from 'components/Tables/TableLength';
import Pagination from 'components/Tables/Pagination';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

const DepartmentsTable = ({ data, onSort }) => {
  const [editModalOpen, setEditModalState] = useState(false);
  const [deleteModalOpen, setDeleteModalState] = useState(false);
  const [pageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleEditModal = () => setEditModalState(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalState(!deleteModalOpen);

  const handlePageChange = page => setCurrentPage(page);

  const departments = data && paginate(data, currentPage, pageSize);

  return (
    <div className="table-wrapper">
      <Row>
        <TableLength />
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
              Click to sort by ascend
            </UncontrolledTooltip>
            <StyledTh
              onClick={() => onSort('id')}
              tabIndex={0}
              sort={'Department Id'}
              style={{ width: '4rem', fontSize: '2ch' }}
              id="id"
            >
              #
            </StyledTh>
            <StyledTh
              onClick={() => onSort('name')}
              tabIndex={0}
              sort={'Department Name'}
              id="name"
            >
              Name
            </StyledTh>
            <UncontrolledTooltip placement="top" target="name">
              Click to sort by ascend
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
                    toggleEditModal={toggleEditModal}
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

      <Row className="align-items-baseline">
        <TableInfo start={1} end={10} total={data.length} />
        <Pagination
          itemsCount={data.length}
          pageSize={pageSize}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </Row>
    </div>
  );
};

export default DepartmentsTable;
