import React from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1050;
`;

function BackgroundOverlay({ isOpen, onClick }) {
  return <StyledOverlay $isOpen={isOpen} onClick={onClick} />;
}

export default BackgroundOverlay;
