import React from 'react';
import { Col, Form, Row, Button } from 'reactstrap';

const CustomForm = ({ children, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Row>
        {Array.isArray(children)
          ? children.map(child => <Col>{child}</Col>)
          : children}
      </Row>
      <Row className="justify-content-center">
        <Button color="primary" type="submit" style={{ minWidth: '200px' }}>
          SAVE
        </Button>
      </Row>
    </Form>
  );
};

export default CustomForm;
