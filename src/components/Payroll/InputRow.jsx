import React from 'react';
import { Row, Col } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';
import DatePicker from 'components/Forms/DatePicker';

const options = ['Pending', 'Approved', 'Rejected'];
const roleOptions = ['Employee', 'Manager'];

const InputRow = () => {
  return (
    <Row className="mb-3 justify-content-around">
      <Col sm={6} md={5} lg={3} xl={3}>
        <FormInput label="Employee Name" type="text" />
      </Col>
      <Col sm={6} md={5} lg={4} xl={3}>
        <SelectBox
          focusLabel="Job Description"
          label="--Select--"
          options={roleOptions}
          adjustLabel
        ></SelectBox>
      </Col>
      <Col sm={6} md={5} lg={4} xl={3}>
        <SelectBox
          className="p-2"
          focusLabel="Leave Type"
          label="Select Leave Type"
          options={options}
          adjustLabel
        ></SelectBox>
      </Col>
      <Col sm={6} md={5} lg={3} xl={3}>
       <DatePicker label="From" adjustLabel/>
      </Col>
      <Col sm={6} md={5} lg={3} xl={3}>
        <FormInput label="To" type="date" />
      </Col>
      <Col sm={6} md={5} lg={2}>
        <CustomButton className="btn btn-block" style={{}}>
          Search
        </CustomButton>
      </Col>
    </Row>
  );
};

export default InputRow;
