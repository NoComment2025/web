import '../styles/signInPassword.css';

function SignInPassword({setStep}) {
    const onClickBefore = () => {
      setStep(1);
    }
    return (
        <>
        <div>
            <div className="inputContainer">
              <label className="labelText">비밀번호</label>
              <input className="inputBox" type="text" placeholder="비밀번호를 입력해주세요." />
            </div>

            <div className="inputContainer">
              <label className="labelText">비밀번호 확인</label>
              <input className="inputBox" type="text" placeholder="비밀번호를 다시 입력해주세요." />
              <div className="pos">
                <button className="isIdAvailable">중복 확인</button>
              </div>
            </div>

            <div className='a'>
                <button className="beforeButton" onClick={onClickBefore}>이전</button>
                <button className="signInButton">회원가입</button>
            </div>
        </div>
        </>
    ) 
}

export default SignInPassword