import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainTemplate from '../components/Template/mainTemplate';
import bgImage from '../assets/main-bg-img.png';

const Container = styled.div`
  background-image: url(${bgImage});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #000000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Index() {
  return (
    <>
      <Container>
        <MainTemplate/>
      </Container>
    </>
  );
}

export default Index;