import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import MenuBar from "./menu";
import BaseStyles from "../styles/base-style";
import { Breadcrumbs } from "./breadcrumbs";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
  crumbLabel: string;
}

const StyledWrapper = styled.div`
  min-height: calc(100vh - 50px);
  max-height: auto;
  background-color: #f9f9f9;
`;

const StyledFooter = styled.footer`
  position: relative;
  background-color: #4f4f4f;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  margin-top: auto;
`;

const Main = styled.div`
  position: relative;
  margin-top: 80px;
`;

export const Layout = (props: Props) => {
  const { children, location } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const home = ["home"];
  const path = home.concat(
    location.pathname.split("/").filter((name) => name !== "")
  );
  console.log(path);

  return (
    <React.Fragment>
      <BaseStyles />
      <StyledWrapper>
        <header>
          <MenuBar />
        </header>
        <Main>
          {location.pathname !== rootPath && <Breadcrumbs currentPath={path} />}
          <div>{children}</div>
        </Main>
      </StyledWrapper>

      <StyledFooter>© {new Date().getFullYear()}, Yasuhiro Ito</StyledFooter>
    </React.Fragment>
  );
};
