// src/components/molecules/Modal.jsx
import * as S from '../../styles/Modal.style'
export default function Modal({ children, onClose }) {
  return (
    <S.Backdrop>
      <S.LeftPagenation></S.LeftPagenation>
      <S.RightPagenation></S.RightPagenation>
      <S.Container onClick={(e) => e.stopPropagation()}>{children}</S.Container>
      <S.CloseButton onClick={onClose}>닫기</S.CloseButton>
    </S.Backdrop>
  );
}
