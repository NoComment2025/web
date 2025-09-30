import { useState } from "react";
import "../styles/Analysis.css";
import NavBar from "../components/organism/NavBar";
import Text from "../components/atom/Text";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CategoryButton({ id, name, onClick, isTagActive }) {
  return (
    <button
      type="button"
      id={id}
      onClick={onClick}
      style={{
        gridRow: '7/8',
        backgroundColor: isTagActive ? '#3048D2' : '#151F5A',
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
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isDragging, setIsDragging] = useState(false);


  const handleDrag = (e, dragging) => {
    e.preventDefault();
    setIsDragging(dragging);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    console.log("파일을 서버로 보내는 기능 만들어야함")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(selectedCategory)

    if (!selectedCategory) {
      console.log("제출 안됨;;")
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
              isTagActive={selectedCategory === "발표"}
            />
            <CategoryButton 
              id="category-yeonseol" 
              name="연설"
              onClick={() => setSelectedCategory("연설")}
              isTagActive={selectedCategory === "연설"}
            />
            <CategoryButton 
              id="category-gangyeon" 
              name="강연" 
              onClick={() => setSelectedCategory("강연")}
              isTagActive={selectedCategory === "강연"}
            />
            <CategoryButton 
              id="category-guitar" 
              name="기타" 
              onClick={() => setSelectedCategory("기타")}
              isTagActive={selectedCategory === "기타"}
            />

            <div id='divid'></div>

            <label id="timeY" className='custom-radio'>
              <input type="radio" id="timelimitY" name="timelimit" value="있음" onClick={() => setSelectedTime("yes")}/>
              <span
              ></span>
              시간 제한 있음
            </label>

            <label id='timeN' className='custom-radio'>
              <input type="radio" id="timelimitN" name="timelimit" value="없음" onClick={() => setSelectedTime("no")}/>
              <span
              ></span>
              시간 제한 없음
            </label>

            <div id="limitnum">
            {selectedTime === "yes" && (
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                dateFormat="hh 시 mm 분 ss 초"
                className="datepicker-input"
              />
            )}
            </div>

          </div>

          <div 
            id="file-submit"
            onDragEnter={(e) => handleDrag(e, true)}
            onDragOver={(e) => handleDrag(e, true)}
            onDragLeave={(e) => handleDrag(e, false)}
            onDrop={handleDrop}
          >
            <span id='img1'></span>
            <span id='img2'></span>
            <Text>끌어서 가져오거나 클릭해 파일 선택하기.</Text>
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
