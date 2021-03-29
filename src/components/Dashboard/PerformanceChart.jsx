import React from 'react';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import { chartExample2 } from 'variables/charts.js';

const PerformanceChart = () => (
  <Card className="shadow">
    <CardHeader className="bg-transparent">
      <Row className="align-items-center">
        <Col>
          <h6 className="text-uppercase text-muted ls-1 mb-1">Performance</h6>
          <h2 className="mb-0">Total working hours</h2>
        </Col>
      </Row>
    </CardHeader>
    <CardBody>
      {/* Chart */}
      <div className="chart">
        <Bar data={chartExample2.data} options={chartExample2.options} />
      </div>
    </CardBody>
  </Card>
);

export default PerformanceChart;
