import React from 'react';
import styled from 'styled-components';
import MainTemplate from '../components/Template/mainTemplate';
import bgImage from '../assets/main-bg-img.png';

const BackgroundSection = styled.div`
  background-image: url(${bgImage});
  background-size: cover;     /* 화면에 꽉 채움 */
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;              /* 화면 기준 100vh */
`;

const ContentSection = styled.div`
  width: 100%;
  background-color: #000000;  /* 필요시 아래 내용 배경 */
`;

function Index() {
  return (
    <>
      <BackgroundSection>
        <MainTemplate />
      </BackgroundSection>
      <ContentSection>
        {/* 실제 긴 내용이 여기에 들어감 */}
      </ContentSection>
    </>
  );
}

export default Index;
