import styled from 'styled-components';

export const DataList = styled.div`
  /* Frame 82 */

  /* 오토레이아웃 */
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 0px;

  position: absolute;
  width: 955px;
  height: 532px;
  left: 432px;
  top: 276px;
`;

export const Pagination = styled.div`
  grid-row: 9;
  display: block;
  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }
`;

export const PageBtn = styled.button`
  background: ${({ $active }) => ($active ? '#555' : 'none')};
  border-radius: 6px;
  padding: 4px 12px;
  border: none;
  color: #414141;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  position: absolute;
  width: 70px;
  height: 33px;
  left: 1241px;
  top: 180px;

  background: #1c1c1c;
  border-radius: 20px;
`;