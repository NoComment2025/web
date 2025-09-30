import logo from "../assets/ORATO-logo.png";
import mike from "../assets/signin-mike-img.png"
import '../styles/signIn.css'
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="background">
      <div className="container">
        <div>
          <div className="leftContainer">
            <div className="on">
              <div>
                <p style={{ fontSize: '48px' }}>발표</p>
              </div>
              <div>
                <img className="mike" src={mike} alt="mike" />
              </div>
            </div>
            <p style={{ fontSize: '36px' }}>이제 AI와 함께 완벽하게</p>
          </div>
        </div>
        <hr />

        <div className="rightContainer">
          <div>
            <img src={logo} alt="로고" className="logo" />
          </div>
          
          <div>
            <div className="inputContainer">
              <label className="labelText">성명</label>
              <input className="inputBox" type="text" placeholder="사용자 성명을 입력해주세요." />
            </div>

            <div className="inputContainer">
              <label className="labelText">아이디</label>
              <input className="inputBox" type="text" placeholder="아이디를 입력해주세요." />
              <div className="pos">
                <button className="isIdAvailable">중복 확인</button>
              </div>
            </div>

            <div>
              <div>
                <button className="nextButton">다음</button>
              </div>

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
                <Link to="/signup-id" className="toLogInButton">
                  회원가입
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
