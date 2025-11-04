import { useState } from "react";
import styled from "styled-components";
import checked from '../assets/checked.png';
import notCheck from '../assets/notCheck.png';
import TermsAndConditions from "./TermsAndConditions";


const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const AgreeContainer = styled.div`
    margin-top: 4rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UnderHr = styled.hr`
    border: 2px solid #1C1C1C;
    margin: 1.5rem 0;
    width: 360px;
`;

const UnderHrBold = styled.hr`
    border: 2px solid #3B3B3B;
    margin: 1.5rem 0;
    width: 400px;
`;

const AgreeAll = styled.div`
    display: flex;
    justify-content: center;
    font-size: 20px;
    gap: 11px;
    align-items: center;
    cursor: pointer;
`;

const AgreeAllImg = styled.img`
    width: 24px;
    height: 24px;
`;

const AgreeAndSigninButton = styled.button`
    margin-top: 2.4rem;
    background-color: #3B3B3B;
    border: none;
    border-radius: 15px;
    width: 400px;
    height: 52px;
    color: #fff;
    font-size: 1.375rem;
    transition: background-color 0.2s ease;

    &.active {
        background-color: #3048D2;
        cursor: pointer;
    }
`;

function SignUpAgree() {
  const [terms, setTerms] = useState({
    service: false,
    privacy: false,
    age: false,
  });

  const allChecked = Object.values(terms).every(Boolean);

  const handleChange = (key) => {
    setTerms((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleAllChange = () => {
    const newValue = !allChecked;
    setTerms({
      service: newValue,
      privacy: newValue,
      age: newValue,
    });
  };

  return (
    <FormWrapper>
      <AgreeContainer>
        <TermsAndConditions
          title="서비스 이용약관 (필수)"
          content="어아"
          checked={terms.service}
          onToggle={() => handleChange("service")}
        />
        <UnderHr />
        <TermsAndConditions
          title="개인정보 처리방침 (필수)"
          content="우아"
          checked={terms.privacy}
          onToggle={() => handleChange("privacy")}
        />
        <UnderHr />
        <TermsAndConditions
          title="만 14세 이상 확인 (필수)"
          content="ㅇㅇ"
          checked={terms.age}
          onToggle={() => handleChange("age")}
        />
        <UnderHrBold />
      </AgreeContainer>

      
      <AgreeAll onClick={handleAllChange}>
        <AgreeAllImg
            src={allChecked ? checked : notCheck}
            alt="전체 동의 체크"
        />
        <p>전체 동의</p>
      </AgreeAll>


      <div>
        <AgreeAndSigninButton
          className={allChecked ? "active" : ""}
          disabled={!allChecked}
        >
          동의하고 가입하기
        </AgreeAndSigninButton>
      </div>
    </FormWrapper>
  );
}

export default SignUpAgree;
