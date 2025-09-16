import "./";

function Analysis() {
  function CategoryButton(props) {
    return (
      <button
        id={props.id}
        style={{
          gridRow: '6/8',
          backgroundColor: '#151F5A',
          border: 'none',
          borderRadius: '10px',
          fontSize: '14px',
        }}
      >
        {props.name}
      </button>
    );
  }

  return (
    <div className="analyze">
      <form id="subject-form">
        <div className="subject-box">
            <span>주제</span>
            <input
            id="subject-input"
            type="text"
            placeholder="발표의 주제를 입력해주세요."
            />
            <CategoryButton id="category-balphyo" name="발표" />
            <CategoryButton id="category-yeonseol" name="연설" />
            <CategoryButton id="category-gangyeon" name="강연" />
            <CategoryButton id="category-guitar" name="기타" />

            <div id='divid'></div>

            <label id="timeY">
                <input type="radio" id="timelimitY" name="timelimit" value="있음" />
                시간 제한 있음
            </label>

            <label id='timeN'>
                <input type="radio" id="timelimitN" name="timelimit" value="없음" />
                시간 제한 없음
            </label>
            </div>

        <div id="file-submit"></div>

        <button id="submit-button" type="submit">
          다음
        </button>
      </form>
    </div>
  );
}

export default Analysis;
