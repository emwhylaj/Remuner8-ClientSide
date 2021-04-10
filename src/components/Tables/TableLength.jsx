import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';

const TableLength = props => (
  <Col sm={12} md={6}>
    <Wrapper>
      <Label>
        Show
        <select
          className="w-auto mx-2 custom-select text-darker"
          onChange={e => props.togglePageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        Entries
      </Label>
    </Wrapper>
  </Col>
);

export default TableLength;

const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    text-align: center;
  }
`;

const Label = styled.label`
  font-weight: normal;
  text-align: left;
  white-space: nowrap;
  color: white;
`;
