import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideRight = keyframes`
  0% {
    opacity: 1;
    transform: translate3d(-100%, 0px, 0px);
  }

  50% {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
  }

  100% {
    transform: translate3d(100%, 0px, 0px);
    opacity: 0;
  }
`;

const LoadingStrip = styled.div`
  background: #000;
  box-shadow: 0 0 10px #000000;
  position: absolute;
  animation: ${slideRight} 500ms ease-in-out infinite;
  pointer-events: none;
  z-index: 1000;
  top: 0;
  left: 0;
  right: 0;
  display: block;
  height: 2px;
  opacity: 0;
  width: 100%;
`;

const LoadingBar = ({ loading }) => loading ? <LoadingStrip /> : null;

export default LoadingBar;
