import logo from "../assets/ORATO-logo.png";
import TermsAndConditions from "./TermsAndConditions";
import "../styles/signInAgree.css";
import { useState } from "react";
import checked from '../assets/checked.png';
import notCheck from '../assets/notCheck.png';

function SignInAgree() {
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
    <>
      <div>
        <img src={logo} alt="로고" className="logo" />
      </div>

      <div className="containerAgree">
        <TermsAndConditions
          title="서비스 이용약관 (필수)"
          content="어아"
          checked={terms.service}
          onToggle={() => handleChange("service")}
        />
        <hr className="underHr" />
        <TermsAndConditions
          title="개인정보 처리방침 (필수)"
          content="우아"
          checked={terms.privacy}
          onToggle={() => handleChange("privacy")}
        />
        <hr className="underHr" />
        <TermsAndConditions
          title="만 14세 이상 확인 (필수)"
          content="ㅇㅇ"
          checked={terms.age}
          onToggle={() => handleChange("age")}
        />
        <hr className="underHrBold" />
      </div>

      
      <div className="agreeAll" onClick={handleAllChange}>
        <img
            src={allChecked ? checked : notCheck}
            alt="전체 동의 체크"
            className="agreeAllImg"
        />
        <p>전체 동의</p>
        </div>


      <div>
        <button
          className={`agreeAndSigninButton ${allChecked ? "active" : ""}`}
          disabled={!allChecked}
        >
          동의하고 가입하기
        </button>
      </div>
    </>
  );
}

export default SignInAgree;
