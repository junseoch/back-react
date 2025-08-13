// 전역에 사용되는 스타일을 적용시키기 위한 파일
// 폰트, 리셋(태그들만의 기본 스타일을 제거)
// 컴포넌트로 넣어야 함

import { createGlobalStyle } from 'styled-components'
import {reset} from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  /* css 스타일 리셋 */
  ${reset}

  /* 
    400 Regular
    500 Medium
    600 SemiBold
    700 Bold
    800 Black
    900 ExtraBold
    950 ExtraBlack 
  */

    // 적용할 때는 fonts 뒤에 링크, 폰트종류만 바꾸면 됨
  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Regular.woff2) format('woff2');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Medium.woff2) format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-SemiBold.woff2) format('woff2');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Bold.woff2) format('woff2');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-Black.woff2) format('woff2');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-ExtraBold.woff2) format('woff2');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'WantedSansStd';
    src: url(${process.env.PUBLIC_URL}/assets/fonts/wanted/WantedSans-ExtraBlack.woff2) format('woff2');
    font-weight: 950;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family: 'WantedSansStd';
    /* font-weight: 900; */
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0, 0, 0, 0.05);
    letter-spacing: -0.2px;
    text-decoration: none;
    color: #131313;
    line-height: 1.3;
  }

  button {
    cursor: pointer;
    border: none;
  }

`
export default GlobalStyle;