import React from 'react';
import dateFormat from 'dateformat';

import ActionToggle from './ActionToggle';
import Avatar from './EmployeeAvatar';
import DummyImage from 'assets/img/theme/team-1-800x800.jpg';

const TableBody = ({ body, toggleEditModal, toggleDeleteModal }) => {
  // const createKey = (item, column) => item._id + (column.path || column.key);

  // const renderCell = (item, column) => {
  //   if (column.content) return column.content(item);

  //   //return _.get(item, column.path);
  // };

  const formatDate = date => {
    return dateFormat(date, 'dd/mm/yyyy');
  };
 // console.log(body);
  return (
    <tbody>
      {body.map(
        ({
          id,
          name,
          employee_id,
          email,
          phone_number,
          join_date,
          department
        }) => (
          <tr key={id}>
            <th scope="row">
              <Avatar avatar={DummyImage} name={name} />
            </th>
            <td>{employee_id}</td>
            <td>{email}</td>
            <td>{phone_number}</td>
            <td>{formatDate(join_date)}</td>
            <td>{department}</td>
            <td>
              <ActionToggle
                toggleEditModal={toggleEditModal}
                toggleDeleteModal={toggleDeleteModal}
              />
            </td>
          </tr>
        )
      )}
    </tbody>
  );
};

export default TableBody;
