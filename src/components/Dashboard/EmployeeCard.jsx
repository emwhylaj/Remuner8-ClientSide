import React from 'react';
import { Card, CardHeader, Button, Row, Col } from 'reactstrap';
import EmployeeTable from 'components/Employees/Table/EmployeeTable';

const EmployeeCard = props => (
  <Card className="shadow">
    <CardHeader className="border-0">
      <Row className="align-items-center">
        <Col className="col">
          <h3 className="mb-0">Employees</h3>
        </Col>
        <div className="col text-right">
          <Button
            color="primary"
            onClick={() =>
              props.history.push('/admin/employees/employees-list')
            }
            size="sm"
          >
            See all
          </Button>
        </div>
      </Row>
    </CardHeader>
    <EmployeeTable />
  </Card>
);

export default EmployeeCard;
