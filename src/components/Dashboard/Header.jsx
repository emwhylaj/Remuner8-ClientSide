import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CardHeader from 'components/Dashboard/CardHeader';

const Header = ({ employeeCount, departmentCount }) => (
  <div className="header pb-8 pt-5 pt-md-8">
    <Container fluid>
      <div className="header-body">
        <Row>
          <Col lg={6} xl={3}>
            <CardHeader
              title="EMPLOYEES"
              stat={employeeCount}
              bgColor="danger"
              icon="fas fa-users"
              arrow="fa-arrow-up"
            />
          </Col>
          <Col lg={6} xl={3}>
            <CardHeader
              title="DEPARTMENTS"
              stat={departmentCount}
              bgColor="warning"
              icon="ni ni-money-coins"
              arrow="fa-arrow-down"
            />
          </Col>
          <Col lg={6} xl={3}>
            <CardHeader
              title="EXPENDITURE"
              stat="924"
              bgColor="yellow"
              icon="fas fa-chart-bar"
              arrow="fa-arrow-down"
            />
          </Col>
          <Col lg={6} xl={3}>
            <CardHeader
              title="PERFORMANCE"
              stat="49.7%"
              bgColor="info"
              icon="fas fa-percent"
              arrow="fa-arrow-up"
            />
          </Col>
        </Row>
      </div>
    </Container>
  </div>
);

export default Header;
