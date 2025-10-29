import { useState } from "react";
import eye from "../assets/eye.png";
import noEye from "../assets/noEye.png";

function SignInPW({ password, setPassword, error }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="inputContainer">
      <div className="labelRow">
        <label className="labelText">비밀번호</label>
        {error && <label className="warningText">{error}</label>}
      </div>
      <div className="inputWrapper">
        <input
          className="InputBox"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <img
          src={showPassword ? noEye : eye}
          alt="비밀번호 보기"
          onClick={() => setShowPassword(!showPassword)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default SignInPW;
