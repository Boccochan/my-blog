import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
// import { rhythm, styledScale } from "../utils/typography";
import { rhythm } from "../utils/typography";
// import { FadeLink } from "./link";
import MenuBar from "./menu";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { theme } from "../styles/color";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

// const StyledH1 = styled.h1`
//   ${styledScale(1.5)};
//   margin-bottom: ${rhythm(1.5)};
//   margin-top: 0;
// `;

// const StyledH3 = styled.h3`
//   font-family: Montserrat, sans-serif;
//   margin-top: 0;
// `;

// const StyledLink = styled(FadeLink)`
//   box-shadow: none;
//   color: inherit;
//   text-decoration: none;
// `;

const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${`${rhythm(1.5)} ${rhythm(3 / 4)}`};
`;

export const Layout = (props: Props) => {
  // const { location, title, children } = props;
  const { children } = props;
  // const rootPath = `/`;

  // const HeaderTitle = location.pathname === rootPath ? StyledH1 : StyledH3;

  return (
    <MuiThemeProvider theme={theme}>
      <header>
        <MenuBar />
        {/* <HeaderTitle>
          <StyledLink to={`/`}>{title}</StyledLink>
        </HeaderTitle> */}
      </header>

      <Content>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}, Yasuhiro Ito</footer>
      </Content>
    </MuiThemeProvider>
  );
};
