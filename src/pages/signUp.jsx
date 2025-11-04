import mike from "../assets/mike-img.png";
import '../styles/signUp.css';
import SignUpUsername from "../components/signUpUsername";
import SignUpPassword from "../components/signUpPassword";
import SignUpAgree from "../components/signUpAgree";
import { useState } from "react";

function SignUp() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

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
            {step === 1? <SignUpUsername setStep={setStep}  name={name} setName={setName} id={id} setId={setId} /> : null}
            {step === 2? <SignUpPassword setStep={setStep} password={password} setPassword={setPassword} checkPassword={checkPassword} setCheckPassword={setCheckPassword} /> : null}
            {step === 3? <SignUpAgree setStep={setStep} /> : null}
          </div>

        </div>
      </div>
    </div>
  );
}

export default SignUp;