import React from 'react';
import { Row, Col } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';

const options = ['Pending', 'Approved', 'Rejected'];
const roleOptions = ['Casual Leave', 'Medical Leave', 'Loss of Pay'];

const LeaveSearchRow = () => {
  return (
    <Row className="mb-3 justify-content-around">
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormInput label="Employee Name" type="text" />
      </Col>
      <Col sm={6} md={5} lg={4} xl={2}>
        <SelectBox
          focusLabel="Leave Type"
          label="--Select--"
          options={roleOptions}
        ></SelectBox>
      </Col>
      <Col sm={6} md={5} lg={4} xl={2}>
        <SelectBox
          className="p-2"
          focusLabel="Leave Status"
          label="--Select--"
          options={options}
        ></SelectBox>
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormInput label="From" type="date" />
      </Col>
      <Col sm={6} md={5} lg={3} xl={2}>
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

export default LeaveSearchRow;
