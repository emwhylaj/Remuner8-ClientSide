import React from 'react';
import { Card, CardBody, CardGroup, Progress } from 'reactstrap';
import styled from 'styled-components';

const CardContainer = styled(Card)`
  @media (max-width: 1200px) {
    flex: 1 0 50% !important;
    margin-bottom: 15px !important;
  }
`;

const SummaryCards = () => {
  return (
      <CardGroup>
        <CardContainer>
          <CardBody>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span className="d-block">New Employees</span>
              </div>
              <div>
                <span className="text-success">+10%</span>
              </div>
            </div>
            <h3 className="mb-3">10</h3>
            <Progress value="10" />
            <p className="mb-0 d-flex justify-content-between">
              Overall Employees <span>218</span>
            </p>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span className="d-block">Earnings</span>
              </div>
              <div>
                <span className="text-success">+12.5%</span>
              </div>
            </div>
            <h3 className="mb-3">&#8358;142,300</h3>
            <Progress value="50" />
            <p className="mb-0 d-flex justify-content-between">
              Previous Month <span>&#8358;115,852</span>
            </p>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span className="d-block">Expenditure</span>
              </div>
              <div>
                <span className="text-danger">-2.8%</span>
              </div>
            </div>
            <h3 className="mb-3">&#8358;8,500</h3>
            <Progress value="40" />
            <p className="mb-0 d-flex justify-content-between">
              Previous Month <span>&#8358;7,500</span>
            </p>
          </CardBody>
        </CardContainer>

        <CardContainer>
          <CardBody>
            <div className="d-flex justify-content-between mb-3">
              <div>
                <span className="d-block">Profit</span>
              </div>
              <div>
                <span className="text-danger">-75%</span>
              </div>
            </div>
            <h3 className="mb-3">&#8358;112,000</h3>
            <Progress value="90" />
            <p className="mb-0 d-flex justify-content-between">
              Previous Month <span>&#8358;110,000</span>
            </p>
          </CardBody>
        </CardContainer>
      </CardGroup>
  );
};

export default SummaryCards;
