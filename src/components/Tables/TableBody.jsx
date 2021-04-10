import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

// import Avatar from 'components/Avatars/EmployeeAvatar';
// import DummyImage from 'assets/img/theme/team-1-800x800.jpg';

const TableBody = ({ data, columns }) => {
  const createKey = (item, column) => item.id + (column.path || column.key);

  const renderCell = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  // const formatDate = date => {
  //   return dateFormat(date, 'dd/mm/yyyy');
  // };

  return (
    <tbody>
      {data ? (
        data.map(item => (
          <tr key={item.id} role="row">
            {columns.map(column => (
              <Cell key={createKey(item, column)} className="pl-4">
                {renderCell(item, column)}
              </Cell>
            ))}
          </tr>
        ))
      ) : (
        <tr>No departments found</tr>
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

// <tbody>
//   {body
//     ? body.map(
//         ({
//           id,
//           name,
//           employee_id,
//           email,
//           phone_number,
//           join_date,
//           department
//         }) => (
//           <tr key={id} role="row">
//             <td style={{ paddingLeft: '15px' }}>
//               <Avatar avatar={DummyImage} name={name} />
//             </td>
//             <td>{employee_id}</td>
//             <td>{email}</td>
//             <td>{phone_number}</td>
//             <td>{formatDate(join_date)}</td>
//             <td>{department}</td>
//             <td>
//               <ActionToggle
//                 toggleEditModal={toggleEditModal}
//                 toggleDeleteModal={toggleDeleteModal}
//               />
//             </td>
//           </tr>
//         )
//       )
//     : null}
// </tbody>
