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
  margin: 18px 0 25px 80px;
`;

// Grid 레이아웃을 적용한 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh; 
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* 화면 세로 중앙 정렬 */
  align-items: center;
  gap: 15px;
  min-height: 100%; /* Grid의 1fr 영역 전체 사용 */
  padding: 0 20px; /* 좌우 여백 */
  box-sizing: border-box;
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

function MainTemplate() {
  return (
    <GridContainer>
      {/* 상단 로고 + 네비게이션 */}
      <div>
        <Logo src={logo} alt='ORATO 로고' />
        <NavigationSystem/>
      </div>
      
      {/* 캡션 배너 */}
      <CaptionBanner/>
      
      {/* 중앙 콘텐츠 */}
      <CenterContent>
        <TextWithIcon>
          <Text $fontSize={'45px'} $fontWeight={'600'}>발표</Text>
          <MicImage src={MicIcon} alt="마이크 아이콘" />
        </TextWithIcon>
        <Text $fontSize={'30px'} $fontWeight={'600'}>이제 ORATO와 함께 완벽하게</Text>
        <TextButton>오라토 하러가기</TextButton>
      </CenterContent>
      
      {/* 하단 이름 배너 */}
      <NameBanner/>
    </GridContainer>
  );
}

export default MainTemplate;
