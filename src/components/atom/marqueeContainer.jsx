import styled, { css } from 'styled-components';

const boxStyle = css`
  width: 100vw;
  height: 75px;
  background-color: #101010;
  border-top: solid 1px #373737;
  border-bottom: solid 1px #373737;
  overflow: hidden; // 흘러가는 텍스트 잘리는 효과
  display: flex;
  align-items: center;
  margin-bottom:40px;
`;

const StyledMarqueeContainer = styled.div`
  ${boxStyle}
`;

function MarqueeContainer({ children }) {
  return (
    <StyledMarqueeContainer>
      {children}
    </StyledMarqueeContainer>
  );
}

export default MarqueeContainer;
