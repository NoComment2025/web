import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Oauth from './oauth';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  margin-bottom: 1.25em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LabelRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: 0.6rem;
`;

const LabelText = styled.label`
  font-size: 1.4rem;
  display: flex;
`;

const WarningText = styled.span`
  align-content: center;
  text-align: end;
  font-size: 12px;
  color: red;
`;

const InputBox = styled.input`
  width: 100%;
  max-width: 400px;
  height: 50px;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 15px;
  border: none;
  background-color: #3b3b3b;
  color: #fff;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #8C8C8C;
  }
`;

const IdAvailableButton = styled.button`
  background-color: #3048D2;
  border: none;
  border-radius: 8px;
  padding: 0.25rem 0.8rem;
  color: #fff;
  text-align: center;
  cursor: pointer;

  &:active {
    background-color: #1A1A93;
  }
`;

const IdCheckButtonPosition = styled.div`
  margin: 1rem 0 0 0;
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: flex-end;
`;

const NextButton = styled.button`
  background-color: #3048D2;
  border: none;
  border-radius: 15px;
  max-width: 400px;
  width: 100%;
  height: 52px;
  color: #fff;
  font-size: 1.375rem;
  cursor: pointer;
  margin-top: 13px;

  &:active {
    background-color: #1A1A93;
  }
`;

const ToLogInButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ToLogInLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  width: 400px;
  height: 52px;
  border: 1px #fff solid;
  border-radius: 15px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.375rem;
  text-decoration: none;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

function SignUpUsername({ setStep, name, setName, id, setId }) {
  const [errors, setErrors] = useState({ name: "", id: "" });

  const onClickNext = () => {
    const newErrors = { name: "", id: "" };

    if (name.trim() === "") newErrors.name = "내용을 입력해 주십시오.";
    if (id.trim() === "") newErrors.id = "내용을 입력해 주십시오.";

    setErrors(newErrors);

    if (newErrors.name === "" && newErrors.id === "") {
      setStep(2);
    }
  };

  return (
    <FormWrapper>
      <ContentBlock>
        <InputContainer>
          <LabelRow>
            <LabelText>성명</LabelText>
            {errors.name && <WarningText>{errors.name}</WarningText>}
          </LabelRow>

          <InputBox
            type="text"
            placeholder="사용자 성명을 입력해주세요."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </InputContainer>

        <InputContainer>
          <LabelRow>
            <LabelText>아이디</LabelText>
            {errors.id && <WarningText>{errors.id}</WarningText>}
          </LabelRow>

          <InputBox
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <IdCheckButtonPosition>
            <IdAvailableButton>중복 확인</IdAvailableButton>
          </IdCheckButtonPosition>
        </InputContainer>
      </ContentBlock>

      <NextButton onClick={onClickNext}>다음</NextButton>

      <Oauth />

      <ToLogInButtonContainer>
        <ToLogInLink to="/signin">로그인</ToLogInLink>
      </ToLogInButtonContainer>
    </FormWrapper>
  );
}

export default SignUpUsername;
