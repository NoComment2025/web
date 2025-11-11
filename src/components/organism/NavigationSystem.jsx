import React, { useState } from 'react';
import NavBar from './NavBar';
import HamburgerMenuButton from '../molecules/HamburgerMenuButton';
import BackgroundOverlay from '../atom/BackgroundOverlay';


/**
 * @예시 1. 햄버거 버튼으로 여닫기 <NavigationSystem />
 * @예시 2. 항상 보이는 네브바 <NavigationSystem alwaysVisible />
 */


function NavigationSystem({ alwaysVisible = false }) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavBar = () => setIsNavOpen(prev => !prev);
  const closeNavBar = () => setIsNavOpen(false);

  // 항상 보이는 모드면 햄버거 버튼 필요 없음, 네브바는 항상 열려있음
  if (alwaysVisible) {
    return <NavBar isOpen={true} />;
  }

  return (
    <>
      <HamburgerMenuButton isVisible={!isNavOpen} onClick={toggleNavBar} />
      <NavBar isOpen={isNavOpen} closeNavBar={closeNavBar} />
      <BackgroundOverlay isOpen={isNavOpen} onClick={closeNavBar} />
    </>
  );
}

export default NavigationSystem;
