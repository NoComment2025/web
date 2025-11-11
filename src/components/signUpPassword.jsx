import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import eye from "../assets/eye.png";
import noEye from "../assets/noEye.png";
import Oauth from './oauth';

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContentBlock = styled.div`
  margin-bottom: 3.3125rem;
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

const InputWrapper = styled.div`
    width: 100%;
    max-width: 400px;
    height: 50px;
    background-color: #3b3b3b;
    border: none;
    border-radius: 15px;
    padding: 0 15px; /* 좌우 패딩만 유지 */
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
`;

const InputBox = styled.input`
    background: none;
    border: none;
    flex: 1;
    color: #fff;
    font-size: 1rem;
    height: 100%; 

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: #8C8C8C;
    }
`;

const EyeIcon = styled.img`
    width: 24px;
    height: 24px;
    cursor: pointer;
    flex-shrink: 0;
`;

const ActionRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
    max-width: 400px;
`;

const Button = styled.button`
    border: none;
    border-radius: 15px;
    max-width: 190px;
    width: 100%;
    height: 52px;
    color: #fff;
    font-size: 1.375rem;
    cursor: pointer;
`;

const BeforeButton = styled(Button)`
    background-color: #8C8C8C;

    &:active {
        background-color: #7F7F7F;
    }
`;

const SignUpButton = styled(Button)`
    background-color: #3048D2;

    &:active {
        background-color: #1A1A93;
    }
`;

const ToLogInButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const ToLogInLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    max-width: 400px;
    width: 100%;
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


function SignUpPassword({ setStep, password, setPassword, checkPassword, setCheckPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [errors, setErrors] = useState({ password: "", checkPassword: "" });

  const onClickBefore = () => {
    setStep(1);
  };

  const onClickNext = () => {
    const newErrors = { password: "", checkPassword: "" };

    if (password.trim() === "") newErrors.password = "내용을 입력해 주세요.";
    if (checkPassword.trim() === "") newErrors.checkPassword = "내용을 입력해 주세요.";
    if (password && checkPassword && password !== checkPassword) {
      newErrors.checkPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);

    if (newErrors.password === "" && newErrors.checkPassword === "") {
      setStep(3);
    }
  };

  return (
    <FormWrapper>
      <ContentBlock>
        <InputContainer>
          <LabelRow>
            <LabelText>비밀번호</LabelText>
            {errors.password && <WarningText>{errors.password}</WarningText>}
          </LabelRow>
          <InputWrapper>
            <InputBox
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요."
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <EyeIcon
              src={showPassword ? noEye : eye}
              alt="비밀번호 보기"
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputWrapper>
        </InputContainer>

        <InputContainer>
          <LabelRow>
            <LabelText>비밀번호 확인</LabelText>
            {errors.checkPassword && <WarningText>{errors.checkPassword}</WarningText>}
          </LabelRow>
          <InputWrapper>
            <InputBox
              type={showPassword2 ? "text" : "password"}
              placeholder="비밀번호를 다시 입력해주세요."
              onChange={(e) => setCheckPassword(e.target.value)}
              value={checkPassword}
            />
            <EyeIcon
              src={showPassword2 ? noEye : eye}
              alt="비밀번호 확인"
              onClick={() => setShowPassword2(!showPassword2)}
            />
          </InputWrapper>
        </InputContainer>
      </ContentBlock>

      <ActionRow>
        <BeforeButton onClick={onClickBefore}>이전</BeforeButton>
        <SignUpButton onClick={onClickNext}>회원가입</SignUpButton>
      </ActionRow>

      <Oauth />

      <ToLogInButtonContainer>
        <ToLogInLink to="/signin">로그인</ToLogInLink>
      </ToLogInButtonContainer>
    </FormWrapper>
  );
}

export default SignUpPassword;
