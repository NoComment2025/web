import RecordList from '../components/organism/RecordList.jsx';
import { records } from '../constants/records.js';
import { useState, useMemo, useEffect } from 'react';
import SearchBox from '../components/molecules/SearchBox';
import FilterTable from '../components/molecules/FilterTable';
import OrderButton from '../components/molecules/OrderButton';
import DataDescription from '../components/molecules/DataDescription';
import NavigationSystem from '../components/organism/NavigationSystem.jsx';
import * as S from '../styles/record.style.js'

const Record = ({}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [order, setOrder] = useState('latest');

  const filteredRecords = useMemo(() => {
    let result = [...records];

    // 태그 필터
    if (selectedTag) {
      result = result.filter((item) => {
        if (Array.isArray(item.tag)) {
          return item.tag.includes(selectedTag);
        }
        return item.tag === selectedTag;
      });
    }

    // 검색 필터 (제목 기준)
    if (searchKeyword.trim() !== '') {
      result = result.filter((item) =>
        item.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    // 최신순 / 오래된순 정렬
    if (order === 'latest') {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return result;
  }, [selectedTag, searchKeyword, order]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag, searchKeyword, order]);

  const pageSize = 7;
  const startIndex = (currentPage - 1) * pageSize;
  const currentRecords = filteredRecords.slice(
    startIndex,
    startIndex + pageSize
  );
  const totalPages = Math.ceil(filteredRecords.length / pageSize);
  return (
    <div className='App'>
      <NavigationSystem></NavigationSystem>
      <FilterTable
        $left="687px"
        $top="109px"
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      ></FilterTable>
      <SearchBox
        placeholder='Search'
        $left="994px"
        $top="109px"
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      <OrderButton
        $left="487px"
        $top="194px"
        order={order}
        setOrder={setOrder}
      ></OrderButton>
      {showDelete && <DeleteButton>삭제</DeleteButton>}
      <DataDescription
        $left='432px'
        $top='223px'
        quantity={4}
        buttonTexts={['선택', '주제', '날짜', '태그']}
      ></DataDescription>
      <S.DataList>
        <RecordList
          records={currentRecords}
          showStatus={false}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setShowDelete={setShowDelete}
        />
        <S.Pagination>
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            style={{
              color: '#414141',
              backgroundImage: `url('data:image/svg+xml,<svg width="7.36" height="12.73" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.293258 7.071L5.95026 12.728L7.36426 11.314L2.41426 6.364L7.36426 1.414L5.95026 0L0.293258 5.657C0.105787 5.84453 0.000471592 6.09884 0.000471592 6.364C0.000471592 6.62916 0.105787 6.88347 0.293258 7.071Z" fill="%23414141"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              width: '7.36px',
              height: '12.74px',
              padding: '0px',
              paddingRight: '50px',
            }}
          ></button>

          {[...Array(totalPages)].map((_, i) => (
            <S.PageBtn
              key={i}
              $active={currentPage === i + 1}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </S.PageBtn>
          ))}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            style={{
              color: '#414141',
              backgroundImage: `url('data:image/svg+xml,<svg width="7.36" height="12.73" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.071 7.071L1.414 12.728L0 11.314L4.95 6.364L0 1.414L1.414 0L7.071 5.657C7.25847 5.84453 7.36379 6.09884 7.36379 6.364C7.36379 6.62916 7.25847 6.88347 7.071 7.071Z" fill="%23414141"/></svg>')`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              width: '7.36px',
              height: '12.74px',
              padding: '0px',
              paddingLeft: '50px',
            }}
          ></button>
        </S.Pagination>
      </S.DataList>
    </div>
  );
};

export default Record;
