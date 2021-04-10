import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from 'components/Forms/CustomForm';

const DepartmentForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(props);
    props.toggle();
  };

  return (
    <CustomForm toggleModal={props.toggle} handleSubmit={handleSubmit}>
      <Col>
        <FormGroup>
          <label className="col-form-label">
            Department Name <span className="text-danger">*</span>
          </label>
          <Input type="text" required defaultValue={props.name} />
        </FormGroup>
      </Col>
    </CustomForm>
  );
};

export default DepartmentForm;
