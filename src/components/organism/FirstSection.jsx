import React from 'react';
import styled from 'styled-components';
import NavigationSystem from './NavigationSystem';
import { CaptionBanner, NameBanner } from './marqueeBanner';
import logo from "../../assets/ORATO-logo.png";
import Text from '../atom/text';
import TextButton from '../molecules/TextButton';
import MicIcon from "../../assets/mainMicIcon.png";
import bgImage from "../../assets/main-bg-img.png";

const BackgroundSection = styled.div`
  background-image: url(${bgImage});
  background-size: cover;     
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const Logo = styled.img`
  width: 130px;
  height: 29px;
  margin-left: 80px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh; 
  padding-top: 72px;
`;

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 72px);
  padding: 0 20px;
  box-sizing: border-box;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex: 1;
  padding: 20px 0;
`;

const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MicImage = styled.img`
  width: 49px;
  height: 49px;
`;

const FixedTopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 3000;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }
`;

function FirstSection() {
  return (
    <BackgroundSection>
      <GridContainer>
        <FixedTopBar>
          <Logo src={logo} alt='ORATO 로고' />
          <NavigationSystem/>
        </FixedTopBar>
        
        <MainContentContainer>
          <CaptionBanner/>
          <CenterContent>
            <TextWithIcon>
              <Text $fontSize={'45px'} $fontWeight={'600'}>발표</Text>
              <MicImage src={MicIcon} alt="마이크 아이콘" />
            </TextWithIcon>
            <Text $fontSize={'30px'} $fontWeight={'600'} $textShadow="0 0 8px #000">
              이제 ORATO와 함께 완벽하게
            </Text>
            <TextButton>오라토 하러가기</TextButton>
          </CenterContent>
          <NameBanner/>
        </MainContentContainer>
      </GridContainer>
    </BackgroundSection>
  );
}

export default FirstSection;

