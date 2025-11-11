import { useState, useEffect } from 'react';
import '../styles/Analysis.css';
import Button from '../components/atom/button';
import NavigationSystem from '../components/organism/NavigationSystem';
import Text from '../components/atom/text';
import RecordTable from '../components/organism/RecordTable';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

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
  const [isDragging, setIsDragging] = useState(false);
  const [time, setTime] = useState('');
  const [upload, setUpload] = useState(false);
  const [check, setCheck] = useState(false);
  const [subject, setSubject] = useState('');
  const [fails, setFails] = useState([0, 0, 0, 0]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [serverAnalyzing, setServerAnalyzing] = useState(false);

  const formatTime = (num) => {
    const hh = num.slice(0, 2);
    const mm = num.slice(2, 4);
    const ss = num.slice(4, 6);
    return [hh && `${hh}시`, mm && `${mm}분`, ss && `${ss}초`]
      .filter(Boolean)
      .join(' ');
  };

  const timeChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // 숫자만 허용
    setTime(value.substring(0, 6)); // 최대 6자리(HHMMSS)
  };

  const handleDrag = (e, dragging) => {
    if (serverAnalyzing) return;
    e.preventDefault();
    setIsDragging(dragging);
  };

  const handleDrop = (e) => {
    if (serverAnalyzing) return;
    e.preventDefault();
    setIsDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);

    const videos = droppedFiles.filter((f) => f.type.startsWith('video/'));
    setVideoFiles(videos);
    setUpload(videos.length > 0);
  };

  const handleSubmit = async (e) => {
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
      setFails([0, 0, 0, 0]);
      const formData = new FormData();
      // formData.append('category', selectedCategory);
      // formData.append('time', selectedTime);
      // formData.append('subject', subject);
      // if (selectedTime === 'yes') {
      //   formData.append('limitTime', time);
      // }
      // videoFiles.forEach((file) => formData.append('videos', file));
      formData.append('file', videoFiles[0]);

      try {
        // FormData 생성
        const formData = new FormData();
        formData.append('file', videoFiles[0]); // API는 단일 파일(file)만 허용

        const response = await axios.post(
          '/api/assess_pronunciation_md',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        console.log('서버 응답:', response.data);
        setStep('result');
      } catch (error) {
        console.error('서버 전송 실패:', error);
        alert('서버 전송 실패: ' + error.message);
      }
    }
  };

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     try {
  //       const res = await axios.get('/api/status'); // 서버에서 isAnalyzing 반환
  //       setServerAnalyzing(res.data.isAnalyzing);
  //     } catch (err) {
  //       console.error('서버 상태 확인 실패', err);
  //     }
  //   }, 5000); // 5초마다 확인

  //   return () => clearInterval(interval);
  // }, []);

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

              {fails[1] === 1 && (
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
                  <input
                    type="text"
                    value={formatTime(time)}
                    onChange={timeChange}
                    onKeyDown={(e) => e.key === 'Enter' && e.preventDefault()}
                    placeholder="00시 00분 00초"
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
            >
              {serverAnalyzing ? (
                <Text id="never">다른 분석이 진행 중입니다</Text>
              ) : (
                <>
                  <input
                    type="file"
                    id="fileInput"
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      const videos = files.filter((f) =>
                        f.type.startsWith('video/')
                      );
                      setVideoFiles(videos);
                      setUpload(videos.length > 0);

                      console.log('🎥 선택된 비디오 파일:', videos);
                    }}
                  />
                  <span id="img1"></span>
                  <span id="img2"></span>
                  <Text>끌어서 가져오거나 클릭해 파일 선택하기.</Text>
                </>
              )}
            </div>

            <button
              id="submit-button"
              type="submit"
              disabled={serverAnalyzing}
              style={{
                backgroundColor: serverAnalyzing ? '#3b3b3b' : '#3048d2',
              }}
            >
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
