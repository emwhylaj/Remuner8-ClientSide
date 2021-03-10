import React from 'react';
import ActionToggle from './ActionToggle';
import Avatar from './EmployeeAvatar';
import DummyImage from 'assets/img/theme/team-1-800x800.jpg';

const TableBody = ({ body, toggleEditModal, toggleDeleteModal }) => {
  // const createKey = (item, column) => item._id + (column.path || column.key);

  // const renderCell = (item, column) => {
  //   if (column.content) return column.content(item);

  //   //return _.get(item, column.path);
  // };
  return (
    <tbody>
      {body.map(employee => (
        <tr key={employee.id}>
          <th scope="row">
            <Avatar avatar={DummyImage} name={employee.name} />
          </th>
          <td>{employee.employee_id}</td>
          <td>{employee.email}</td>
          <td>{employee.phone_number}</td>
          <td>{employee.join_date}</td>
          <td>{employee.department}</td>
          <td>
            <ActionToggle
              toggleEditModal={toggleEditModal}
              toggleDeleteModal={toggleDeleteModal}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
