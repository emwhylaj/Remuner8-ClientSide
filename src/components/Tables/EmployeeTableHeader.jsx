import React from 'react';
import styled, { css } from 'styled-components';

const EmployeeTableHeader = props => {
  // const raiseSort = path => {
  //   const sortColumn = { ...props.sortColumn };
  //   if (sortColumn.path === path)
  //     sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
  //   else {
  //     sortColumn.path = path;
  //     sortColumn.order = 'asc';
  //   }
  //   props.onSort(sortColumn);
  // };

  // const renderSortIcon = column => {
  //   if (column.path !== props.sortColumn.path) return null;
  //   if (props.sortColumn.order === 'asc')
  //     return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
  // };

  const sanitizeHeaders = () => {
    if (!props.headers()) return;
    let headers = props.headers().slice(1); // take off id
    headers.splice(1, 1); // take off avatar from headers
    headers = headers.map(header => header.replace('_', ' '));
    return headers;
  };

  return (
    <thead>
      <tr>
        {sanitizeHeaders() ? (
          sanitizeHeaders().map((header, index) => (
            <StyledTh tabIndex={0} key={index} sort={header}>
              {header}
            </StyledTh>
          ))
        ) : (
          <th>No data</th>
        )}
        <StyledTh>Action</StyledTh>
      </tr>
    </thead>
  );
};

export default EmployeeTableHeader;

// Styled components
const sortStyles = css`
  cursor: pointer;
  position: relative;

  &::before {
    right: 0;
    content: '\\2191';
    position: absolute;
    bottom: 0.6em;
    display: block;
    opacity: 0.5;
    font-size: 1rem;
  }

  &::after {
    right: 0.5em;
    content: '\\2193';
    position: absolute;
    bottom: 0.6em;
    display: block;
    opacity: 0.5;
    font-size: 1rem;
  }
`;

const getSortStyles = props => props.sort && sortStyles;

const StyledTh = styled.th`
  font-weight: 600;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #dee2e6;
  font-size: 0.9375rem;
  ${getSortStyles}
  white-space: normal !important;
  &:first-child {
    padding-left: 15px;
  }
`;
