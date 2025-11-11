import styled from 'styled-components';
import OrderIcon from '../atom/OrderIcon';

const OrderWrapper = styled.button`
  position: absolute;
  width: 63px;
  height: 19.01px;
  left: ${(props) => props.$left || '0px'};
  right: ${(props) => props.$right || '0px'};
  top: ${(props) => props.$top || '0px'};
  bottom: ${(props) => props.$bottom || '0px'};
  border: none;
  background-color: #000000;
  color: #414141;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
`;

const Text = styled.span`
  position: absolute;
  width: 50px;
  margin-left: 8px;
`;

export default function OrderButton({ $left, $right, $top, $bottom }) {
  return (
    <OrderWrapper $left={$left} $right={$right} $top={$top} $bottom={$bottom}>
      <OrderIcon />
      <Text>최신순</Text>
    </OrderWrapper>
  );
}
