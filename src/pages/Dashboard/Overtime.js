import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';

import CustomModal from 'components/Modals/CustomModal';

import DeleteModal from 'components/Modals/DeleteModal';

import LeaveForm from 'components/Forms/Leave/LeaveForm';
import OvertimeTable from 'components/Tables/OvertimeTable';
import '../../assets/css/Leave.css';

class Overtime extends Component {
  state = {
    loading: true,
    formData: [],
    leaves: [],
    addModalOpen: false,
    editModalOpen: false,
    deleteModalOpen: false
  };

  toggleAddModal = () =>
    this.setState({ addModalOpen: !this.state.addModalOpen });

  toggleEditModal = () =>
    this.setState({ editModalOpen: !this.state.editModalOpen });

  toggleDeleteModal = () =>
    this.setState({ deleteModalOpen: !this.state.deleteModalOpen });

  handleEdit = object =>
    this.setState({
      formData: [object],
      editModalOpen: !this.state.editModalOpen
    });

  mockUrl = 'https://6072ea32e4e0160017ddf097.mockapi.io/api/overtime';
  //   url = 'https://localhost:44333/api/leaves';

  fetchLeaves = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        this.setState({ loading: false, leaves: data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchLeaves();
  }

  render() {
    const {
      loading,
      leaves,
      addModalOpen,
      editModalOpen,
      deleteModalOpen
    } = this.state;

    return (
      <div className="page-wrapper">
        <div className="content container-fluid">
          <PageHeader
            button={
              <CustomButton
                className="btn add-btn mr-0 float-right"
                onClick={this.toggleAddModal}
                style={{ padding: '0.625rem 0.25rem' }}
              >
                <i className="fa fa-plus"></i> Add Overtime
              </CustomButton>
            }
          />
          <Row>
            <Col md="3">
              <div className="stats-info">
                <h6>Overtime Employee</h6>
                <h4>
                  12 <span>this month</span>
                </h4>
              </div>
            </Col>
            <Col md="3">
              <div className="stats-info">
                <h6>Overtime Hours</h6>
                <h4>
                  118 <span>this month</span>
                </h4>
              </div>
            </Col>
            <Col md="3">
              <div className="stats-info">
                <h6>Pending Request</h6>
                <h4>23</h4>
              </div>
            </Col>
            <Col md="3">
              <div className="stats-info">
                <h6>Rejected</h6>
                <h4>5</h4>
              </div>
            </Col>
          </Row>
          <br></br>

          <Row>
            <Col md={12}>
              {loading ? (
                <LoaderRing />
              ) : (
                <OvertimeTable
                  data={leaves}
                  onEdit={this.handleEdit}
                  onDelete={this.toggleDeleteModal}
                  // setFormData={this.setFormData}
                />
              )}
            </Col>
          </Row>
          <CustomModal
            label="Add Overtime"
            isOpen={addModalOpen}
            toggle={this.toggleAddModal}
          >
            <LeaveForm toggle={this.toggleAddModal} />
          </CustomModal>
          <CustomModal
            label="Edit Overtime"
            isOpen={editModalOpen}
            toggle={this.toggleEditModal}
          >
            <LeaveForm data={this.state.formData} />
          </CustomModal>
          <DeleteModal
            isOpen={deleteModalOpen}
            toggle={this.toggleDeleteModal}
            label="Delete Overtime"
          >
            Are you sure you want to delete the leave?
          </DeleteModal>
        </div>
      </div>
    );
  }
}

export default Overtime;
