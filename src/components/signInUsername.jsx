import '../styles/signInUsername.css';

function SignInUsername({setStep}) {
    const onClickNext = () => {
        setStep(2);
    }
    return (
        <>
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
                <button className="nextButton" onClick={onClickNext}>다음</button>
              </div>
        </div>
        </>
    ) 
}

export default SignInUsername