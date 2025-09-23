import React, { useState } from 'react';
import NavBar from "../components/NavBar";
import styled, { createGlobalStyle } from 'styled-components';
import hamburgerIcon from "../assets/hamburger-menu.png"; // 햄버거 메뉴 아이콘 import

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    margin: 0;
    padding: 0;
    height: 100%;
  }
`;

const HamburgerButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1101;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: opacity 0.4s ease; /* 페이드 효과 */

  img {
    width: 19px;
    height: 18px;
  }
`;

const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1050;
`;

const Container = styled.div`
  background-color: #000000;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

function Index() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        {/* 조건부 렌더링 없애고 항상 버튼을 DOM에 둠 */}
        <HamburgerButton
          isVisible={!isNavOpen}
          onClick={toggleNavBar}
          aria-label="메뉴 열기"
        >
          <img src={hamburgerIcon} alt="햄버거 메뉴 아이콘" />
        </HamburgerButton>
        
        {/* NavBar */}
        <NavBar isOpen={isNavOpen} closeNavBar={closeNavBar} />
        
        <Overlay isOpen={isNavOpen} />
      </Container>
    </>
  );
}

export default Index;
