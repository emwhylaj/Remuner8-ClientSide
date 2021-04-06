import React from 'react';
import { Form, Row, Button } from 'reactstrap';

const CustomForm = ({ children, handleSubmit }) => {
  
  return (
    <Form onSubmit={handleSubmit}>
      <Row>{children}</Row>
      <Row className="justify-content-center">
        <Button
          color="primary"
          type="submit"
          style={{ minWidth: '200px' }}
        >
          SAVE
        </Button>
      </Row>
    </Form>
  );
};

export default CustomForm;
