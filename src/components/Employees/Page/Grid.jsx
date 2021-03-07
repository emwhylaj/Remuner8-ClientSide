import React, { useState, useEffect } from 'react';
import { Row, Col } from 'reactstrap';

import Card from 'components/Employees/Page/Card';
import DummyImage from 'assets/img/theme/team-1-800x800.jpg';
import LoaderRing from 'components/Loading/Loader';

const Grid = props => {
  const [state, setState] = useState({
    loading: true,
    employees: null
  });

  useEffect(() => {
    fetch('https://604529e6c0194f00170bca44.mockapi.io/api/users/jk')
      .then(res => res.json())
      .then(
        users => {
          setState({ loading: false, employees: users });
        },
        error => {
          console.log(error);
          alert(error);
        }
      );
  }, []);
  console.log(state.employees);
  return (
    <Row>
      {state.loading && !state.employees ? (
        <LoaderRing />
      ) : (
        state.employees.map((employee, index) => (
          <Col xs={12} sm={6} md={4} lg={4} xl={3} key={index}>
            <Card imgSrc={employee.avatar && DummyImage} data={employee} key={employee.id} />
          </Col>
        ))
      )}
    </Row>
  );
};

export default Grid;
