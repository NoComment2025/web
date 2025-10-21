import React from 'react';
import styled from 'styled-components';

const SecondSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SecondSection() {
  return (
    <SecondSectionContainer>
      <h2>Section 2</h2>
      <p>배경색 #141414</p>
    </SecondSectionContainer>
  );
}

export default SecondSection;
