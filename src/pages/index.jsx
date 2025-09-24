import React from 'react';
import NavigationSystem from '../components/organism/NavigationSystem';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

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
      <GlobalStyle />
      <Container>
        <NavigationSystem />
      </Container>
    </>
  );
}

export default Index;