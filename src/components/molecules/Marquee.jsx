import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import MarqueeContainer from "../atom/marqueeContainer";
import Text from "../atom/text";

// 애니메이션 정의 (한 사이클: 첫 시퀀스 너비만큼 이동)
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); } // 두 개 시퀀스 중 한 개 너비만큼 이동
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

export default function Marquee({ items, gap, color = "#4B4B4B", speedPxPerSec = 50 }) {
  const sequenceRef = useRef(null);
  const [durationSec, setDurationSec] = useState(40); // 초기 느린 속도

  // 측정 대상: 한 개 시퀀스(S)의 실제 렌더 너비
  useEffect(() => {
    if (!sequenceRef.current) return;
    const measure = () => {
      const width = sequenceRef.current.offsetWidth; // px
      const pxPerSec = Math.max(1, speedPxPerSec);
      const d = width / pxPerSec;
      setDurationSec(d);
    };
    measure();
    // 반응형 대응
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [items, speedPxPerSec, gap, color]);

  const renderSequence = useMemo(() => (
    <div ref={sequenceRef} style={{ display: 'flex', gap: gap || '350px', width: 'max-content' }}>
      {items.map((item, idx) => (
        <Text key={idx} color={color}>{item}</Text>
      ))}
    </div>
  ), [items, gap, color]);

  return (
    <MarqueeContainer>
      <Inner>
        <MovingTrack gap={gap} style={{ animationDuration: `${durationSec}s` }}>
          {renderSequence}
          {/* 두 번째 시퀀스: 첫 시퀀스와 동일해야 무한 루프 시 이음새가 없음 */}
          <div style={{ display: 'flex', gap: gap || '350px', width: 'max-content' }}>
            {items.map((item, idx) => (
              <Text key={`dup-${idx}`} color={color}>{item}</Text>
            ))}
          </div>
        </MovingTrack>
      </Inner>
    </MarqueeContainer>
  );
}
