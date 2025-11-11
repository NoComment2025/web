import Button from '../atom/button';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const records = [
  {
    id: 1,
    check: false,
    status: '분석 완료됨',
    title: '나르샤 기획 발표',
    date: '25.11.25',
    tag: '발표',
    content:
      '이번 발표에서는 나르샤의 새로운 기획안을 소개하고, 향후 전략에 대해 논의합니다.',
  },
  {
    id: 2,
    check: false,
    status: '분석 진행 중',
    title: '2분기 실적 보고',
    date: '25.11.26',
    tag: '연설',
    content: '2분기 실적에 대한 상세 보고와 향후 계획을 공유합니다.',
  },
  {
    id: 3,
    check: false,
    status: '분석 완료됨',
    title: '신규 프로젝트 킥오프',
    date: '25.11.27',
    tag: '강연',
    content:
      '신규 프로젝트의 목표와 일정, 팀 구성에 대해 설명하는 킥오프 미팅입니다.',
  },
  {
    id: 4,
    check: false,
    status: '분석 실패',
    title: '나르샤 기획 발표',
    date: '25.11.25',
    tag: '기타',
    content:
      '이번 발표에서는 나르샤의 새로운 기획안을 소개하고, 향후 전략에 대해 논의합니다.',
  },
  {
    id: 5,
    check: false,
    status: '분석 실패',
    title: '프로젝트 A',
    date: '25.11.28',
    tag: '발표',
    content: '프로젝트 A에 대한 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 6,
    check: false,
    status: '분석 실패',
    title: '프로젝트 B',
    date: '25.11.29',
    tag: '연설',
    content: '프로젝트 B의 주요 성과와 도전 과제에 대해 논의합니다.',
  },
  {
    id: 7,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 C',
    date: '25.11.30',
    tag: '강연',
    content: '프로젝트 C의 목표와 전략에 대해 설명하는 시간입니다.',
  },
  {
    id: 8,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 D',
    date: '25.12.01',
    tag: '기타',
    content: '프로젝트 D의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 9,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 E',
    date: '25.12.02',
    tag: '발표',
    content: '프로젝트 E의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 10,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 F',
    date: '25.12.03',
    tag: '연설',
    content: '프로젝트 F의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 11,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 G',
    date: '25.12.04',
    tag: '강연',
    content: '프로젝트 G의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 12,
    check: false,
    status: '분석 완료됨',
    title: '프로젝트 H',
    date: '25.12.05',
    tag: '기타',
    content: '프로젝트 H의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 13,
    check: false,
    status: '분석 실패',
    title: '프로젝트 I',
    date: '25.12.06',
    tag: '발표',
    content: '프로젝트 I의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 14,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 J',
    date: '25.12.07',
    tag: '연설',
    content: '프로젝트 J의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 15,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 K',
    date: '25.12.08',
    tag: '강연',
    content: '프로젝트 K의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 16,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 L',
    date: '25.12.09',
    tag: '기타',
    content: '프로젝트 L의 진행 상황과 향후 계획을 공유합니다.',
  },
  {
    id: 17,
    check: false,
    status: '분석 진행 중',
    title: '프로젝트 M',
    date: '25.12.10',
    tag: '발표',
    content: '프로젝트 M의 진행 상황과 향후 계획을 공유합니다.',
  },
];

const Container = styled.div`
  display: grid;
  width: 955px;
  height: 60px;
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

  color: ${({ status }) => {
    if (status === '분석 완료됨') return '#4CAF50'; // 녹색
    if (status === '분석 진행 중') return '#7d7d7d'; // 주황
    if (status === '분석 실패') return '#B70000'; // 빨강
    return '#000'; // 기본 검정
  }};
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
  
  > * {
    color: #ffffff;
  }
`;
const RecordList = ({ records }) => {
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  return (
    <>
      {records.map((record) => (
        <Container
          key={record.id}
          // onClick={() => navigate(`/detail/${record.id}`)}
        >
          <RadioWrapper>
            <input
              type="radio"
              checked={selectedId === record.id}
              onChange={() => setSelectedId(record.id)}
            />
            <span></span>
          </RadioWrapper>
          <Status status={record.status}>{record.status}</Status>

          <Title>{record.title}</Title>
          <Date>{record.date}</Date>
          <Button width="70px" height="36px" $color='#ffffff'>
            {record.tag}
          </Button>
        </Container>
      ))}
    </>
  );
};
export default RecordList;

export { records };
