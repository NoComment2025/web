import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

import mike from "../assets/mike-img.png";
import signInBgImg from "../assets/signin-bg-img.png";
import SignUpUsername from "../components/signUpUsername";
import SignUpPassword from "../components/signUpPassword";
import SignUpAgree from "../components/signUpAgree";
import logo from "../assets/ORATO-logo.png";

const LogoImage = styled.img`
    width: 202px;
    margin: 3.5rem auto;
    display: block;
`;

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

const SubtitleP = styled.p`
    font-size: 36px;
`;

const MikeImage = styled.img.attrs({ src: mike, alt: "mike" })`
    height: 1em;
`;

function SignUp() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <>
      <GlobalStyle />
      <Background>
        <Container>
          <LeftContainer>
            <OnDiv>  
              <TitleP>
                발표
                <MikeImage />
              </TitleP>
            </OnDiv>
            <SubtitleP>이제 AI와 함께 완벽하게</SubtitleP>
          </LeftContainer>
          
          <Separator />

          <RightContainer>
            <LogoImage src={logo} alt="로고" />
            <div>
              {step === 1 ? <SignUpUsername setStep={setStep}  name={name} setName={setName} id={id} setId={setId} /> : null}
              {step === 2 ? <SignUpPassword setStep={setStep} password={password} setPassword={setPassword} checkPassword={checkPassword} setCheckPassword={setCheckPassword} /> : null}
              {step === 3 ? <SignUpAgree setStep={setStep} /> : null}
            </div>
          </RightContainer>
        </Container>
      </Background>
    </>
  );
}

export default SignUp;