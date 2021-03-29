import React from 'react';
import { Row, Col } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';

const options = [ "--Select--", "Pending", "Approved", "Rejected"]
const roleOptions = ["--Selct--","Employee","Manager"]

const InputRow = () => {
  return (
    <Row className="mb-3 justify-content-around">
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormInput label="Employee Name" type="text" />
      </Col>
      <Col sm={6} md={5} lg={4} xl={2}>
        <SelectBox className="p-2" options={roleOptions}>
      Job Description  
        </SelectBox>
      </Col>
      <Col sm={6} md={5} lg={4} xl={2}>
        <SelectBox className="p-2" options={options}>
       Leave Status  
        </SelectBox>
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
          <FormInput label="From" type="date"/>     
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormInput label="To" type="date" />
      </Col>
      <Col sm={6} md={5} lg={2}>
        <CustomButton className="btn btn-block">Search</CustomButton>
      </Col>
    </Row>
  );
};

export default InputRow;
