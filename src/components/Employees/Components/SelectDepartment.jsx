import React from 'react';
import styled from 'styled-components';

const SelectDepartment = props => {
  return (
    <>
      <Select data-select2-id="16" tabIndex="-1" aria-hidden="true">
        <option data-select2-id="18">Select Department</option>
        <option>Web Development</option>
        <option>IT Management</option>
        <option>Marketing</option>
      </Select>
      <SpanContainer dir="ltr" data-select2-id="17">
        <span className="selection">
          <SpanSingleSelect
            role="combobox"
            aria-controls="select"
            aria-haspopup="true"
            aria-expanded="false"
            tabIndex="0"
            aria-labelledby="select2-kokx-container"
          >
            <SpanSelectRendered
              id="select2-kokx-container"
              role="textbox"
              aria-readonly="true"
              title="Select Department"
            >
              Select Department
            </SpanSelectRendered>
            <SpanSelectArrow role="presentation">
              <B role="presentation"></B>
            </SpanSelectArrow>
          </SpanSingleSelect>
        </span>
        <span className="dropdown-wrapper" aria-hidden="true"></span>
      </SpanContainer>
    </>
  );
};

export default SelectDepartment;

const Select = styled.select`
  border: 0;
  clip: rect(0 0 0 0);
  -webkit-clip-path: inset(50%);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
`;

const SpanContainer = styled.span`
  width: 100%;
  display: inline-block;
  margin: 0;
  position: relative;
  vertical-align: middle;
`;

const SpanSingleSelect = styled.span`
  border: 1px solid #e3e3e3;
  border-radius: 0.25rem;
  height: 44px;
  background-color: #fff;
  box-sizing: border-box;
  cursor: pointer;
  display: block;
  user-select: none;
`;

const SpanSelectRendered = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  padding-right: 30px;
  padding-left: 15px;
  color: #676767;
  font-size: 15px;
  font-weight: normal;
  line-height: 42px;
  user-select: none;
  cursor: pointer;
`;

const SpanSelectArrow = styled.span`
  height: 42px;
  right: 7px;
  position: absolute;
  top: 1px;
  width: 20px;
`;

const B = styled.b`
  border-color: #ccc transparent transparent;
  border-style: solid;
  border-width: 6px 6px 0;
  height: 0;
  left: 50%;
  margin-left: -10px;
  margin-top: -2px;
  position: absolute;
  top: 50%;
  width: 0;
`;
