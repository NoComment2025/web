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
  height: 100vh;   /* 첫 화면 꽉 채우기 */
`;

const ContentSection = styled.div`
  width: 100%;
  min-height: 400vh;  /* 예시: 긴 콘텐츠를 위한 높이 */
  background-color: #000000;
  color: white;
`;

function Index() {
  return (
    <>
      <BackgroundSection>
        <MainTemplate />
      </BackgroundSection>
      <ContentSection>
        {/* 실제 긴 내용 */}
        <h1>스크롤 테스트</h1>
        <p>밑으로 스크롤하면 이 영역이 보입니다.</p>
      </ContentSection>
    </>
  );
}

export default Index;
