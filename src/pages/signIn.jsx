import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link } from "react-router-dom";

import mike from '../assets/mike-img.png';
import logo from "../assets/ORATO-logo.png"
import checked from '../assets/checked.png';
import notCheck from '../assets/notCheck.png';
import SignInID from './signIn_ID.jsx'
import SignInPW from './signIn_PW.jsx'
import OAuth from '../components/oauth.jsx'
import signInBgImg from '../assets/signin-bg-img.png';


const dummyUsers = [{ id: "test", password: "password" }]; 

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
`;

const Background = styled.div`
    background-image: url(${signInBgImg});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    width: 100%;
    max-width: 1100px;
    height: 700px;
    background-color: #181818;
    border-radius: 25px;
    color: #fff;
`;

const LeftContainer = styled.div`
    width: 550px;
    height: 700px;
    text-align: center;
    align-content: center;
`;

const RightContainer = styled.div`
    width: 550px;
    height: 700px;
    text-align: center; 
`;

const OnDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const Separator = styled.hr`
    border: 3px solid #272727;
    height: auto;
    margin: 2rem 0;
    flex-shrink: 0;
`;

const TitleP = styled.p`
    font-size: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MikeImage = styled.img.attrs({ src: mike, alt: "mike" })`
    width: auto;
    height: 1em;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  width: 100%;
`;

const LogoImage = styled.img.attrs({ src: logo, alt: "로고" })`
    width: 202px;
    margin: 3.5rem auto;
    display: block;
`;

const IdCheckDiv = styled.div`
    display: flex;
    gap: 0.375rem;
    cursor: pointer;
    width: 100%;
    max-width: 400px;
    justify-content: flex-start; 
    margin: 0.875rem 0 0.9375rem 0; 
`;

const AgreeAllImg = styled.img`
    width: 20px;
    height: 20px;
`;

const NextButton = styled.button`
    background-color: #3048D2;
    border: none;
    border-radius: 15px;
    max-width: 400px;
    width: 100%;
    height: 52px;
    color: #fff;
    font-size: 1.375rem;
    cursor: pointer;

    &:hover {
        background-color: #1A1A93;
    }
`;

const ToLogInButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 400px;
`;

const ToLogInLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
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





function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ id: "", password: "" });
  const [idChecked, setidChecked] = useState(false);
  

  useEffect(() => {
    const savedId = localStorage.getItem("savedId");
    if (savedId) {
      setId(savedId);
      setidChecked(true);
    }
  }, []);

  const change = () => setidChecked((v) => !v);

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

    const user = dummyUsers.find(user => user.id === id);
    if (!user) {
      setErrors({ id: "존재하지 않는 아이디입니다.", password: "" });
      return;
    }

    if (user.password !== password) {
      setErrors({ id: "", password: "비밀번호가 다릅니다." });
      return;
    }


    alert("로그인 성공!"); 
    
    setErrors({ id: "", password: "" });

    if (idChecked) {
      localStorage.setItem("savedId", id);
    } else {
      localStorage.removeItem("savedId");
    }
  };

  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <LeftContainer>
            <OnDiv>  
              <TitleP>
                발표<MikeImage />
              </TitleP>
            </OnDiv>
            <p style={{fontSize: '36px'}}>이제 AI와 함께 완벽하게</p>
          </LeftContainer>

          <Separator />

          <RightContainer>
            <FormWrapper>
                <LogoImage />

                <SignInID id={id} setId={setId} error={errors.id} />
                <SignInPW password={password} setPassword={setPassword} error={errors.password} />
                
                <IdCheckDiv onClick={change} >
                  <AgreeAllImg 
                      src={idChecked ? checked : notCheck}
                      alt="아이디 저장"
                  />
                  <p>아이디 저장</p>
                </IdCheckDiv>

                <NextButton onClick={onClickLogin}>
                  로그인
                </NextButton>

                <OAuth />

                <ToLogInButtonContainer>
                  <ToLogInLink to="/signup">회원가입</ToLogInLink>
                </ToLogInButtonContainer>
            </FormWrapper>
          </RightContainer>
        </Container>
      </Background>
    </>
  );
}

export default SignIn;