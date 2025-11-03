import styled from 'styled-components';
import Button from '../atom/button';

const FilterTable = styled.div`
  display: inline-grid;
  grid-auto-flow: column; /* 가로로 배치 */
  gap: 10px; /* 버튼 사이 간격 */
  grid-row: 2;
  grid-column: 3;
  height: fit-content;
  justify-self: start; /* 그리드 내 왼쪽 정렬 */
  transform: translate(-55%, 0);
  background-color: #151515;
  border-radius: 20px;
  padding: 5px 7px; /* 내부 여백 */
`;

const SerchBar = styled.input`
  grid-row: 2;
  grid-column: 4;
  height: 5vh;
  width: 40vh;
  border-radius: 25px;
  border: none;
  background-color: #151515;
  background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z" stroke="%23414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-position: 5% center;
  transform: translate(-70%, 0);
  padding-left: 15%;
  color: #ffffff;

  &::placeholder {
    color: #414141;
    font-size: 16px;
    /* padding-left: 15%; */
    text-align: left;
  }
`;

const DataList = styled.div`
  grid-row: 4;
  grid-column: 2/4;
  transform: translate(13%, 0);
  background-color: #9b6969;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const DataDescription = styled.div`
  display: grid;
  align-items: center;
  height: 51px;
  transform: translate(13%, 0);
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-row: 3;
  grid-column: 2/4;
  background-color: #1c1c1c;
  border-radius: 20px;
  >span {
    color: #4a4a4a; /* 글자 색 */
    font-size: 16px; /* 글자 크기 */
    text-align: center; /* 가로 중앙 정렬 */
    line-height: 51px; /* 줄 높이 */
    text-transform: uppercase; /* 대문자 변환 */
  }

  > span#선택 {
    grid-row: 1;
    grid-column: 1;
  }
  > span#주제 {
    grid-row: 1;
    grid-column: 2;
  }
  > span#날짜 {
    grid-row: 1;
    grid-column: 3;
  }
  > span#태그 {
    grid-row: 1;
    grid-column: 4;
  }
`;
function RecordTable() {
  return (
    <>
      <FilterTable>
        <Button width="60px" height="30px">
          발표
        </Button>
        <Button width="60px" height="30px">
          연설
        </Button>
        <Button width="60px" height="30px">
          강연
        </Button>
        <Button width="60px" height="30px">
          기타
        </Button>
      </FilterTable>
      <SerchBar placeholder="Search"></SerchBar>
      <DataDescription>
        <span>선택</span>
        <span>주제</span>
        <span>날짜</span>
        <span>태그</span>
      </DataDescription>
      <DataList></DataList>
    </>
  );
}

export default RecordTable;
