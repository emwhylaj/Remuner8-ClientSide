import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
} from 'reactstrap';

class ContactDetailsForm extends Component {
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
        <h5 className="text-center text-muted mb-4">
          Enter Contact Information
        </h5>
        <Form>
          <FormGroup className="mb-4">
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <Input
                  className="form-select"
                  name="phoneNumberPrefix"
                  title="Phone Number Extension"
                  value={data.phoneNumberPrefix}
                  type="select"
                  onChange={handleChange}
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+132">+132</option>
                  <option value="+911">+911</option>
                  <option value="+323">+323</option>
                </Input>
              </InputGroupAddon>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                title="Phone Number"
                placeholder="Phone Number"
                required
                value={data.phoneNumber}
                onChange={handleChange}
              />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <Input
              id="address"
              name="address"
              type="textarea"
              title="Address"
              rows="3"
              placeholder="Residential Address"
              value={data.address}
              required
              invalid={errors.address ? true : false}
              onChange={handleChange}
            />
            <FormFeedback>{errors.address}</FormFeedback>
          </FormGroup>

          <div className="d-flex justify-content-around mt-4">
            <Button outline color="primary" onClick={this.back}>
              BACK
            </Button>

            <Button color="primary" onClick={this.continue}>
              CONTINUE
            </Button>
          </div>
        </Form>
      </>
    );
  }
}

export default ContactDetailsForm;
