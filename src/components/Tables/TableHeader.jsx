import React from 'react';
import styled, { css } from 'styled-components';
import { UncontrolledTooltip } from 'reactstrap';

const TableHeader = props => {
  const sortData = (sortColumn, data) => {
    const { path, order } = sortColumn;
    if (order === 'asc') {
      !path.includes('id')
        ? data.sort((a, b) => a[path].localeCompare(b[path]))
        : data.sort((a, b) => a[path] - b[path]);
    } else if (order === 'desc') {
      !path.includes('id')
        ? data.sort((a, b) => b[path].localeCompare(a[path]))
        : data.sort((a, b) => b[path] - a[path]);
    } else return null;
  };

  const raiseSort = path => {
    const sortColumn = { ...props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : '';
      if (sortColumn.order === '') sortColumn.order = 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    props.onSort(sortColumn);
    sortData(sortColumn, props.data);
  };

  // const renderSortIcon = column => {
  //   if (column.path !== props.sortColumn.path) return null;
  //   if (props.sortColumn.order === 'asc')
  //     return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
  // };

  const {
    sortColumn: { order },
    columns
  } = props;

  return (
    <thead>
      <tr>
        {columns ? (
          columns.map((column, index) => (
            <>
              {column.path ? (
                <UncontrolledTooltip
                  key={`tooltip${index}`}
                  placement="top"
                  target={column.path}
                >
                  {!order
                    ? 'Click to reset'
                    : `Click to sort by ${
                        order === 'asc' ? 'descending' : 'ascending'
                      }`}
                </UncontrolledTooltip>
              ) : null}
              <StyledTh
                key={index}
                order={order}
                onClick={() => raiseSort(column.path)}
                tabIndex={0}
                sort={column.path}
                style={{ width: '2rem', fontSize: '1.6ch' }}
                id={column.path}
              >
                {column.label}
              </StyledTh>
            </>
          ))
        ) : (
          <th>No data</th>
        )}
      </tr>
    </thead>
  );
};

export default TableHeader;

// Styled components
const sortStyles = css`
  cursor: pointer;
  position: relative;

  // ascending icon
  &::before {
    right: 0.5em;
    content: '\\2191';
    position: absolute;
    bottom: 0.5em;
    display: block;
    opacity: 0.5;
    font-size: 1.2rem;
    ${props =>
      props.order === 'asc' &&
      css`
        opacity: 1;
      `}
  }

  &::after {
    right: 1em;
    content: '\\2193';
    position: absolute;
    bottom: 0.4em;
    display: block;
    font-size: 1.2rem;
    opacity: 0.5;
    ${props => props.order === 'desc' &&
      css`
        opacity: 1;
      `}
  }
`;

const getSortStyles = props => props.sort && sortStyles;

export const StyledTh = styled.th`
  font-weight: 600;
  letter-spacing: 0.05em;
  border-bottom: 2px solid #dee2e6;
  font-size: 0.9375rem;
  ${getSortStyles}
  white-space: normal !important;
  &:first-child {
    padding-left: 25px;
  }
  &:last-child {
    text-align: center;
  }
`;
