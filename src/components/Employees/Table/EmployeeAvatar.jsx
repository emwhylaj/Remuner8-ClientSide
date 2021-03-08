import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avi from 'assets/img/theme/adminImage.jfif';

const Avatar = styled(Link)`
  border-radius: 50%;
  display: inline-block;
  font-weight: 500;
  height: 38px;
  line-height: 38px;
  margin: 0 10px 0 0;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  width: 38px;
  position: relative;
  white-space: nowrap;
`;

export const AvatarLink = styled(Link)`
  color: #1f1f1f;
  display: inline-grid;
`;

const Image = styled.img`
  border-radius: 50%;
  display: block;
  overflow: hidden;
  width: 100%;
`;

const Job = styled.span`
  color: #525f7f;
  font-size: 12px;
  margin-top: 3px;
`;

const EmployeeAvatar = () => {
  return (
    <h2 className="table-avatar">
      <Avatar to="/admin/employee-profile">
        <Image src={Avi} />
      </Avatar>
      <AvatarLink to="/admin/employee-profile">
        John Doe
        <Job>Product Designer</Job>
      </AvatarLink>
    </h2>
  );
};

export default EmployeeAvatar;
