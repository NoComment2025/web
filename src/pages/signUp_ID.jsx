function SignUpID({ id, setId, error }) {
  return (
    <div className="inputContainer">
      <div className="labelRow">
        <label className="labelText">아이디</label>
        {error && <label className="warningText">{error}</label>}
      </div>
      <input
        className="inputBox"
        type="text"
        placeholder="아이디를 입력해주세요."
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
    </div>
  );
}

export default SignUpID;
