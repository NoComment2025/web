import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1050;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  pointer-events: ${({ $isVisible }) => ($isVisible ? 'auto' : 'none')};
  transition: opacity 0.4s ease; /* 페이드 애니메이션 */
`;

function BackgroundOverlay({ isOpen, onClick }) {
  // 애니메이션을 위해 상태 관리
  const [show, setShow] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShow(true); // 열릴 때 바로 보여줌
    } else {
      // 닫힐 때 0.4초 후에 감추기
      const timeoutId = setTimeout(() => setShow(false), 400);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen]);

  if (!show) return null; // 완전히 감출 때 컴포넌트 제거

  return <StyledOverlay $isVisible={isOpen} onClick={onClick} />;
}

export default BackgroundOverlay;
