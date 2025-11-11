import { useState } from "react";
import styled from "styled-components";

import eye from "../assets/eye.png";
import noEye from "../assets/noEye.png";

const InputContainer = styled.div`
    margin-bottom: 20px;
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

const WarningText = styled.label`
    text-align: end;
    font-size: 12px;
    color: red;
`;

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`;

const InputBox = styled.input`
    width: 400px;
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
`;

const EyeIcon = styled.img`
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    cursor: pointer;
    filter: invert(70%);
`;


function SignInPW({ password, setPassword, error }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <InputContainer>
      <LabelRow>
        <LabelText>비밀번호</LabelText>
        {error && <WarningText>{error}</WarningText>}
      </LabelRow>
      <InputWrapper>
        <InputBox
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <EyeIcon
          src={showPassword ? noEye : eye}
          alt="비밀번호 보기"
          onClick={() => setShowPassword(!showPassword)}
        />
      </InputWrapper>
    </InputContainer>
  );
}

export default SignInPW;