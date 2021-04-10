import React from 'react';
import styled, { css } from 'styled-components';
import { UncontrolledTooltip } from 'reactstrap';

const TableHeader = ({ sortColumn, data, onSort, columns }) => {

  const sortData = (sortColumn, data) => {
    console.log(data)
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
    const sortColumnCopy = { ...sortColumn };
    if (sortColumnCopy.path === path) {
      sortColumnCopy.order = sortColumnCopy.order === 'asc' ? 'desc' : '';
      if (sortColumnCopy.order === '') sortColumnCopy.order = 'asc';
    } else {
      sortColumnCopy.path = path;
      sortColumnCopy.order = 'asc';
    }
    onSort(sortColumnCopy);
    sortData(sortColumnCopy, data);
  };

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
                  {!sortColumn.order
                    ? 'Click to reset'
                    : `Click to sort by ${
                        sortColumn.order === 'asc' ? 'descending' : 'ascending'
                      }`}
                </UncontrolledTooltip>
              ) : null}
              <Th
                key={index}
                order={sortColumn.order}
                active={sortColumn.path === column.path}
                onClick={() => raiseSort(column.path)}
                tabIndex={0}
                sort={column.path}
                style={{ width: '2rem', fontSize: '1.6ch' }}
                id={column.path}
              >
                {column.label}
              </Th>
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
      props.active &&
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
    ${props =>
      props.order === 'desc' &&
      props.active &&
      css`
        opacity: 1;
      `}
  }
`;

const getSortStyles = props => props.sort && sortStyles;

export const Th = styled.th`
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
