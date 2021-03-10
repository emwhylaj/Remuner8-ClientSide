import React from 'react';
import { Form, Row, Col, FormGroup, Input } from 'reactstrap';
import SelectDepartment from './SelectDepartment';
import SelectJobDescription from './SelectJobDescription';

const EditForm = props => {
  return (
    <Form>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              First Name<span className="text-danger">*</span>
            </label>
            <Input type="text" value="John" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">Last Name</label>
            <Input type="text" value="Doe" />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Username <span className="text-danger">*</span>
            </label>
            <Input type="text" value="johndoe" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Email <span className="text-danger">*</span>
            </label>
            <Input type="email" value="johndoe@example.com" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Employee ID <span className="text-danger">*</span>
            </label>
            <Input
              type="text"
              readonly=""
              className="form-control floating"
              value="FT-0001"
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Date Joined <span className="text-danger">*</span>
            </label>
            <div className="cal-icon">
              <Input className="datetimepicker" type="text" />
            </div>
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">Phone </label>
            <Input type="text" value="9876543210" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <label>
              Department <span className="text-danger">*</span>
            </label>
            <SelectDepartment />
          </FormGroup>
        </Col>
        <Col md={6} data-select2-id="38">
          <FormGroup data-select2-id="37">
            <label>
              Designation <span className="text-danger">*</span>
            </label>
            <SelectJobDescription />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default EditForm;
