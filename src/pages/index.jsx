// src/pages/Index.js
import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/Template/mainTemplate';
import bgImage from '../assets/main-bg-img.png';

const BackgroundSection = styled.div`
  background-image: url(${bgImage});
  background-size: cover;     
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

const SecondSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: white;
  position: relative;
  z-index: 1;
`;

const ThirdSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  color: white;
  position: relative;
  z-index: 1;
`;

const FourthSection = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #141414;
  color: white;
  position: relative;
  z-index: 1;
`;

function Index() {
  return (
    <>
      <BackgroundSection>
        <MainTemplate />
      </BackgroundSection>
      <SecondSection>
        {/* 2번째 섹션: #141414 */}
        <h2>Section 2</h2>
        <p>배경색 #141414</p>
      </SecondSection>
      <ThirdSection>
        {/* 3번째 섹션(100vh): #000 */}
        <h2>Section 3</h2>
        <p>배경색 #000 (100vh)</p>
      </ThirdSection>
      <FourthSection>
        {/* 4번째 섹션: #141414 */}
        <h2>Section 4</h2>
        <p>배경색 #141414</p>
      </FourthSection>
    </>
  );
}

export default Index;
