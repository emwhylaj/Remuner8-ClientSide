import React from 'react';
import { Row, Col } from 'reactstrap';

import Card from 'components/Employees/Page/Card';
import DummyImage from 'assets/img/theme/team-1-800x800.jpg';
import LoaderRing from 'components/Loading/Loader';

const Grid = props => {
  return (
    <Row>
      {props.loading && !props.employees ? (
        <LoaderRing />
      ) : (
        props.employees.map((employee, index) => (
          <Col xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <Card imgSrc={DummyImage} employee={employee} key={employee.id} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default Grid;
