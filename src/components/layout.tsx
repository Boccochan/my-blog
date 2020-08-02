import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import MenuBar from "./menu";
import BaseStyles from "../styles/base-style";
import { theme } from "../styles/color";
import { Breadcrumbs } from "./breadcrumbs";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
  crumbLabel: string;
}

const StyledWrapper = styled.div`
  min-height: calc(100vh - 50px);
  max-height: auto;
  background-color: ${theme.colors.blogBackground};
`;

const StyledFooter = styled.footer`
  position: relative;
  background-color: ${theme.colors.gray};
  color: ${theme.colors.white};
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

const BreadcrumbsLayout = styled.div`
  padding: 20px;
  width: 980px;
  margin-right: auto;
  margin-left: auto;
`;

export const Layout = (props: Props) => {
  const { children, location } = props;
  const rootPath = `${__PATH_PREFIX__}/`;
  const home = ["/"];
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
          {location.pathname !== rootPath && (
            <BreadcrumbsLayout>
              <Breadcrumbs currentPath={path} />
            </BreadcrumbsLayout>
          )}
          <div>{children}</div>
        </Main>

        <StyledFooter>© {new Date().getFullYear()}, Yasuhiro Ito</StyledFooter>
      </StyledWrapper>
    </React.Fragment>
  );
};
