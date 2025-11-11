import styled from 'styled-components';

export const Backdrop = styled.div`
  inset: 0;
  position: absolute;
  width: 1003px;
  height: 603px;
  left: -40px;
  top: -111px;

  background: #141414;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 836px;
  min-height: 353px;
  max-height: max-content;
  background: #1c1c1c;
  color: #fafafa;
  border-radius: 12px;
  padding: 20px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 243px;
  height: 44px;
  border-radius: 20px;
  background-color: #3048d2;
  border: none;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  margin-top: 475px;
  cursor: pointer;
`;

export const LeftPagenation = styled.button`
  background-image: url('data:image/svg+xml,<svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.795206 18.8886L16.1596 34L20 30.2228L6.55583 17L20 3.77718L16.1596 0L0.795206 15.1114C0.286036 15.6123 0 16.2917 0 17C0 17.7083 0.286036 18.3877 0.795206 18.8886Z" fill="%233B3B3B"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
  background-color: #141414;
  border: none;
  width: 20px;
  height: 34px;
  position: absolute;
  left: 47px;
  top: 41px;
`;

export const RightPagenation = styled.button`
  background-image: url('data:image/svg+xml,<svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.2048 18.8886L3.84042 34L0 30.2228L13.4442 17L0 3.77718L3.84042 0L19.2048 15.1114C19.714 15.6123 20 16.2917 20 17C20 17.7083 19.714 18.3877 19.2048 18.8886Z" fill="%233B3B3B"/></svg>');
  background-position: center;
  background-color: #141414;
  border: none;
  width: 20px;
  height: 34px;
  position: absolute;
  right: 47px;
  top: 41px;
`;