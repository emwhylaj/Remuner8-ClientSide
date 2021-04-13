import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import DatePicker from '../DatePicker';
import SelectBox from '../SelectBox';

const EmptyForm = ({ employees }) => {
  return (
    <>
      <Col xs={12}>
        <FormGroup>
          <label className="col-form-label">
            Select Employee <span className="text-danger">*</span>
          </label>
          <SelectBox options={employees} />
        </FormGroup>
      </Col>

      <Col xs={12}>
        <FormGroup>
          <label for="exampleDate">
            Time In<span className="text-danger">*</span>
          </label>
          <Input type="number" />
        </FormGroup>
      </Col>

      <Col xs={12}>
        <FormGroup>
          <label for="exampleDate">
            Time Out<span className="text-danger">*</span>
          </label>
          <Input type="number" />
        </FormGroup>
      </Col>

      <Col>
        <FormGroup>
          <label for="description">
            Hours Worked<span className="text-danger">*</span>
          </label>
          <Input name="description" />
        </FormGroup>
      </Col>
    </>
  );
};

export default EmptyForm;
