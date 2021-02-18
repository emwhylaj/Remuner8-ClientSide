import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  FormFeedback,
  Input,
  Row
} from 'reactstrap';

export class UserDetailsForm extends Component {
  //     validate = () => {
  //         const { data } = this.props;
  //         //let property = input;
  //         let errors = {};
  //         // data["value"]
  //        if (data[`"${input}"`] === '')
  // errors.email = 'Please enter a valid email address';
  //         if (data.firstName.length === 0)
  //         errors.firstName = 'First Name cannot be blank';
  //         if (data.lastName.length === 0)
  //         errors.lastName = 'last Name cannot be blank';
  //         // if (data.password.length === 0)
  //         //   errors.password = 'Password must be between 8 and 32 characters.';
  //         // if (data.confirmPassword !== data.password)
  //         //   errors.confirmPassword = 'Password must match.';
  //         return errors;
  //     };

  //     handleSubmit = e => {
  //         e.preventDefault();
  //         const { data } = this.props;
  //         const errors = this.validate();
  //         if (Object.keys(errors).length === 0) {
  //             console.log(data);
  //             //this.setState(this.initialState());
  //             // Call an api here
  //         } else {
  //       this.setState({ errors });
  //     }
  // };

  continue = e => {
    e.preventDefault();
    //this.handleSubmit(e);
    this.props.nextStep(e);
  };

  render() {
    const { data, errors, handleChange } = this.props;
    return (
      <>
        <p className="text-muted text-center mb-4">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        <h5 className="text-center text-muted mb-4">Enter User Details</h5>
        <Form>
          <FormGroup className="mb-3">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              required
              value={data.email}
              invalid={errors.email ? true : false}
              onChange={handleChange}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup className="mb-3">
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={data.firstName}
              required
              invalid={errors.firstName ? true : false}
              onChange={handleChange}
            />
            <FormFeedback>{errors.firstName}</FormFeedback>
          </FormGroup>

          <FormGroup className="mb-3">
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={data.lastName}
              required
              invalid={errors.email ? true : false}
              onChange={handleChange}
            />
            <FormFeedback>{errors.lastName}</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Input
              id="otherName"
              name="otherName"
              type="text"
              title="Other Name"
              placeholder="Other Name"
              value={data.otherName}
              onChange={handleChange}
            />
          </FormGroup>
          <Row className="mt-4 px-4">
          <Button color="primary" onClick={this.continue}>
            CONTINUE
          </Button>
          </Row>
        </Form>
      </>
    );
  }
}

export default UserDetailsForm;
