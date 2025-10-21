import Button from '../atom/button';
import styled from 'styled-components';
import { useState } from 'react';

const records = [
  {
    id: 1,
    check: false,
    status: '분석 완료됨',
    title: '나르샤 기획 발표',
    date: '25.11.25',
    tag: '발표',
  },
  {
    id: 2,
    check: false,
    status: '분석 중',
    title: '2분기 실적 보고',
    date: '25.11.26',
    tag: '연설',
  },
  {
    id: 3,
    check: false,
    status: '분석 완료됨',
    title: '신규 프로젝트 킥오프',
    date: '25.11.27',
    tag: '강연',
  },
  {
    id: 4,
    check: false,
    status: '분석 완료됨',
    title: '나르샤 기획 발표',
    date: '25.11.25',
    tag: '기타',
  },
  // 배열에 항목이 추가되면 행도 자동으로 늘어납니다.
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type='radio'] {
    display: none;
  }

  span {
    box-sizing: border-box;

    position: absolute;
    left: 5.24%;
    right: 92.77%;
    top: 5.45%;
    bottom: 90.98%;

    border: 1px solid #3b3b3b;
    border-radius: 4px;
  }
  input[type='radio']:checked + span {
    background-color: #aeaeae;
  }
`;
const Status = styled.span`
  /* position: absolute;
  left: 24.29%;
  right: 67.96%;
  top: 5.45%;
  bottom: 90.98%; */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #28b700;
`;

const Title = styled.span`
  /* 나르샤 기획 발표 */

  /* position: absolute;
  left: 44.5%;
  right: 44.5%;
  top: 19.74%;
  bottom: 76.69%; */

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* 상자 높이와 동일 */

  color: #ffffff;
`;

const Date = styled.span`
  /* 00.00.00 */

  position: absolute;
  left: 68.9%;
  right: 25.03%;
  top: 5.45%;
  bottom: 90.98%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* 상자 높이와 동일 */

  color: #ffffff;
`;
const RecordList = ({ records }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      {records.map((record) => (
        <Container key={record.id}>
          <RadioWrapper>
            <input
              type="radio"
              checked={selectedId === record.id}
              onChange={() => setSelectedId(record.id)}
            />
            <span></span>
          </RadioWrapper>
          <Status>{record.status}</Status>
          <Title>{record.title}</Title>
          <Date>{record.date}</Date>
          <Button>{record.tag}</Button>
        </Container>
      ))}
    </>
  );
};
export default RecordList;
