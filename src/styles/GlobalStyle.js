// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;        /* 고정 높이 대신 최소 높이 */
    background-color: black;

    overscroll-behavior: none; /* 스크롤 바운스 방지 */
    touch-action: auto;        /* 스크롤 가능하게 변경 */
    overflow-x: hidden;
    overflow-y: auto; 

    /* 드래그 및 텍스트 선택 방지 */
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 
                'Helvetica Neue', 'Segoe UI', 'Apple Color Emoji', 'Segoe UI Emoji', 
                'Segoe UI Symbol', sans-serif;
    color: #333;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
