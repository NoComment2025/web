import Button from '../atom/button';
import styled from 'styled-components';
import { useState, useMemo } from 'react';
import RecordDetailModal from './RecordDetailModal';

const Container = styled.div`
  display: grid;
  width: 955px;
  height: 60px;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  align-items: center;
  justify-items: center;
`;

const RadioWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;

  input[type='checkbox'] {
    display: none;
  }

  span {
    box-sizing: border-box;
    width: 20px;
    height: 20px;
    border: 1px solid #3b3b3b;
    border-radius: 4px;
  }
  input[type='checkbox']:checked + span {
    background-color: #3b3b3b;
    background-image: url('data:image/svg+xml,<svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.07798 5.47216L8.01057 0.187083C8.12697 0.0623609 8.26278 0 8.41798 0C8.57319 0 8.70899 0.0623609 8.82539 0.187083C8.9418 0.311804 9 0.460015 9 0.631715C9 0.803415 8.9418 0.951418 8.82539 1.07572L3.48539 6.81292C3.36898 6.93764 3.23318 7 3.07798 7C2.92277 7 2.78697 6.93764 2.67056 6.81292L0.16789 4.1314C0.0514862 4.00668 -0.00438751 3.85868 0.000268623 3.68739C0.00492476 3.51611 0.0656484 3.3679 0.18244 3.24276C0.299231 3.11762 0.437558 3.05526 0.597418 3.05568C0.757279 3.05609 0.895411 3.11846 1.01181 3.24276L3.07798 5.47216Z" fill="black"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
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

const DeleteButton = styled.div`
  position: absolute;
  width: 70px;
  height: 33px;
  left: 1241px;
  top: 180px;

  background: #1c1c1c;
  border-radius: 20px;
`;

const RecordList = ({
  records,
  selectedTag,
  showStatus = true,
  showModal = true,
  selectedId,
  setSelectedId,
  setShowDelete,
}) => {
  const [open, setOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);
  const handleClick = (id) => {
    setSelectedId((prev) => {
      const next = prev === id ? null : id;
      setShowDelete(next !== null); // 선택된 게 있으면 true, 없으면 false
      return next;
    });
  };
  return (
    <>
      {records.map((record) => (
        <Container key={record.id}>
          {open && selectedRecord && (
            <RecordDetailModal
              open={open}
              onClose={() => setOpen(false)}
              detail={selectedRecord} // 클릭한 record 전달
            />
          )}
          <RadioWrapper>
            <input
              type="checkbox"
              checked={selectedId === record.id}
              onChange={() => handleClick(record.id)}
            />
            <span></span>
          </RadioWrapper>
          {showStatus && (
            <Status status={record.status}>{record.status}</Status>
          )}

          <Title
            onClick={() => {
              if (showModal) {
                setSelectedRecord(record);
                setOpen(true);
              } else {
                return null;
              }
            }}
          >
            {record.title}
          </Title>
          <Date>{record.date}</Date>
          <Button width="70px" height="36px" $color="#ffffff">
            {record.tag}
          </Button>
        </Container>
      ))}
    </>
  );
};
export default RecordList;
