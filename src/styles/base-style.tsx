import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const BaseStyles = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Inconsolata:700');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    position: relative;
    overflow-x: hidden;
    // overflow-y: hidden;
  }
`;

export default BaseStyles;
