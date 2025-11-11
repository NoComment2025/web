import React from 'react';
import styled from 'styled-components';
import Button from '../atom/button';
import Text from '../atom/text';

const ButtonText = styled(Text)`
  color: ${(props) => props.$color || '#ffffff'}; // 기본 흰색, props로 변경 가능
`;

/**
 * 텍스트와 버튼이 결합된 분자 컴포넌트
 *
 * @사용가능한_props
 *   - children: 버튼 안에 표시될 텍스트
 *   - textColor: 버튼 안 텍스트 색상
 *   - onClick: 버튼 클릭 시 실행될 함수
 *   - variant: Button 컴포넌트 variant ('grayBorder', 'darkgray', 'lightgray', 'primary')
 *   - 기타 Button 컴포넌트에 전달할 props
 * @예시 <TextButton 
 *        onClick={handleClick} 
 *        variant="darkgray" 
 *        textColor="#FF0000">
 *        시작하기
 *      </TextButton>
 */
function TextButton({ children, textColor, variant, onClick, ...props }) {
  return (
    <Button variant={variant} onClick={onClick} {...props}>
      <ButtonText $color={textColor}>{children}</ButtonText>
    </Button>
  );
}

export default TextButton;
