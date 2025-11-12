import styled from 'styled-components';

const InputContainer = styled.div`
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LabelRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 400px;
    margin-bottom: 0.6rem;
`;

const LabelText = styled.label`
    font-size: 1.4rem;
    display: flex;
`;

const WarningText = styled.label`
    align-content: center;
    text-align: end;
    font-size: 12px;
    color: red;
`;

const InputBox = styled.input`
    width: 400px;
    height: 50px;
    padding: 10px 15px;
    font-size: 16px;
    border-radius: 15px;
    border: none;
    background-color: #3b3b3b;
    color: #fff;
    box-sizing: border-box;

    &:focus {
        outline: none;
    }
`;

function SignInID({ id, setId, error }) {
  return (
    <InputContainer>
      <LabelRow>
        <LabelText>아이디</LabelText>
        {error && <WarningText>{error}</WarningText>}
      </LabelRow>
      <InputBox
        type="text"
        placeholder="아이디를 입력해주세요."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </InputContainer>
  );
}

export default SignInID;

