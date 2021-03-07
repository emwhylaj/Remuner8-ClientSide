import React from 'react';
import { Row, Col } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';

const options = [ "Web Developer", "IOS Developer", "Product Designer", "Android Developer"]

const SearchRow = () => {
  return (
    <Row>
      <Col sm={6} md={3}>
        <FormInput label="Employee ID" type="text" />
      </Col>
      <Col sm={6} md={3}>
        <FormInput label="Employee Name" type="text" />
      </Col>
      <Col sm={6} md={3}>
        <SelectBox className="p-2" options={options}>
        Select Designation    
        </SelectBox>
      </Col>
      <Col sm={6} md={3}>
        <CustomButton className="btn btn-block">Search</CustomButton>
      </Col>
    </Row>
  );
};

export default SearchRow;
