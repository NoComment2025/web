import styled, { keyframes } from "styled-components";
import MarqueeContainer from "../atom/marqueeContainer";
import Text from "../atom/text";

// 애니메이션 정의 (속도 고정)
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// 텍스트 트랙
const MovingTrack = styled.div`
  display: flex;
  gap: ${(props) => props.gap || "350px"}; // gap만 props로 조절
  animation: ${scroll} 50s linear infinite; // 속도 고정
  white-space: nowrap;
`;

// Inner wrapper
const Inner = styled.div`
  display: flex;
  width: max-content;
`;

export default function Marquee({ items, gap, color = "#4B4B4B" }) {
  return (
    <MarqueeContainer>
      <Inner>
        <MovingTrack gap={gap}>
          {items.map((item, idx) => (
            <Text key={idx} color={color}>{item}</Text>
          ))}
          {items.map((item, idx) => (
            <Text key={`dup-${idx}`} color={color}>{item}</Text>
          ))}
        </MovingTrack>
      </Inner>
    </MarqueeContainer>
  );
}
