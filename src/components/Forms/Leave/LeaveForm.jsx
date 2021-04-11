import React from 'react';
import { Col, FormGroup, Input } from 'reactstrap';
import CustomForm from 'components/Forms/CustomForm';
import DatePicker from '../DatePicker';
import SelectBox from '../SelectBox';

const leaveTypes = ['Select Leave Type', 'Casual Leave 12 days'];

const LeaveForm = props => {
  const handleSubmit = e => {
    e.preventDefault();
    props.toggle();
  };
  return (
    <CustomForm toggleModal={props.toggle} handleSubmit={handleSubmit}>
      {props.data.map(leave => (
        <Col>
          <FormGroup>
            <label className="col-form-label">
              Leave Type <span className="text-danger">*</span>
            </label>
            <SelectBox options={leaveTypes} defaultValue={leave.reason} />
            <label for="exampleDate">
              From <span className="text-danger">*</span>
            </label>
            <DatePicker date={leave.from} />
            <label for="exampleDate">
              To <span className="text-danger">*</span>
            </label>
            <DatePicker date={leave.to} />
            <label for="exampleDate">
              Number of days <span className="text-danger">*</span>
            </label>
            <Input type="text" defaultValue={leave.days}></Input>
            <label for="exampleDate">
              Remaining Leaves<span className="text-danger">*</span>
            </label>
            <Input type="text"></Input>
            <label for="exampleDate">
              Leave Reason<span className="text-danger">*</span>
            </label>
            <Input type="textarea" defaultValue={leave.leaveType}></Input>
          </FormGroup>
        </Col>
      ))}
    </CustomForm>
  );
};

export default LeaveForm;
