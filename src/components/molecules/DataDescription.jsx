import styled from 'styled-components';

export const DescriptionBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
  justify-items: center;

  position: absolute;
  width: 955px;
  height: 53px;
  left: ${(props) => props.$left || '0px'};
  right: ${(props) => props.$right || '0px'};
  top: ${(props) => props.$top || '0px'};
  bottom: ${(props) => props.$bottom || '0px'};

  background: #1c1c1c;
  border-radius: 20px;
  grid-row: 3;
  grid-column: 2/4;
`;

export const Button = styled.button`
  font-style: normal !important;
  font-weight: 500 !important;
  font-size: 22px !important;
  line-height: 26px !important;
  color: #4a4a4a !important;
  background: none !important;
  border: none !important;
`;
export default function DataDescription({
  $left,
  $right,
  $top,
  $bottom,
  quantity,
  buttonTexts = [],
}) {
  const buttons = Array.from({ length: quantity }).map((_, i) => (
    <Button key={i}>
      {buttonTexts[i] !== undefined ? buttonTexts[i] : `Button ${i + 1}`}
    </Button>
  ));
  return (
    <DescriptionBox $left={$left} $right={$right} $top={$top} $bottom={$bottom}>
      {buttons}
    </DescriptionBox>
  );
}
