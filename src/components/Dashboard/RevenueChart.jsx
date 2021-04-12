import React from 'react';
import classnames from 'classnames';
// react plugin used to create charts
import { Line } from 'react-chartjs-2';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Row,
  Col
} from 'reactstrap';
import { chartExample1 } from 'variables/charts.js';

const RevenueChart = props => {
  return (
    <Card className="bg-gradient-default shadow">
      <CardHeader className="bg-transparent">
        <Row className="align-items-center">
          <Col className="col">
            <h6 className="text-uppercase text-light ls-1 mb-1">Overview</h6>
            <h2 className="text-white mb-0">Total Revenue</h2>
          </Col>
          <Col>
            <Nav className="justify-content-end" pills>
              <NavItem>
                <NavLink
                  className={classnames('py-2 px-3', {
                    active: props.activeNav === 1
                  })}
                  href="#pablo"
                  onClick={e => props.toggleNavs(e, 1)}
                >
                  <span className="d-none d-md-block">Month</span>
                  <span className="d-md-none">M</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames('py-2 px-3', {
                    active: props.activeNav === 2
                  })}
                  data-toggle="tab"
                  href="#pablo"
                  onClick={e => props.toggleNavs(e, 2)}
                >
                  <span className="d-none d-md-block">Week</span>
                  <span className="d-md-none">W</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        {/* Chart */}
        <div className="chart">
          <Line
            data={chartExample1[props.chartExample1Data]}
            options={chartExample1.options}
            getDatasetAtEvent={e => console.log(e)}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default RevenueChart;
