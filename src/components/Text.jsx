import styled, {css} from 'styled-components';

const baseTextStyle =  css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${(props) => props.fontSize || '1rem'};
  font-weight: ${(props) => props.fontWeight || '400'};
  color: ${(props) => props.color || '#f5f5f5'};
  line-height: ${(props) => props.lineHeight || '1.5'};
  margin: ${(props) => props.$margin || '0'};
  text-align: ${(props) => props.textAlign || 'left'};
  `;

/**
 * @사용가능한_variant_값
 *   - 'title': 제목용 텍스트 스타일 (큰 글자 크기와 굵기)
 *   - 'caption': 작은 보조 텍스트 스타일
 *   - 'success': 완료 메시지용 텍스트 스타일
 *   - 'fail': 실패 메시지용 텍스트 스타일
 * @예시 <Text variant="title">주제</Text>
 * @예시 <Text variant="success">분석 완료</Text>
 */

const textVariants = {
  title: css`
    font-size: 1.375rem; /* 약 22px */
    font-weight: 600;`,

  caption: css`
    color: #7D7D7D; /* 어두운 회색 */
  `,

  success: css`
    color: #28B700; /* 밝은 녹색 */
  `,

  fail: css`
    color: #B70000; /* 진한 빨강 */
  `
}

const StyledText = styled.p`
  ${baseTextStyle}
  ${(props) => props.variant && textVariants[props.variant]}
`

function Text({children, ...props}) {
  return (
    <StyledText {...props}>{children}</StyledText>
  )
}

export default Text;