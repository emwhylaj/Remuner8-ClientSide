import React from 'react';
import BTable from 'react-bootstrap/Table';
import { useTable, useSortBy } from 'react-table';

function ReactTable({ columns, data, toggleEditModal, toggleDeleteModal }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <>
      <BTable striped bordered hover size="sm" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' \\2191'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map(cell => {
                  return (
                    <>
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      {/* <td>
                        <ActionToggle
                          toggleEditModal={toggleEditModal}
                          toggleDeleteModal={toggleDeleteModal}
                        />
                      </td> */}
                    </>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </BTable>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  );
}

export default ReactTable;
