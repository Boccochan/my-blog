import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const BaseStyles = createGlobalStyle`
  ${reset}
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    position: relative; //disable gatsby base-style
    overflow-x: hidden; //disable gatsby base-style
  }
  
`;

export default BaseStyles;
