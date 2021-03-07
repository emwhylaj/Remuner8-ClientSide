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

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: white;
  animation: ${animate} 2s linear infinite;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(to top, transparent, rgb(17, 135, 239));
    background-size: 100px 180px;
    background-repeat: no-repeat;
    border-bottom-left-radius: 100px;
    border-top-left-radius: 100px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 40%;
    width: 20px;
    height: 20px;
    background: rgb(17, 134, 239);
    border-radius: 50%;
    transform: translateX(50%);
    z-index: 10;
    box-shadow: 0 0 10px #1186ef, 0 0 20px #1186ef, 0 0 30px #1186ef,
      0 0 40px #1186ef, 0 0 50px #1186ef, 0 0 60px #1186ef, 0 0 70px #1186ef,
      0 0 80px #1186ef, 0 0 90px #1186ef, 0 0 100px #1186ef;
  }
`;

const Span = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: rgb(17, 162, 239);
  border-radius: 50%;
`;

const LoaderRing = () => (
  <Container>
    <Loader>
      <Span />
    </Loader>
  </Container>
);

export default LoaderRing;
