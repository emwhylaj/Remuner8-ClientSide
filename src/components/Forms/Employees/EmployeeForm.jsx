import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import SelectBox from '../SelectBox';
import CustomForm from 'components/Forms/CustomForm';

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


const EmployeeForm = ({ data, toggle, readOnly }) => {
  const handleSubmit = e => {
    e.preventDefault();
    toggle();
  };
  
  console.log(data)
  return (
    <CustomForm toggleModal={toggle} onSubmit={handleSubmit}>
      {data ? (
        data.map(employee => (
          <>
            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  First Name <span className="text-danger">*</span>
                </label>
                <Input type="text" defaultValue={employee.firstName} required />
              </FormGroup>
            </Col>

            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">Last Name</label>
                <Input type="text" defaultValue={employee.firstName} required />
              </FormGroup>
            </Col>
            <Col sm={6}>
              <FormGroup>
                <label className="col-form-label">
                  Username <span className="text-danger">*</span>
                </label>
                <Input type="text" defaultValue={employee.firstName} required />
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
                <Input type="text" defaultValue={employee.firstName} required readOnly={readOnly} placeholder="FT-0001" />
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
                <SelectBox
                  label="Select Department"
                  options={departmentOptions}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <label className="col-form-label">
                  Job Description <span className="text-danger">*</span>
                </label>
                <SelectBox
                  label="Select Job Description"
                  options={jobOptions}
                />
              </FormGroup>
            </Col>
          </>
        ))
      ) : (
        <p>No data</p>
      )}
    </CustomForm>
  );
};

export default EmployeeForm;
