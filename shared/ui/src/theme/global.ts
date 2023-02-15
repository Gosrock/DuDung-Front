import { css } from '@emotion/react';
import emotionReset from 'emotion-reset';
import { media } from './theme';

export const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: 'GmarketSans';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansMedium.ttf')
        format('truetype');
    font-display: swap;
  }
  @font-face {
    font-family: 'GmarketSans';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.eot?#iefix')
        format('embedded-opentype'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/webfontworld/gmarket/GmarketSansBold.ttf')
        format('truetype');
    font-display: swap;
  }

  body {
    font-family: 'Pretendard Variable', Pretendard, -apple-system,
      BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI',
      'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic',
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
    box-sizing: border-box;

    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    ${media.mobile} {
      -ms-overflow-style: none;
    }
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }

  &::-webkit-scrollbar {
    ${media.mobile} {
      display: none;
    }
  }

  ::-webkit-scrollbar-thumb {
    border: solid transparent;
    background-clip: padding-box;
    border-radius: 7px;
    box-shadow: rgb(0 0 0 / 11%) 0px 0px 100px inset;
  }
  :-webkit-scrollbar-track {
    background: transparent;
  }
  ::-webkit-scrollbar {
    width: 14px;
  }

  :root {
    --main-width: 600px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  [data-rsbs-scroll] {
    scrollbar-width: none !important;
    -ms-overflow-style: none !important;
  }
`;
