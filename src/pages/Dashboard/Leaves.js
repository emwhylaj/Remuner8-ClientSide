import React, { Component } from 'react';
import { Row, Col, } from 'reactstrap';

import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';

import CustomModal from 'components/Modals/CustomModal';

import DeleteModal from 'components/Modals/DeleteModal';
import LeaveSearchRow from 'components/Sidebar/LeaveSearchRow';
import LeaveForm from 'components/Forms/Leave/LeaveForm';
import LeaveTable from 'components/Tables/LeaveTable';
import '../../assets/css/Leave.css';

class Leaves extends Component {
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

  mockUrl = 'https://6072ea32e4e0160017ddf097.mockapi.io/api/leaves';
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
                <i className="fa fa-plus"></i> Add Leave
              </CustomButton>
            }
          />
          <Row>
            <Col md="3">
              <div className="stats-info">
                <h6>Today Presents</h6>
                <h4>12 / 60</h4>
              </div>
            </Col>
            <Col md="3">
              <div className="stats-info">
                <h6>Planned Leaves</h6>
                <h4>8  <span>Today</span></h4>
              </div>
            </Col>
            <Col md="3">
              <div className="stats-info">
                <h6>Unplanned Leaves</h6>
                <h4>0 <span>Today</span></h4>
              </div>
            </Col>
            <Col md="3">
              <div className="stats-info">
                <h6>Pending Requests</h6>
                <h4>12</h4>
              </div>
            </Col>
          </Row>
          <br></br>
          <LeaveSearchRow />
          <Row>
            <Col md={12}>
              {loading ? (
                <LoaderRing />
              ) : (
                <LeaveTable
                  data={leaves}
                  onEdit={this.handleEdit}
                  onDelete={this.toggleDeleteModal}
                  // setFormData={this.setFormData}
                />
              )}
            </Col>
          </Row>
          <CustomModal
            label="Add Leave"
            isOpen={addModalOpen}
            toggle={this.toggleAddModal}
          >
            <LeaveForm toggle={this.toggleAddModal} />
          </CustomModal>
          <CustomModal
            label="Edit Leave"
            isOpen={editModalOpen}
            toggle={this.toggleEditModal}
          >
            <LeaveForm data={this.state.formData} />
          </CustomModal>
          <DeleteModal
            isOpen={deleteModalOpen}
            toggle={this.toggleDeleteModal}
            label="Delete Leave"
          >
            Are you sure you want to delete the leave?
          </DeleteModal>
        </div>
      </div>
    );
  }
}

export default Leaves;
