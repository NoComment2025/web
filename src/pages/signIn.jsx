import logo from "../assets/ORATO-logo.png";
import mike from "../assets/signin-mike-img.png";
import '../styles/signIn.css';
import SignInUsername from "../components/signInUsername";
import SignInPassword from "../components/signInPassword";
import SignUp from "./signUp";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignIn() {
  const [step, setStep] = useState(1);
  return (
    <div className="background">
      <div className="container">
        <div>
          <div className="leftContainer">
            <div className="on">  
              <p style={{fontSize: '3em', display: 'flex',  alignItems: 'center'}}>발표<img className="mike" src={mike} alt="mike" /></p>
            </div>
            <p style={{fontSize: '36px'}}>이제 AI와 함께 완벽하게</p>
          </div>
        </div>
        <hr />

        <div className="rightContainer">
          <div>
            <img src={logo} alt="로고" className="logo" />
          </div>
          <div>
            {step === 1? <SignInUsername setStep={setStep} /> : null}
            {step === 2? <SignInPassword setStep={setStep} /> : null}
          </div>
          <div>
            <div className="OAuthButton">
              <div>
                <img src="https://img.icons8.com/color/512/google-logo.png" alt="google"  className="imgSize" />
              </div>

              <div>
                <img src="https://wiki1.kr/images/thumb/c/cf/%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png/200px-%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png" alt="naver"  className="imgSize" />
              </div>

              <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" alt="kakao"  className="imgSize" />
              </div>
            </div>
            <div className="toLogInButtonContainer">
              <Link to="/signup" className="toLogInButton">
                <SignUp />로그인
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;