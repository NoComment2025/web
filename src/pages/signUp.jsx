import mike from '../assets/mike-img.png';
import logo from "../assets/ORATO-logo.png"
import { Link } from "react-router-dom";
import SignUpID from '../pages/signUp_ID.jsx'
import SignUpPW from '../pages/signUp_PW.jsx'
import { useState, useEffect } from 'react';
import checked from '../assets/checked.png';
import notCheck from '../assets/notCheck.png';
import '../styles/signUp.css'

function SignUp() {
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
        <div className="leftContainer">
          <div className="on">  
            <p style={{fontSize: '3em', display: 'flex',  alignItems: 'center'}}>
              발표<img className="mike" src={mike} alt="mike" />
            </p>
          </div>
          <p style={{fontSize: '36px'}}>이제 AI와 함께 완벽하게</p>
        </div>

        <hr />

        <div className="rightContainer">
          <img src={logo} alt="로고" className="logo" />

          <SignUpID id={id} setId={setId} error={errors.id} />
          <SignUpPW password={password} setPassword={setPassword} error={errors.password} />
          
          <div className="idCheck" onClick={change} >
            <img 
                src={idChecked ? checked : notCheck}
                alt="아이디 저장"
                className="agreeAllImg"
            />
            <p>아이디 저장</p>
          </div>

          <button className="nextButton" onClick={onClickLogin}>
            로그인
          </button>

          <div className="OAuthButton">
            <img src="https://img.icons8.com/color/512/google-logo.png" alt="google" className="imgSize" />
            <img src="https://wiki1.kr/images/thumb/c/cf/%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png/200px-%EB%84%A4%EC%9D%B4%EB%B2%84%E3%88%9C_%EB%A1%9C%EA%B3%A0.png" alt="naver" className="imgSize" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/KakaoTalk_logo.svg" alt="kakao" className="imgSize" />
          </div>

          <div className="toLogInButtonContainer">
            <Link to="/signin" className="toLogInButton">회원가입</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
