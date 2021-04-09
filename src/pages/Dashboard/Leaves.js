import React, { Component } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';

//import LoaderRing from 'components/Loading/Loader';
import PageHeader from 'components/Headers/PageHeader';
import CustomButton from 'components/Custom-Buttons/Button';

import CustomModal from 'components/Modals/CustomModal';

import DeleteModal from 'components/Modals/DeleteModal';
import LeaveSearchRow from 'components/Sidebar/LeaveSearchRow';
import LeaveForm from 'components/Forms/Leave/LeaveForm';

class Leaves extends Component {
  state = {
    loading: true,
    departments: [],
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
  //   mockUrl = 'https://604529e6c0194f00170bca44.mockapi.io/api/leaves';
  //   url = 'https://localhost:44333/api/leaves';

  fetchLeaves = async () => {
    try {
      const response = await fetch(this.mockUrl);

      if (response.ok) {
        const data = await response.json();
        this.setState({ loading: false, departments: data });
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
      departments,
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
            <Col sm="3">
              <Card body style={{ borderRadius: 4 }}>
                <CardTitle tag="h2">Today Presents</CardTitle>
                <CardText tag="h3">12 / 60</CardText>
              </Card>
            </Col>
            <Col sm="3">
              <Card body style={{ borderRadius: 4 }}>
                <CardTitle tag="h2">Planned Leaves</CardTitle>
                <CardText tag="h3">8 Today</CardText>
              </Card>
            </Col>
            <Col sm="3">
              <Card body style={{ borderRadius: 4 }}>
                <CardTitle tag="h2">Unplanned Leaves</CardTitle>
                <CardText tag="h3">12 / 60</CardText>
              </Card>
            </Col>
            <Col sm="3">
              <Card body style={{ borderRadius: 4 }}>
                <CardTitle tag="h2">Pending Requests</CardTitle>
                <CardText tag="h3">12</CardText>
              </Card>
            </Col>
          </Row>
          <br></br>
          <LeaveSearchRow />
          <Row>
            <Col md={12}>
              {/* {loading ? (
                // <LoaderRing />
              ) : (
                <DepartmentsTable data={departments} />
              )} */}
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
            label="Edit Department"
            isOpen={editModalOpen}
            toggle={this.toggleEditModal}
          >
            <LeaveForm />
          </CustomModal>
          <DeleteModal
            isOpen={deleteModalOpen}
            toggle={this.toggleDeleteModal}
            label="Delete Department"
          >
            Are you sure you want to delete the leave?
          </DeleteModal>
        </div>
      </div>
    );
  }
}

export default Leaves;
