import { useState } from 'react';
import '../styles/Analysis.css';
import Button from '../components/atom/button';
import NavigationSystem from '../components/organism/NavigationSystem';
import Text from '../components/atom/text';
import RecordTable from '../components/organism/RecordTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  const [step, setStep] = useState('upload');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [date, setDate] = useState(new Date());
  const [isDragging, setIsDragging] = useState(false);
  const [upload, setUpload] = useState(false);
  const [check, setCheck] = useState(false);
  const [subject, setSubject] = useState('');
  const [fails, setFails] = useState([0, 0, 0, 0]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [musicFiles, setMusicFiles] = useState([]);

  const handleDrag = (e, dragging) => {
    e.preventDefault();
    setIsDragging(dragging);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = e.dataTransfer.files;
    const videoFiles = droppedFiles.filter((file) =>
      file.type.startsWith('video/')
    );
    const musicFiles = droppedFiles.filter((file) =>
      file.type.startsWith('audio/')
    );

    setVideoFiles(videoFiles);
    setMusicFiles(musicFiles);
    
    console.log('파일을 서버로 보내는 기능 만들어야함');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCategory) {
      setFails((prev) => prev.map((val, i) => (i === 0 ? 1 : val)));
    }

    if (!check) {
      setFails((prev) => prev.map((val, i) => (i === 1 ? 1 : val)));
    }

    if (!subject) {
      setFails((prev) => prev.map((val, i) => (i === 2 ? 1 : val)));
    }

    if (!upload) {
      setFails((prev) => prev.map((val, i) => (i === 3 ? 1 : val)));
    }

    if (selectedCategory && check && subject != '' && upload) {
      setFails((prev) => prev.map(() => 0));
      const formData = new FormData();
      setStep('list')
    }
  };

  return (
    <>
      <NavigationSystem />
      {step === 'upload' ? (
        <div className="analyze">
          <form id="subject-form" onSubmit={handleSubmit}>
            <div className="subject-box">
              {fails[2] === 1 && (
                <Text variant="fail" id="title-fail">
                  내용을 입력해주세요.
                </Text>
              )}
              <Text variant="title" id="title">
                주제
              </Text>
              <input
                id="subject-input"
                type="text"
                placeholder="발표의 주제를 입력해주세요."
                onChange={(e) => setSubject(e.target.value)}
              />

              <CategoryButton
                id="category-balphyo"
                name="발표"
                onClick={() => setSelectedCategory('발표')}
                isTagActive={selectedCategory === '발표'}
              />

              <CategoryButton
                id="category-yeonseol"
                name="연설"
                onClick={() => setSelectedCategory('연설')}
                isTagActive={selectedCategory === '연설'}
              />
              <CategoryButton
                id="category-gangyeon"
                name="강연"
                onClick={() => setSelectedCategory('강연')}
                isTagActive={selectedCategory === '강연'}
              />
              <CategoryButton
                id="category-guitar"
                name="기타"
                onClick={() => setSelectedCategory('기타')}
                isTagActive={selectedCategory === '기타'}
              />

              {fails[0] === 1 && (
                <Text variant="fail" id="category-fail">
                  태그를 선택해주세요.
                </Text>
              )}

              {fails[2] === 1 && (
                <Text variant="fail" id="check-fail">
                  시간 제한 유무를 선택해주세요.
                </Text>
              )}

              <div id="divid"></div>

              <label id="timeY" className="custom-radio">
                <input
                  type="radio"
                  id="timelimitY"
                  name="timelimit"
                  value="있음"
                  onClick={() => {
                    setSelectedTime('yes');
                    setCheck('yes');
                  }}
                />
                <span></span>
                시간 제한 있음
              </label>

              <label id="timeN" className="custom-radio">
                <input
                  type="radio"
                  id="timelimitN"
                  name="timelimit"
                  value="없음"
                  onClick={() => {
                    setSelectedTime('no');
                    setCheck('yes');
                  }}
                />
                <span></span>
                시간 제한 없음
              </label>

              <div id="limitnum">
                {selectedTime === 'yes' && (
                  <DatePicker
                    selected={date}
                    onChange={(d) => setDate(d)}
                    dateFormat="hh 시 mm 분 ss 초"
                    className="datepicker-input"
                  />
                )}
              </div>
            </div>

            {fails[3] === 1 && (
              <Text variant="fail" id="upload-fail">
                파일을 업로드해주세요.
              </Text>
            )}
            <div
              onClick={() => document.getElementById('fileInput').click()}
              id="file-submit"
              onDragEnter={(e) => handleDrag(e, true)}
              onDragOver={(e) => handleDrag(e, true)}
              onDragLeave={(e) => handleDrag(e, false)}
              onDrop={handleDrop}
              onChange={(e) => {
                const files = e.target.files;
                if (files.length > 0) {
                  // 실제 파일이 선택되었을 때만
                  console.log('선택된 파일:', files);
                  setUpload(true);
                }
              }}
            >
              <input type="file" id="fileInput" />
              <span id="img1"></span>
              <span id="img2"></span>
              <Text>끌어서 가져오거나 클릭해 파일 선택하기.</Text>
            </div>

            <button id="submit-button" type="submit">
              다음
            </button>
          </form>
        </div>
      ) : (
        <RecordTable></RecordTable>
      )}
    </>
  );
}

export default Analysis;
