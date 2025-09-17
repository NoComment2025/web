import { useState } from "react";
import "../styles/Analysis.css";
import NavBar from '../components/NavBar';
import Text from '../components/Text';

function CategoryButton({ id, name, onClick, isActive }) {
  return (
    <button
      id={id}
      onClick={onClick}
      style={{
        gridRow: '7/8',
        backgroundColor: isActive ? '#FF6B6B' : '#151F5A',
        border: 'none',
        borderRadius: '10px',
        fontSize: '14px',
        cursor: 'pointer',
      }}
    >
      {name}
    </button>
  );
}

function Analysis() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedCategory) {
      alert("태그를 선택해주세요.");
      return;
    }

    console.log("제출됨:", { selectedCategory });
  };

  return (
    <>
      <div className="analyze">
        <form id="subject-form" onSubmit={handleSubmit}>
          <div className="subject-box">
            <span>주제</span>
            <input
              id="subject-input"
              type="text"
              placeholder="발표의 주제를 입력해주세요."
              required
            />

            <CategoryButton 
              id="category-balphyo" 
              name="발표"
              onClick={() => setSelectedCategory("발표")}
              isActive={selectedCategory === "발표"}
            />
            <CategoryButton 
              id="category-yeonseol" 
              name="연설"
              onClick={() => setSelectedCategory("연설")}
              isActive={selectedCategory === "연설"}
            />
            <CategoryButton 
              id="category-gangyeon" 
              name="강연" 
              onClick={() => setSelectedCategory("강연")}
              isActive={selectedCategory === "강연"}
            />
            <CategoryButton 
              id="category-guitar" 
              name="기타" 
              onClick={() => setSelectedCategory("기타")}
              isActive={selectedCategory === "기타"}
            />

            <div id='divid'></div>

            <label id="timeY" className='custom-radio'>
              <input type="radio" id="timelimitY" name="timelimit" value="있음" />
              <span></span>
              시간 제한 있음
            </label>

            <label id='timeN' className='custom-radio'>
              <input type="radio" id="timelimitN" name="timelimit" value="없음" />
              <span></span>
              시간 제한 없음
            </label>
          </div>

          <div id="file-submit">
            <span id='img1'></span>
            <span id='img2'></span>
            <Text>끌어서 가져오거나 클릭해 파일 선택하기</Text>
          </div>

          <button id="submit-button" type="submit">
            다음
          </button>
        </form>
      </div>
      <NavBar />
    </>
  );
}

export default Analysis;
