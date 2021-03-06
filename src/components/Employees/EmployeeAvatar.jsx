import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avi from '../../assets/img/theme/adminImage.jfif';

const AvatarContainer = styled.h2`
  display: inline-flex;
  align-items: center;
  font-size: inherit;
  font-weight: 400;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  white-space: nowrap;
`;

const AvatarLink = styled(Link)`
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

  &:hover {
    color: #5e72e4;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  display: block;
  overflow: hidden;
  width: 100%;
`;

const Job = styled.span`
  color: #888;
  display: block;
  font-size: 12px;
  margin-top: 3px;
`;

const EmployeeAvatar = () => {
  return (
    <AvatarContainer>
      <AvatarLink>
        <Image src={Avi} />
      </AvatarLink>
      <AvatarLink>
        John Doe
        <Job></Job>
      </AvatarLink>
    </AvatarContainer>
  );
};

export default EmployeeAvatar;
