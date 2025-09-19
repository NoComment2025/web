import styled, {css} from 'styled-components';

const baseButtonStyle = css`
  width: ${(props) => props.width || '394px'};
  height: ${(props) => props.height || '52px'};
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.$borderRadius || '20px'};
  background-color: ${(props) => props.$backgroundColor || '#3048D2'};
  color: #181818;
  `

const buttonVariants = {
  grayBorder: css`
    background-color: none;
    color: #C0C0C0;
    border: 1px solid #fff;
  `,
  darkgray: css`
    background-color: #272727;
  `
  
}

const StyledButton = styled.button`
  ${baseButtonStyle}
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