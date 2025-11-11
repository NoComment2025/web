import React from 'react';
import styled from 'styled-components';
import NavigationSystem from '../organism/NavigationSystem';
import { CaptionBanner, NameBanner } from '../organism/marqueeBanner';
import logo from "../../assets/ORATO-logo.png";
import Text from '../atom/text';
import TextButton from '../molecules/TextButton';
import MicIcon from "../../assets/mainMicIcon.png";

const Logo = styled.img`
  width: 130px;
  height: 29px;
  margin-left: 80px;
`;

// Grid 레이아웃을 적용한 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh; 
  padding-top: 72px; /* 고정 상단바 높이만큼 여백 */
`;

// 첫 번째 marquee, 중앙 콘텐츠, 두 번째 marquee를 감싸는 컨테이너
const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 72px); /* 전체 높이에서 상단바 높이 제외 */
  padding: 0 20px;
  box-sizing: border-box;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex: 1; /* 남은 공간을 모두 차지 */
  padding: 20px 0;
`;

// 텍스트와 아이콘을 한 줄에 배치
const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 텍스트와 아이콘 사이 간격 */
`;

const MicImage = styled.img`
  width: 49px;
  height: 49px;
`;

// 상단 고정 바: 로고 + 햄버거 아이콘(내비게이션 시스템 내부)
const FixedTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3000; /* 다른 섹션 위에 */
  pointer-events: none; /* 내부 버튼만 클릭 가능하도록 아래에서 재설정 */

  /* 내부 요소 클릭 가능 처리 */
  & > * {
    pointer-events: auto;
  }
`;

function MainTemplate() {
  return (
    <GridContainer>
      {/* 상단 고정 바: 로고 + 햄버거 버튼 */}
      <FixedTopBar>
        <Logo src={logo} alt='ORATO 로고' />
        <NavigationSystem/>
      </FixedTopBar>
      
      {/* 메인 콘텐츠 컨테이너: marquee + 중앙 콘텐츠 + marquee */}
      <MainContentContainer>
        {/* 첫 번째 캡션 배너 */}
        <CaptionBanner/>
        
        {/* 중앙 콘텐츠 */}
        <CenterContent>
          <TextWithIcon>
            <Text $fontSize={'45px'} $fontWeight={'600'}>발표</Text>
            <MicImage src={MicIcon} alt="마이크 아이콘" />
          </TextWithIcon>
          <Text $fontSize={'30px'} $fontWeight={'600'} $textShadow="0 0 8px #000">이제 ORATO와 함께 완벽하게</Text>
          <TextButton>오라토 하러가기</TextButton>
        </CenterContent>
        
        {/* 두 번째 이름 배너 */}
        <NameBanner/>
      </MainContentContainer>
    </GridContainer>
  );
}

export default MainTemplate;
