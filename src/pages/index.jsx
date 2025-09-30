import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import MainTemplate from '../components/Template/mainTemplate';

const Container = styled.div`
  background-color: #000000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
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