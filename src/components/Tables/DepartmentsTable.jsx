import React, { useState } from 'react';
import BTable from 'react-bootstrap/Table';
import { Row, UncontrolledTooltip } from 'reactstrap';

import TableLength from 'components/Tables/TableLength';
import LoaderRing from 'components/Loading/Loader';
import { StyledTh } from 'components/Tables/TableHeader';
import TableInfo from 'components/Tables/TableInfo';
import Pagination from 'components/Tables/Pagination'
import CustomModal from 'components/Modals/CustomModal';
import DepartmentForm from 'components/Forms/Department/DepartmentForm';
import DeleteModal from 'components/Modals/DeleteModal';
import ActionToggle from 'components/Custom-Buttons/ActionToggle';

const DepartmentsTable = ({ loading, data}) => {
  const [editModalOpen, setEditModalState] = useState(false);
  const [deleteModalOpen, setDeleteModalState] = useState(false);
  const toggleEditModal = () => setEditModalState(!editModalOpen);
  const toggleDeleteModal = () => setDeleteModalState(!deleteModalOpen);

  console.log(data);

  return (
    <div>
      {loading ? (
        <LoaderRing />
      ) : (
        <div className="table-wrapper">
          <Row>
            <TableLength />
          </Row>
          <Row>
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
                    tabIndex={0}
                    sort={'Department Id'}
                    style={{ width: '4rem', fontSize: '2ch' }}
                    id="id"
                  >
                    #
                  </StyledTh>
                  <StyledTh tabIndex={0} sort={'Department Name'} id="name">
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
                  data.map(({ departmentId, departmentName }) => (
                    <tr key={departmentId} role="row">
                      <th scope="row" className="pl-3">
                        {departmentId}
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
          </Row>

          <Row className="align-items-baseline">
              <TableInfo />
              <Pagination itemsCount={data.length} />
          </Row>
        </div>
      )}
      <CustomModal
        label="Edit Department"
        isOpen={editModalOpen}
        toggle={toggleEditModal}
      >
        <DepartmentForm />
      </CustomModal>
      <DeleteModal
        isOpen={deleteModalOpen}
        toggle={toggleDeleteModal}
        label="Delete Department"
      >
        Are you sure you want to delete this department?
      </DeleteModal>
    </div>
  );
};

export default DepartmentsTable;
