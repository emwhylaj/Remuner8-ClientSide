import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const TableBody = ({ data, columns }) => {
  const createKey = (item, column) => item.id + (column.path || column.key);

  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  return (
    <tbody>
      {data ? (
        data.map(item => (
          <tr key={item.id} role="row">
            {columns.map(column => (
              <Cell key={createKey(item, column)} className="px-4">
                {renderCell(item, column)}
              </Cell>
            ))}
          </tr>
        ))
      ) : (
        <tr>No data</tr>
      )}
    </tbody>
  );
};

export default TableBody;

const Cell = styled.td`
  &:last-child {
    text-align: center;
  }
`;
