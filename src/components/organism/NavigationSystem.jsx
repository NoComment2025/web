// components/organisms/NavigationSystem.jsx
import React, { useState } from 'react';
import NavBar from './NavBar';
import HamburgerMenuButton from '../molecules/HamburgerMenuButton';
import BackgroundOverlay from '../atom/BackgroundOverlay';

function NavigationSystem() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavBar = () => {
    setIsNavOpen((prev) => !prev);
  };

  const closeNavBar = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <HamburgerMenuButton isVisible={!isNavOpen} onClick={toggleNavBar} />
      <NavBar isOpen={isNavOpen} closeNavBar={closeNavBar} />
      <BackgroundOverlay isOpen={isNavOpen} onClick={closeNavBar} />
    </>
  );
}

export default NavigationSystem;