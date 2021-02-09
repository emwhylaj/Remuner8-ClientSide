import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const ResetPassword = () => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <h3 className="title text-center text-muted">Forgot Password?</h3>
      <p className="subtitle mt-3 text-center">
        Enter your email to get a password reset link
      </p>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <FormGroup>
          <Input type="email" placeholder="Email Address" required />
        </FormGroup>

        <FormGroup>
          <Button type="submit" color="primary" block>
            RESET PASSWORD
          </Button>
        </FormGroup>
      </Form>
      <p className="text-center">
        Remember your password? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default ResetPassword;
