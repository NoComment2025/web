import styled from 'styled-components';
import SearchIcon from '../atom/SearchIcon';

const SearchWrapper = styled.div`
  position: absolute;
  width: 329px;
  height: 44px;
  left: ${(props) => props.$left || '0px'};
  right: ${(props) => props.$right || '0px'};
  top: ${(props) => props.$top || '0px'};
  bottom: ${(props) => props.$bottom || '0px'};

  /* left: 994px; top: 109px; */
  display: flex;
  align-items: center;
  background-color: #151515;
  border-radius: 20px;
  padding: 5px 15px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: #151515;
  padding-left: 4%;
  color: #ffffff;
  width: 275.047px;

  &::placeholder {
    color: #414141;
    font-size: 16px;
  }
`;

export default function SearchBox({
  searchKeyword,
  setSearchKeyword,
  placeholder,
  $left,
  $right,
  $top,
  $bottom,
}) {
  return (
    <SearchWrapper $left={$left} $right={$right} $top={$top} $bottom={$bottom}>
      <SearchIcon />
      <SearchInput
        placeholder={placeholder}
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
    </SearchWrapper>
  );
}
