import React from 'react';
import { Form, Row } from 'reactstrap';

const CustomForm = ({ children }) => (
  <Form>
    <Row>{children}</Row>
  </Form>
);

export default CustomForm;
