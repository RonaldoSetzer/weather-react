import { createGlobalStyle } from 'styled-components';
import { theme } from '../utils/colors';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, main {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section, main {
    display: block;
  }

  body {
    background: #282828;
    color: #fff;
    font-family:  'Baloo 2', Helvetica, Arial, sans-serif;

    --color-default: ${theme.colorDefault};
    --color-inverse: ${theme.colorInverse};
    --background-default: ${theme.backgroundDefault};
    --background-inverse: ${theme.backgroundInverse};
  }

  button {
    cursor: pointer;
    color: #fff;
    font-family: inherit;
    font-size: inherit;
  }

  input {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
  }
`;

export default GlobalStyles;
