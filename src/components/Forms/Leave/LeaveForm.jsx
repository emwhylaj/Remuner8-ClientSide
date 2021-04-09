import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from 'components/Forms/CustomForm';

const LeaveForm = props => {
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
            Leave Type <span className="text-danger">*</span>
          </label>
          <Input type="select" required>
          <option>Select Leave Type</option>
          <option>Casual Leave 12 Days</option>
          <option>Medical leave</option>
          <option>Loss of Pay</option>
          </Input>
          <label for="exampleDate">From <span className="text-danger">*</span></label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder">
          </Input>
          <label for="exampleDate">To <span className="text-danger">*</span></label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="date placeholder">
          </Input>
          <label for="exampleDate">Number of days <span className="text-danger">*</span></label>
        <Input
          type="text"
          
         >
          </Input>
          <label for="exampleDate">Remaining Leaves<span className="text-danger">*</span></label>
        <Input
          type="text"
         
         >
          </Input>
          <label for="exampleDate">Leave Reason<span className="text-danger">*</span></label>
        <Input
          type="textarea"
         
         >
          </Input>
        </FormGroup>
      </Col>
    </CustomForm>
  );
};

export default LeaveForm;
