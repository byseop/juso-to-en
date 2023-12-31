'use client';

import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-size: 10px;
  font-family: '-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue',
    'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', '나눔고딕',
    'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', 'arial', '돋움', 'Dotum',
    'Tahoma', 'Geneva', 'sans-serif';
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
