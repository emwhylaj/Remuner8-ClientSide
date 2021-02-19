import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  Label
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

import '../../../assets/scss/forms.styles.scss';

class LoginForm extends Component {
  static displayName = LoginForm.name;
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      formText: 'Your username is most likely your email address',
      validate: {
        emailState: '',
        isValid: false,
        password: '',
        isValidPassword: false
      },
      disableButton: false
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    const { validate } = this.state;
    if (!value) {
      validate.emailState = '';
      validate.isValid = false;
      this.setState({
        formText: 'Your username is most likely your email address',
        validate
      });
    }
    this.setState({
      [name]: value,
      formText: ''
    });
  };

  validateEmail = () => {
    const { email, validate } = this.state;
    // if (emailRegex.test(email)) {
    //   validate.emailState = 'has-success';
    //   validate.isValid = true;
    // } else {
    //   validate.emailState = 'has-danger';
    // }
    this.setState({ validate });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // this.validateEmail();
   // this.validatePassword();
    const { validate: { isValid, isValidPassword }, email, password, disableButton } = this.state;
    console.log(this.state);
    if (isValid && isValidPassword) {
      this.setState({ disableButton: !disableButton });
      // Call api to redirect to dashboard
      const response = await fetch('https://localhost:44333/api/Login', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          Email: email,
          Password: password
        })
      });
      console.log(response);
      const backendResponse = await response.json(); // wait for data to reach database
      console.log(backendResponse);
    }
    else console.log("oga commot");
  };

  render() {
    const { email, validate, formText, password } = this.state;
    return (
      <>
        <p className="text-muted text-center mb-4">
          Don't have an account yet?
        </p>
        <Form id="login-form" onSubmit={this.handleSubmit}>
          <FormGroup className="mb-4">
            <Label htmlFor="email">Username</Label>
            <Input
              type="email"
              name="email"
              id="email"
              title="Username"
              placeholder="Username"
              autoComplete="username"
              required
              autoFocus
              value={email}
              valid={validate.emailState === 'has-success'}
              invalid={validate.emailState === 'has-danger'}
              onChange={e => this.handleChange(e)}
            />
            <FormFeedback>Invalid Username/Email Address</FormFeedback>
            <FormText>{formText}</FormText>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="current-password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              title="Password"
              autoComplete="current-password"
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-`~()_=+{}\|'.<>;:,/]).{8,33}$"
              required
              value={password}
              valid={validate.password === 'has-success'}
              invalid={validate.password === 'has-danger'}
              onChange={e => this.handleChange(e)}
            />
            <FormFeedback>Invalid Password</FormFeedback>
          </FormGroup>

          <FormGroup>
            <Button type="submit" id="sign-in" className="mt-4" color="primary" block>
              SIGN IN
            </Button>
          </FormGroup>
        </Form>
        <div className="d-grid gap-2 mt-4 text-center">
          <Link to="/resetPassword">Forgot password?</Link>
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
