import '../styles/signInPassword.css';
import { Link } from "react-router-dom";
import logo from "../assets/ORATO-logo.png";
import eye from "../assets/eye.png";
import noEye from "../assets/noEye.png";
import { useState } from 'react';

function SignInPassword({ setStep, password, setPassword, checkPassword, setCheckPassword }) {
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
    <>
      <div>
        <div>
          <img src={logo} alt="로고" className="logo" />
        </div>

        <div className='b'>
          <div className="inputContainer">
            <div className='labelRow'>
              <label className="labelText">비밀번호</label>
              {errors.password && <span className="warningText">{errors.password}</span>}
            </div>
            <div className="inputWrapper">
              <input
                className="InputBox"
                type={showPassword ? "text" : "password"}
                placeholder="비밀번호를 입력해주세요."
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <img
                src={showPassword ? noEye : eye}
                alt="비밀번호 보기"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>

          <div className="inputContainer">
            <div className='labelRow'>
              <label className="labelText">비밀번호 확인</label>
              {errors.checkPassword && <span className="warningText">{errors.checkPassword}</span>}
            </div>
            <div className="inputWrapper">
              <input
                className="InputBox"
                type={showPassword2 ? "text" : "password"}
                placeholder="비밀번호를 다시 입력해주세요."
                onChange={(e) => setCheckPassword(e.target.value)}
                value={checkPassword}
              />
              <img
                src={showPassword2 ? noEye : eye}
                alt="비밀번호 확인"
                onClick={() => setShowPassword2(!showPassword2)}
              />
            </div>
          </div>
        </div>

        <div className='a'>
          <button className="beforeButton" onClick={onClickBefore}>이전</button>
          <button className="signInButton" onClick={onClickNext}>회원가입</button>
        </div>
      </div>

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
        <Link to="/signup" className="toLogInButton">로그인</Link>
      </div>
    </>
  );
}

export default SignInPassword;
