import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from 'components/Forms/CustomForm';

const DepartmentForm = () => {
  return (
    <CustomForm>
      <Col>
        <FormGroup>
          <label className="col-form-label">
            Department Name <span className="text-danger">*</span>
          </label>
          <Input type="text" />
        </FormGroup>
      </Col>
    </CustomForm>
  );
};

export default DepartmentForm;
