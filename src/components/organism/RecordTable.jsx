import styled from 'styled-components';
import Button from '../atom/button';
import RecordList from '../molecules/RecordeList';
import { records } from '../molecules/RecordeList';
import { useState } from 'react';

const FilterTable = styled.div`
  /* 태그 필터 */

  position: absolute;
  width: 287px;
  height: 44px;
  left: 687px;
  top: 109px;

  display: inline-grid;
  grid-auto-flow: column;
  gap: 10px;
  grid-row: 2;
  grid-column: 3;
  height: fit-content;
  justify-self: start;
  background-color: #151515;
  border-radius: 20px;
  padding: 5px 7px;
`;

const SerchBar = styled.input`
  /* Rectangle 152 */

  position: absolute;
  width: 329px;
  height: 44px;
  left: 994px;
  top: 109px;

  grid-row: 2;
  grid-column: 4;
  /* height: 5vh;
  width: 40vh; */
  border-radius: 20px;
  border: none;
  background-color: #151515;
  background-image: url('data:image/svg+xml,<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 19L13 13M1 8C1 8.91925 1.18106 9.82951 1.53284 10.6788C1.88463 11.5281 2.40024 12.2997 3.05025 12.9497C3.70026 13.5998 4.47194 14.1154 5.32122 14.4672C6.1705 14.8189 7.08075 15 8 15C8.91925 15 9.82951 14.8189 10.6788 14.4672C11.5281 14.1154 12.2997 13.5998 12.9497 12.9497C13.5998 12.2997 14.1154 11.5281 14.4672 10.6788C14.8189 9.82951 15 8.91925 15 8C15 7.08075 14.8189 6.1705 14.4672 5.32122C14.1154 4.47194 13.5998 3.70026 12.9497 3.05025C12.2997 2.40024 11.5281 1.88463 10.6788 1.53284C9.82951 1.18106 8.91925 1 8 1C7.08075 1 6.1705 1.18106 5.32122 1.53284C4.47194 1.88463 3.70026 2.40024 3.05025 3.05025C2.40024 3.70026 1.88463 4.47194 1.53284 5.32122C1.18106 6.1705 1 7.08075 1 8Z" stroke="%23414141" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
  background-repeat: no-repeat;
  background-position: 5% center;
  padding-left: 5%;
  color: #ffffff;

  &::placeholder {
    color: #414141;
    font-size: 16px;
  }
`;
const NewOrderButton = styled.button`
  position: absolute;
  width: 63px;
  height: 19.01px;
  left: 487px;
  top: 194px;
  border: none;
  background-image: url('data:image/svg+xml,<svg width="13" height="19" viewBox="0 0 13 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7159 6.7158C11.8096 6.62284 11.884 6.51223 11.9348 6.39038C11.9856 6.26852 12.0117 6.13781 12.0117 6.0058C12.0117 5.87379 11.9856 5.74308 11.9348 5.62122C11.884 5.49936 11.8096 5.38876 11.7159 5.2958L6.71592 0.295798C6.62296 0.20207 6.51236 0.127676 6.3905 0.0769069C6.26864 0.0261382 6.13793 0 6.00592 0C5.87391 0 5.7432 0.0261382 5.62134 0.0769069C5.49948 0.127676 5.38888 0.20207 5.29592 0.295798L0.295921 5.2958C0.202193 5.38876 0.127797 5.49936 0.0770283 5.62122C0.0262594 5.74308 0.00012207 5.87379 0.00012207 6.0058C0.00012207 6.13781 0.0262594 6.26852 0.0770283 6.39038C0.127797 6.51223 0.202193 6.62284 0.295921 6.7158C0.388885 6.80953 0.499484 6.88392 0.621344 6.93469C0.743203 6.98546 0.873909 7.0116 1.00592 7.0116C1.13793 7.0116 1.26864 6.98546 1.3905 6.93469C1.51236 6.88392 1.62296 6.80953 1.71592 6.7158L6.00592 2.4158L10.2959 6.7158C10.3889 6.80953 10.4995 6.88392 10.6213 6.93469C10.7432 6.98546 10.8739 7.0116 11.0059 7.0116C11.1379 7.0116 11.2686 6.98546 11.3905 6.93469C11.5124 6.88392 11.623 6.80953 11.7159 6.7158ZM6.71592 17.7158L11.7159 12.7158C11.8092 12.6226 11.8831 12.5119 11.9336 12.39C11.984 12.2682 12.01 12.1377 12.01 12.0058C12.01 11.7395 11.9042 11.4841 11.7159 11.2958C11.6227 11.2026 11.512 11.1286 11.3902 11.0781C11.2683 11.0277 11.1378 11.0017 11.0059 11.0017C10.7396 11.0017 10.4842 11.1075 10.2959 11.2958L6.00592 15.5958L1.71592 11.2958C1.62296 11.2021 1.51236 11.1277 1.3905 11.0769C1.26864 11.0261 1.13793 11 1.00592 11C0.873909 11 0.743203 11.0261 0.621344 11.0769C0.499484 11.1277 0.388885 11.2021 0.295921 11.2958C0.202193 11.3888 0.127797 11.4994 0.0770283 11.6212C0.0262594 11.7431 0.00012207 11.8738 0.00012207 12.0058C0.00012207 12.1378 0.0262594 12.2685 0.0770283 12.3904C0.127797 12.5122 0.202193 12.6228 0.295921 12.7158L5.29592 17.7158C5.38888 17.8095 5.49948 17.8839 5.62134 17.9347C5.7432 17.9855 5.87391 18.0116 6.00592 18.0116C6.13793 18.0116 6.26864 17.9855 6.3905 17.9347C6.51236 17.8839 6.62296 17.8095 6.71592 17.7158Z" fill="%23414141"/></svg>');
  background-repeat: no-repeat;
  background-color: #000000;
  color: #414141;
`;

const DataList = styled.div`
  /* Frame 82 */

  /* 오토레이아웃 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 0px;

  position: absolute;
  width: 955px;
  height: 532px;
  left: 432px;
  top: 276px;
`;

const DataDescription = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
  justify-items: center;

  position: absolute;
  width: 955px;
  height: 53px;
  left: 432px;
  top: 223px;

  background: #1c1c1c;
  border-radius: 20px;
  grid-row: 3;
  grid-column: 2/4;
  > span {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;

    color: #4a4a4a;
  }
`;
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

const PageBtn = styled.button`
  background: ${({ active }) => (active ? '#555' : 'none')};
  border-radius: 6px;
  padding: 4px 10px;
  border: none;
  color: white;
  cursor: pointer;
`;

function RecordTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 7;

  const startIndex = (currentPage - 1) * pageSize;
  const currentRecords = records.slice(startIndex, startIndex + pageSize);
  const totalPages = Math.ceil(records.length / pageSize);
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
      <NewOrderButton> 최신순</NewOrderButton>
      <DataDescription>
        <span>선택</span>
        <span>상태</span>
        <span>주제</span>
        <span>날짜</span>
        <span>태그</span>
        {/* <DataDescriptionItem></DataDescriptionItem> */}
      </DataDescription>
      <DataList>
        <RecordList records={currentRecords} />
        <Pagination>
          <button onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}>
            ◀
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <PageBtn
              key={i}
              active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </PageBtn>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
          >
            ▶
          </button>
        </Pagination>
      </DataList>
    </>
  );
}

export default RecordTable;
