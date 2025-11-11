import React from "react";
import styled from "styled-components"
import Text from "../atom/text";
import logo from "../../assets/ORATO-logo.png";
import closeIcon from "../../assets/close.png";
import { Link } from "react-router-dom";

const NavBarContainer = styled.div`
  background-color: #181818;
  width: 283px;
  height: 100vh;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: pretendard;
  font-size: 16px;
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
  z-index: 1100;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1200;

  img {
    width: 19px;
    height: 18px;
  }
`;

// ✅ Link 스타일 추가 (홈 이동용)
const LogoLink = styled(Link)`
  display: block;
  width: 141px;
  height: 33px;
  margin: 50px 0 0 70px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Choice = styled.div`
  margin: 0 0 200px 38px;
`;

const ChoiceBtn = styled(Link)`
  display: flex;
  align-items: center; 
  justify-content: center;

  width: 205px;
  height: 60px;
  color: #fff;
  background: none;
  border: none;
  margin-bottom: 31px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;

  &:hover {
    background-color: #172035;
  }
`;

const UserInf = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  background-color: #272727;
  width: 283px;
  height: 113px;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

const User = styled.div`
  display: flex;
`;

const ProfilePicture = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: #7f7f7f;
  margin: 26px 0 0 39px;
`;

const LogOutBtn = styled.button`
  background-color: #172035;
  border: none;
  color: #fff;
  width: 196px;
  height: 19px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
`;

function NavBar({ isOpen = false, closeNavBar }) {
  const nickname = "변성우";
  const userId = "b2ong222";

  return (
    <NavBarContainer $isOpen={isOpen}>
      {isOpen && (
        <CloseButton onClick={closeNavBar} aria-label="메뉴 닫기">
          <img src={closeIcon} alt="닫기 버튼 아이콘" />
        </CloseButton>
      )}

      {/* ✅ 로고 클릭 시 메인(/)으로 이동 */}
      <LogoLink to="/" onClick={closeNavBar}>
        <img src={logo} alt="ORATO 로고" />
      </LogoLink>

      <Choice>
        <ChoiceBtn to="/analysis" onClick={closeNavBar}>
          <Text textAlign="center">발표 분석</Text>
        </ChoiceBtn>

        <ChoiceBtn to="/record" onClick={closeNavBar}>
          <Text textAlign="center">기록</Text>
        </ChoiceBtn>

        <ChoiceBtn to="/mypage" onClick={closeNavBar}>
          <Text textAlign="center">마이페이지</Text>
        </ChoiceBtn>
      </Choice>

      <UserInf>
        <User>
          <ProfilePicture />
          <div>
            <Text $margin="26px 0 0 13px" fontWeight="500">{nickname} 님</Text>
            <Text $margin="0px 0 0 13px" $fontSize="0.6875rem" color="#cccccc">@{userId}</Text>
          </div>
        </User>
        <div>
          <LogOutBtn>
            <Text textAlign="center" $fontSize="0.6875rem">로그아웃</Text>
          </LogOutBtn>
        </div>
      </UserInf>
    </NavBarContainer>
  );
}

export default NavBar;