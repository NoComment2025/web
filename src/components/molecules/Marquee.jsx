import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import MarqueeContainer from "../atom/marqueeContainer";
import Text from "../atom/text";

// 애니메이션 정의
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); } // 전체 너비만큼 이동
`;

// 텍스트 트랙
const MovingTrack = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "350px"}; // gap만 props로 조절
  animation-name: ${scroll};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  white-space: nowrap;
  will-change: transform; // 성능 최적화
  backface-visibility: hidden; // 미세한 끊김 방지
  transform: translateZ(0); // GPU 가속 힌트
`;

// Inner wrapper
const Inner = styled.div`
  display: flex;
  width: max-content;
`;

export default function Marquee({ items, gap, color = "#4B4B4B", speedPxPerSec = 25 }) {
  const durationSec = 200;

  // 텍스트를 충분히 많이 복사하여 화면을 완전히 채움
  const duplicatedItems = useMemo(() => {
    const repeated = [];
    for (let i = 0; i < 10; i++) { // 10번 반복
      repeated.push(...items);
    }
    return repeated;
  }, [items]);

  return (
    <MarqueeContainer>
      <Inner>
        <MovingTrack gap={gap} style={{ animationDuration: `${durationSec}s` }}>
          {duplicatedItems.map((item, idx) => (
            <Text key={idx} color={color}>{item}</Text>
          ))}
        </MovingTrack>
      </Inner>
    </MarqueeContainer>
  );
}
