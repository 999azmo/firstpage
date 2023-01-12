import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://webfontworld.github.io/naver/NanumSquareRound.css');
  @import url("https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css");

  html {
    scroll-behavior: smooth;
  }
  body {
    font-family: 'NanumSquareRound', sans-serif;
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
    padding: 7.8vw 10.41vw;
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