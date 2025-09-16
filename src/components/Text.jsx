import styled, {css} from 'styled-components';

const baseTextStyle =  css`
  font-family: 'Pretendard', sans-serif;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'};
  color: ${(props) => props.color || '#f5f5f5'};
  line-height: ${(props) => props.lineHeight || '1.5'};
  margin: ${(props) => props.margin || '0'};
  text-align: ${(props) => props.textAlign || 'left'};
  `;

const textVariants = {
  title: css`
    font-size: 1.375rem;
    font-weight: 600;`,

  caption: css`
    color: #7D7D7D;
  `,

  success: css`
    color: #28B700;
  `,

  fail: css`
    color: #B70000;
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