import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';

const CardHeader = ({ title, stat, bgColor, icon, arrow }) => (
  <Card className="card-stats mb-4 mb-xl-0" style={{ wordWrap: 'normal' }}>
    <CardBody>
      <Row>
        <Col style={{ width: '50%' }}>
          <CardTitle tag="h5" className="text-uppercase text-muted mb-0">
            {title}
          </CardTitle>
          <span className="h2 font-weight-bold mb-0">{stat || 0}</span>
        </Col>
        <div className="col-auto">
          <div className={`icon icon-shape text-white rounded-circle shadow bg-${bgColor}`}>
            <i className={icon} />
          </div>
        </div>
      </Row>
      <p className="mt-3 mb-0 text-muted text-sm">
        <span className={`${arrow.includes('up') ? 'text-success' : 'text-danger'} mr-2`}>
          <i className={`fas ${arrow}`} /> 3.48%
        </span>
        <span className="text-nowrap">Since last week</span>
      </p>
    </CardBody>
  </Card>
);

export default CardHeader;
