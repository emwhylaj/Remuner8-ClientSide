import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, FormFeedback, Input } from 'reactstrap';

class RegistrationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      data: {
        email: '',
        firstName: '',
        otherName: '',
        lastName: '',
        dateOfBirth: '',
        maritalStatus: '',
        gender: '',
        state: '',
        country: '',
        phoneNumber: '',
        phoneNumberPrefix: '+234',
        address: '',
        dateEmployed: '',
        bank: '',
        accountNumber: '',
        role: '',
        password: '',
        confirmPassword: ''
      },
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleOnBlurEmail = this.handleOnBlurEmail.bind(this);
  }

  // handle data fields state change
  handleChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value
      },
      errors: {
        ...this.state.errors,
        [e.target.name]: ''
      }
    });
  };

  validate = () => {
    const {
      data: { password, confirmPassword },
      errors
    } = this.state;
    if (password.length < 8 || password.length > 32)
      errors.password = 'Password must be 8 - 32 characters long.';
    if (confirmPassword !== password)
      errors.confirmPassword = 'Passwords must match.';
    return errors;
  };

  handleOnBlurEmail = () => {
    const {
      data: { email },
      errors
    } = this.state;
    if (email === '') errors.email = 'Email cannot be blank';
    if (!errors.email) {
      errors.emailState = 'valid';
      this.setState({ errors });
      // Call an api here
    } else {
      this.setState({ errors });
    }
  };

  handleOnBlurPassword = () => {
    const {
      data: { password, confirmPassword },
      errors
    } = this.state;

    if (password.length < 8 || password.length > 32)
      errors.password = 'Password must be 8 - 32 characters long.';
    if (confirmPassword !== password)
      errors.confirmPassword = 'Passwords must match.';
    if (!errors.password) {
      errors.passwordState = 'valid';
      this.setState({ errors });
      if (!errors.confirmPassword) {
        errors.confirmPasswordState = 'valid';
        // Call an api here
      }
    } else this.setState({ errors });
  };

  handleSubmit = async e => {
    e.preventDefault();
    const formErrors = this.validate();
    const {
      data: { email, confirmPassword },
      errors: { emailState, confirmPasswordState }
    } = this.state;
    if (emailState && confirmPasswordState) {
      //Call an api here

      // const response = fetch('https://localhost:44333/api/Register', {
      //   method: 'POST',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     Email: email,
      //     Password1: confirmPassword
      //   })
      // });
      // console.log(response);

      //const backendResponse = await response.json(); // wait for data to reach database
      //console.log(backendResponse);
      // fetch('https://localhost:44333/api/Register', {
      //   method: 'post',
      //   headers: {
      //     Accept: 'application/json',
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     Email: email,
      //     Password1: confirmPassword
      //   })
      // })
      //   .then(Response => Response.json())
      //   .then(Result => {
      //     if (Result.Status === 'Ok') this.props.history.push('/admin');
      //     else alert('Sorrrrrry !!!! Un-authenticated User !!!!!');
      //   });
    } else {
      console.log('errors are around');
      this.setState({ formErrors });
    }
  };

  render() {
    // eslint-disable-next-line
    const { data, errors } = this.state;
    return (
      <>
        <p className="text-center mb-4">Access your dashboard</p>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup className="mb-3">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email Address"
              required
              valid={errors.emailState === 'valid' ? true : false}
              invalid={errors.email ? true : false}
              value={data.email}
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurEmail(e)}
            />
            <FormFeedback>{errors.email}</FormFeedback>
          </FormGroup>

          <FormGroup className="mb-3">
            <Input
              id="password"
              name="password"
              type="password"
              required
              value={data.password}
              valid={errors.passwordState === 'valid' ? true : false}
              invalid={errors.password ? true : false}
              placeholder="Enter Password"
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurPassword(e)}
            />
            <FormFeedback>{errors.password}</FormFeedback>
          </FormGroup>
          <FormGroup className="mb-3">
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              value={data.confirmPassword}
              valid={errors.confirmPasswordState === 'valid' ? true : false}
              invalid={errors.confirmPassword ? true : false}
              placeholder="Confirm Password"
              onChange={e => this.handleChange(e)}
              onBlur={e => this.handleOnBlurPassword(e)}
            />
            <FormFeedback>{errors.confirmPassword}</FormFeedback>
          </FormGroup>
          <Button type="submit" color="primary" block>
            SIGN UP
          </Button>
        </Form>
        <p className="text-muted text-center mt-4">
          Already have an account?
          <Link to="/login"> Sign In</Link>
        </p>
      </>
    );
  }
}

export default RegistrationForm;
