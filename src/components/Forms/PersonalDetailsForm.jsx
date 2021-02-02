import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Label,
  Col,
  Row,
} from 'reactstrap';

export default class PersonalDetailsForm extends Component {
  back = e => {
    e.preventDefault();
    this.props.previousStep();
  };
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { data, errors, handleChange } = this.props;
    return (
      <>
        <h5 className="text-center text-muted mb-4">Enter Personal Details</h5>
        <Form>
          <FormGroup row className="mb-3">
            <Col sm={3} xs={5} md={5} lg={5} xl={6}>
              <Input
                id="gender"
                name="gender"
                type="select"
                className="form-select"
                value={data.gender}
                required
                invalid={errors.gender ? true : false}
                onChange={handleChange}
              >
                <option value="">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Input>
              <FormFeedback>{errors.gender}</FormFeedback>
            </Col>
            <Col sm={7} className="col-7">
              <Input
                id="country"
                name="country"
                type="select"
                className="form-select"
                value={data.country}
                required
                invalid={errors.country ? true : false}
                onChange={handleChange}
              >
                <option value="">Nationality</option>
              </Input>
              <FormFeedback>{errors.country}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={5} className="col-5">
              <Input
                id="state"
                name="state"
                type="select"
                className="form-select"
                value={data.state}
                required
                invalid={errors.state ? true : false}
                onChange={handleChange}
              >
                <option value="">State</option>
              </Input>
              <FormFeedback>{errors.state}</FormFeedback>
            </Col>
            <Col sm={7} className="col-7">
              <Input
                id="maritalStatus"
                name="maritalStatus"
                type="select"
                className="form-select"
                aria-label="select marital status"
                value={data.maritalStatus}
                required
                invalid={errors.maritalStatus ? true : false}
                onChange={handleChange}
              >
                <option value="">Marital Status</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
              </Input>
              <FormFeedback>{errors.maritalStatus}</FormFeedback>
            </Col>
          </FormGroup>

          <FormGroup className="align-items-center mt-3">
            <Col xs={5} sm={4} md={5} className="pr-0 mb-1">
              <Label for="dateOfBirth" className="mb-0 text-muted">
                Date of Birth
              </Label>
            </Col>
            <Col xs={7} sm={6} md={12} lg={6} xl={5}>
              <Input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                required
                value={data.dateOfBirth}
                onChange={handleChange}
              />
            </Col>
          </FormGroup>

          <Row className="mt-4 justify-content-center px-4">
            <Col xs="6">
              <Button outline color="primary" onClick={this.back}>
                BACK
              </Button>
            </Col>
            <Col xs="6">
              <Button color="primary" onClick={this.continue}>
                CONTINUE
              </Button>
            </Col>
          </Row>
        </Form>
      </>
    );
  }
}
