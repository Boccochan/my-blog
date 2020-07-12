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

const Content = styled.div`
  min-height: calc(100vh - 100px);
  padding: ${`${rhythm(1.5)} 0`};
`;

const StyledFooter = styled.footer`
  padding-top: 5px;
  background-color: #4f4f4f;
  color: white;
  text-align: center;
  height: 50px;
`;

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <header>
        <MenuBar />
      </header>
      <Content>
        <main>{children}</main>
      </Content>
      <StyledFooter>© {new Date().getFullYear()}, Yasuhiro Ito</StyledFooter>
    </MuiThemeProvider>
  );
};
