import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "./color";

const BaseStyles = createGlobalStyle`
  ${reset}
  body {
    position: relative; //disable gatsby base-style
    overflow-x: hidden; //disable gatsby base-style
    font-family: "Roboto", sans-serif;
    background-color: ${theme.colors.blogBackground};
  }
`;

export default BaseStyles;
