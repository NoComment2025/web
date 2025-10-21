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
  {
    id: 5,
    check: false,
    status: '분석 중',
    title: '프로젝트 A',
    date: '25.11.28',
    tag: '발표',
  },
  {
    id: 6,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 B',
    date: '25.11.29',
    tag: '연설',
  },
  {
    id: 7,
    check: false,
    status: '분석 중',
    title: '프로젝트 C',
    date: '25.11.30',
    tag: '강연',
  },
  {
    id: 8,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 D',
    date: '25.12.01',
    tag: '기타',
  },
  {
    id: 9,
    check: false,
    status: '분석 중',
    title: '프로젝트 E',
    date: '25.12.02',
    tag: '발표',
  },
  {
    id: 10,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 F',
    date: '25.12.03',
    tag: '연설',
  },
  {
    id: 11,
    check: false,
    status: '분석 중',
    title: '프로젝트 G',
    date: '25.12.04',
    tag: '강연',
  },
  {
    id: 12,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 H',
    date: '25.12.05',
    tag: '기타',
  },
];

const Container = styled.div`
  display: grid;
  width: 955px;
  height: 76px;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
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
    width: 20px;
    height: 20px;
    border: 1px solid #3b3b3b;
    border-radius: 4px;
  }
  input[type='radio']:checked + span {
    background-color: #aeaeae;
  }
`;
const Status = styled.span`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #28b700;
`;

const Title = styled.span`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* 상자 높이와 동일 */

  color: #ffffff;
`;

const Date = styled.span`
  text-align: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* 상자 높이와 동일 */

  color: #ffffff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
          <Button width="70px" height="36px">
            {record.tag}
          </Button>
        </Container>
      ))}
    </>
  );
};
export default RecordList;

export { records };