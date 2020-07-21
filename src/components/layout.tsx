import { PageRendererProps } from "gatsby";
import React, { ReactNode } from "react";
import styled from "styled-components";
import MenuBar from "./menu";
import BaseStyles from "../styles/base-style";

interface Props extends PageRendererProps {
  title: string;
  children: ReactNode;
}

const StyledWrapper = styled.div`
  min-height: 100vh;
  // background-color: #f0f0f0;
  // background-color: black;
  background-color: #f0f0f0;
  // background-color: #4f4f4f;
`;

const StyledMain = styled.div`
  padding-top: 10vh;
`;

// const StyledFooter = styled.footer`
//   background-color: #4f4f4f;
//   color: white;
//   height: 50px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const Layout = (props: Props) => {
  const { children } = props;

  return (
    <React.Fragment>
      <BaseStyles />
      <StyledWrapper>
        <header>
          <MenuBar />
        </header>
        {/* <main>{children}</main> */}
        <StyledMain>{children}</StyledMain>
      </StyledWrapper>
      {/* <StyledFooter>© {new Date().getFullYear()}, Yasuhiro Ito</StyledFooter> */}
    </React.Fragment>
  );
};
