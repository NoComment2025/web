import '../styles/signInUsername.css';
import { Link } from "react-router-dom";
import SignUp from "../pages/signUp";
import logo from "../assets/ORATO-logo.png";
import { useState } from 'react';

function SignInUsername({ setStep, name, setName, id, setId }) {
  
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
    <>        
      <div>
        <div>
          <img src={logo} alt="로고" className="logo" />
        </div>
        <div className="inputContainer">
          <div className="labelRow">
            <label className="labelText">성명</label>
            {errors.name && <span className="warningText">{errors.name}</span>}
          </div>
          
          <input
            className="inputBox"
            type="text"
            placeholder="사용자 성명을 입력해주세요."
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
        </div>

        <div className="inputContainer">
          <div className='labelRow'>
            <label className="labelText">아이디</label>
            {errors.id && <span className="warningText">{errors.id}</span>}
          </div>
          
          <input
            className="inputBox"
            type="text"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => setId(e.target.value)}
            value={id}
          />
          <div className="pos">
            <button className="isIdAvailable">중복 확인</button>
          </div>
        </div>

        
        <div>
          <button className="nextButton" onClick={onClickNext}>
            다음
          </button>
        </div>

        
        <div>
          <div className="OAuthButton">
            <div>
              <img src="https://img.icons8.com/color/512/google-logo.png" alt="google" className="imgSize" />
            </div>
            <div>
              <img src="https://wiki1.kr/images/thumb/c/cf/%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png/200px-%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png" alt="naver" className="imgSize" />
            </div>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" alt="kakao" className="imgSize" />
            </div>
          </div>

          <div className="toLogInButtonContainer">
            <Link to="/signup" className="toLogInButton">
              <SignUp />로그인
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInUsername;
