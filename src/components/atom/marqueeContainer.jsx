import styled, { css } from 'styled-components';

const boxStyle = css`
  /* 풀블리드: 부모 패딩과 관계없이 화면의 왼쪽에 딱 붙게 */
  width: 100vw;
  height: 75px;
  background-color: #101010;
  border-top: solid 1px #373737;
  border-bottom: solid 1px #373737;
  overflow: hidden; // 흘러가는 텍스트 잘리는 효과
  display: flex;
  align-items: center;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  margin-bottom: 40px;
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
