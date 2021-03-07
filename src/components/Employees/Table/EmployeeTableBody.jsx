import React from 'react';
import ActionToggle from './ActionToggle';
import Avatar from './EmployeeAvatar';

const TableBody = () => {
  const createKey = (item, column) => item._id + (column.path || column.key);

  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    //return _.get(item, column.path);
  };
  return (
    <tbody className="text-center">
      <tr>
        <td>
          <Avatar />
        </td>
        <td>FT-0001</td>
        <td>email@email.com</td>
        <td>+2349109032388</td>
        <td>12th July, 2021</td>
        <td>IT</td>
        <td>
          <ActionToggle />
        </td>
      </tr>
    </tbody>
  );
};

export default TableBody;
