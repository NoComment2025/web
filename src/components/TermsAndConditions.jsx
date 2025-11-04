import { useState } from "react";
import styled from "styled-components";
import grayCheck from "../assets/grayCheck.png";
import blueCheck from "../assets/blueCheck.png";

const Container = styled.div`
    display: flex;
    height: auto;
    justify-content: space-between;
    width: 100%;
    max-width: 300px;
`;

const TermsTitle = styled.div`
    display: flex;
    gap: 15px;
    cursor: pointer;
`;

const CheckImg = styled.img`
    width: 12px;
    height: 10px;
`;

const Detail = styled.div`
    display: flex;
    align-items: center;
`;

const TermsCheckButton = styled.button`
    background: none;
    border: none;
    height: auto;
    color: #3B3B3B;
    display: flex;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;

    &:hover {
        text-decoration: underline;
        text-underline-offset: 2px;
        text-decoration-color: #7F7F7F;
        color: #7F7F7F;
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: #131313;
  padding: 20px;
  border-radius: 8px;
  min-width: 300px;
  max-width: 80%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  color: #fff;
`;

const ContentArea = styled.p`
    background-color: #272727;
    border-radius: 8px;
    padding: 15px;
    max-height: 40vh;
    overflow-y: auto;
    white-space: pre-wrap;
    line-height: 1.5;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  background-color: #3048D2;
  color: white;
  border-radius: 4px;
  margin-top: 15px;

  &:active {
    background-color: #1A1A93;
  }
`;

function TermsAndConditions({ title, content, checked, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);

  const opening = () => {
    setIsOpen((v) => !v);
  };

  return (
    <Container>
      <TermsTitle onClick={onToggle}>
        <div>
          <CheckImg
            src={checked ? blueCheck : grayCheck}
            alt="checked"
          />
        </div>
        <div>{title}</div>
      </TermsTitle>

      <Detail>
        <TermsCheckButton onClick={opening}>
          보기
        </TermsCheckButton>
        {isOpen && (
          <Overlay onClick={opening}>
            <Modal onClick={(e) => e.stopPropagation()}>
              <h2>{title}</h2>
              <ContentArea>{content}</ContentArea>
              <CloseButton onClick={opening}>
                닫기
              </CloseButton>
            </Modal>
          </Overlay>
        )}
      </Detail>
    </Container>
  );
}

export default TermsAndConditions;
