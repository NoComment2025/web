import styled from 'styled-components';
import NavigationSystem from '../organism/NavigationSystem';
import { CaptionBanner, NameBanner } from '../organism/marqueeBanner';
import logo from "../../assets/ORATO-logo.png";
import Text from '../atom/text';
import Button from '../atom/button';

const Logo = styled.img`
  width: 130px;
  height: 29px;
  margin: 18px 0 25px 80px;
`;

// Grid 레이아웃을 적용한 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 1fr auto;
  min-height: 100vh; // 전체 화면 높이를 사용
  grid-gap: 0px; // 그리드 아이템 사이의 간격
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 이 부분을 변경합니다! */
  align-items: center;
  gap: 15px;
  /* 필요하다면 여기에 padding-top을 추가하여 상단에서 살짝 내려올 수 있습니다. */
  padding-top: 220px; 
`;



function MainTemplate() {
  return (
    <GridContainer>
      <div>
        <Logo src={logo} alt='ORATO 로고' />
        <NavigationSystem/>
      </div>
      
      <CaptionBanner/>
      
      <CenterContent>
        <Text $fontSize={'45px'} $fontWeight={'600'}>발표</Text>
        <Text $fontSize={'30px'} $fontWeight={'600'}>이제 ORATO와 함께 완벽하게</Text>
        <Button>오라토 하러가기</Button>
      </CenterContent>
      
      <NameBanner/>
    </GridContainer>
  );
}

export default MainTemplate;