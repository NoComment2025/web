import styled, {css} from 'styled-components';

const baseButtonStyle = css`
  width: ${(props) => props.width || '394px'};
  height: ${(props) => props.height || '52px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.$borderRadius || '20px'};
  background-color: ${(props) => props.$backgroundColor || '#3048D2'};
  color: ${(props) => props.$color || '#181818'};
  `

  /**
 * @사용가능한_variant_값
 *   - 'grayBorder': 배경색 없이 회색 테두리를 가지는 버튼
 *   - 'darkgray': 어두운 회색 배경의 버튼
 *   - 'lightgray': 밝은 회색 배경의 버튼
 * @예시 <Button variant="grayBorder">회원가입</Button>
 * @예시 <Button variant="lightgray">이전</Button>
 */

const buttonVariants = {
  grayBorder: css`
    background-color: transparent;
    color: #C0C0C0;
    border: 1px solid #fff;
  `,
  darkgray: css`
    background-color: #272727;
  `,
  lightgray: css`
    background-color: #E6E6E6;
  `
}

const StyledButton = styled.button`
  ${baseButtonStyle}
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => props.variant && buttonVariants[props.variant]}
  `

function Button( {children, onClick, variant = 'primary', ...props}) {
  return (
    <StyledButton onClick={onClick}
    variant={variant}
    {...props}>
      {children}
    </StyledButton>
  )
}

export default Button;