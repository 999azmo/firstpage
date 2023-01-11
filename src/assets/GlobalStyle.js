import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://webfontworld.github.io/naver/NanumSquareRound.css');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');
  @import url("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");

  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'Noto Sans KR', sans-serif;
    /* font-family: 'NanumSquareRound', sans-serif; */
    font-size: 18px;
    line-height: 1.5;
  }
  ::selection {
    background-color: #f5805a;
    color: #fff;
  }
  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }
  article {
    padding: 150px 200px;
  }
  .miniTitle {
    color: #f5805a;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  h3 {
    font-size: 48px;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 16px;
  }
  h4 {
    font-family: 'NanumSquareRound';
    font-weight: 700;
    font-size: 24px;
  }
`;
export default GlobalStyle;