import React from 'react';
import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Spinner = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 4px 0 blue;
  background: transparent;
  animation: ${animate} 1s linear infinite;
`;

const Text = styled.span`
  font-size: 35px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
`;

const Loading = () => (
  <Loader>
    <Spinner>
      <Text role="img" aria-label="loading"></Text>
    </Spinner>
  </Loader>
);

export default Loading;
