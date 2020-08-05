import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const BaseStyles = createGlobalStyle`
  ${reset}
  body {
    position: relative; //disable gatsby base-style
    overflow-x: hidden; //disable gatsby base-style
    font-family: "Roboto", sans-serif;
  }
`;

export default BaseStyles;
