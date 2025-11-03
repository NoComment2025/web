import logo from "../assets/ORATO-logo.png";
import mike from "../assets/signin-mike-img.png"
import '../styles/signIn.css'
import { Link } from "react-router-dom";
import SignInID from './signIn_ID.jsx'
import SignInPW from './signIn_PW.jsx'
import { useState, useEffect } from 'react';
import checked from '../assets/checked.png';
import notCheck from '../assets/notCheck.png';
import '../styles/signIn.css'

function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ id: "", password: "" });
  const [idChecked, setidChecked] = useState(false);

  // 페이지 로드 시 로컬스토리지에 저장된 아이디가 있으면 불러오기
  useEffect(() => {
    const savedId = localStorage.getItem("savedId");
    if (savedId) {
      setId(savedId);
      setidChecked(true);
    }
  }, []);

  const change = () => setidChecked((v) => !v);

  // 더미 회원 데이터
  const dummyUsers = [
    { id: "testuser", password: "1234" },
    { id: "alice", password: "abcd" }
  ];

  const onClickLogin = () => {
    let tempErrors = { id: "", password: "" };
    let hasError = false;

    if (!id) {
      tempErrors.id = "아이디를 입력해주세요.";
      hasError = true;
    }
    if (!password) {
      tempErrors.password = "비밀번호를 입력해주세요.";
      hasError = true;
    }

    if (hasError) {
      setErrors(tempErrors);
      return;
    }

    // 아이디 존재 확인
    const user = dummyUsers.find(user => user.id === id);
    if (!user) {
      setErrors({ id: "존재하지 않는 아이디입니다.", password: "" });
      return;
    }

    // 비밀번호 확인
    if (user.password !== password) {
      setErrors({ id: "", password: "비밀번호가 다릅니다." });
      return;
    }

    // 로그인 성공
    alert("로그인 성공!");
    setErrors({ id: "", password: "" });

    // idChecked가 true면 로컬스토리지에 아이디 저장
    if (idChecked) {
      localStorage.setItem("savedId", id);
      console.log("아이디 저장됨:", id);
    } else {
      localStorage.removeItem("savedId");
    }
  };

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
          <p style={{fontSize: '36px'}}>이제 AI와 함께 완벽하게</p>
        </div>

        <hr />

        <div className="rightContainer">
          <img src={logo} alt="로고" className="logo" />

          <SignInID id={id} setId={setId} error={errors.id} />
          <SignInPW password={password} setPassword={setPassword} error={errors.password} />
          
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
