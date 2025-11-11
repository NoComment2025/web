import React from 'react';
import styled from 'styled-components';
import hamburgerIcon from "../../assets/hamburger-menu.png";

const StyledButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  z-index: 9999;

  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  cursor: ${({ $isVisible }) => ($isVisible ? "pointer" : "default")};
  transition: opacity 0.4s ease, cursor 0.4s ease;

  img {
    width: 19px;
    height: 18px;
  }
`;

function HamburgerMenuButton({ isVisible, onClick }) {
  return (
    <StyledButton
      $isVisible={isVisible}
      onClick={isVisible ? onClick : undefined}
      aria-label="메뉴 열기"
    >
      <img src={hamburgerIcon} alt="햄버거 메뉴 아이콘" />
    </StyledButton>
  );
}

export default HamburgerMenuButton;
