import React from 'react';
import { Row, Col, FormGroup } from 'reactstrap';

import CustomButton from 'components/Custom-Buttons/Button';
import FormInput from 'components/Forms/Input';
import SelectBox from 'components/Forms/SelectBox';

const options = [
  'Select Job Description',
  'Web Developer',
  'IOS Developer',
  'Product Designer',
  'Android Developer'
];

const SearchRow = () => {
  return (
    <Row className="mb-3 justify-content-around">
      <Col sm={6} md={5} lg={3} xl={2}>
        <FormInput label="Employee ID" type="text" />
      </Col>
      <Col sm={6} md={5} lg={4} xl={3}>
        <FormInput label="Employee Name" type="text" />
      </Col>
      <Col sm={6} md={5} lg={4} xl={3}>
        <FormGroup>
          <SelectBox
            options={options}
            label="Select Job Description"
            focusLabel="Job Description"
          />
        </FormGroup>
      </Col>
      <Col sm={6} md={5} lg={3}>
        <CustomButton className="btn btn-block mt-1">
          Search
        </CustomButton>
      </Col>
    </Row>
  );
};

export default SearchRow;
