import styled from 'styled-components';
import Button from '../atom/button';

export const Filter = styled.div`
  position: absolute;
  width: 287px;
  left: ${(props) => props.$left || '0px'};
  right: ${(props) => props.$right || '0px'};
  top: ${(props) => props.$top || '0px'};
  bottom: ${(props) => props.$bottom || '0px'};

  display: inline-grid;
  grid-auto-flow: column;
  gap: 10px;
  height: fit-content;
  justify-self: start;
  background-color: #151515;
  border-radius: 20px;
  padding: 5px 7px;
`;
const tagList = ['발표', '연설', '강연', '기타'];
export default function FilterTable({
  selectedTag,
  setSelectedTag,
  $left,
  $right,
  $top,
  $bottom,
}) {
  const handleClick = (tag) => {
    // 같은 걸 다시 누르면 해제
    if (selectedTag === tag) setSelectedTag(null);
    else setSelectedTag(tag);
  };
  return (
    <Filter $left={$left} $right={$right} $top={$top} $bottom={$bottom}>
      {tagList.map((tag) => (
        <Button
          key={tag}
          width="60px"
          height="30px"
          onClick={() => handleClick(tag)}
          style={{
            backgroundColor: selectedTag === tag ? '#3048D2' : '#151F5A',
            border: '1px solid #151F5A',
            color: '#AEAEAE',
          }}
        >
          {tag}
        </Button>
      ))}
    </Filter>
  );
}
