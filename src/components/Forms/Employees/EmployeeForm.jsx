import React from 'react';
import { Form, Row, Col, FormGroup, Input } from 'reactstrap';
import SelectBox from '../SelectBox';

const departmentOptions = [
  'Select Department',
  'Software Eng',
  'IT Management',
  'Marketing',
  'Option 4'
];

const jobOptions = [
  'Select Job Description',
  'Web Designer',
  'Web Developer',
  'Android Developer',
  '.NET Developer'
];

const EmployeeForm = props => {
  return (
    <Form>
      <Row>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <Input type="text" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">Last Name</label>
            <Input type="text" />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Username <span className="text-danger">*</span>
            </label>
            <Input type="text" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Email <span className="text-danger">*</span>
            </label>
            <Input type="email" placeholder="johndoe@example.com" />
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Employee ID <span className="text-danger">*</span>
            </label>
            <Input
              type="text"
              readOnly={props.readOnly}
              placeholder="FT-0001"
            />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Date Joined <span className="text-danger">*</span>
            </label>
            <div className="cal-icon">
              <Input className="" type="date" />
            </div>
          </FormGroup>
        </Col>

        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">Phone </label>
            <Input type="tel" placeholder="9876543210" />
          </FormGroup>
        </Col>
        <Col sm={6}>
          <FormGroup>
            <label className="col-form-label">
              Department <span className="text-danger">*</span>
            </label>
            <SelectBox label="Select Department" options={departmentOptions} />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <label className="col-form-label">
              Job Description <span className="text-danger">*</span>
            </label>
            <SelectBox label="Select Job Description" options={jobOptions} />
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default EmployeeForm;
