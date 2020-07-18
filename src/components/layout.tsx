import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import { rhythm } from "../utils/typography";
import MenuBar from "./menu";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/color";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

const StyledWrapper = styled.div`
  padding; 0px;
  margin: 0px;
  min-height: calc(100vh - 50px);
`;

const StyledFooter = styled.footer`
  background-color: #4f4f4f;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <StyledWrapper>
        <header>
          <MenuBar />
        </header>
        <main>{children}</main>
      </StyledWrapper>

      <StyledFooter>© {new Date().getFullYear()}, Yasuhiro Ito</StyledFooter>
    </MuiThemeProvider>
  );
};
