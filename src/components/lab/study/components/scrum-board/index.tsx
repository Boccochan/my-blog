import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default () => {
  const menuList = [{ name: "hello", callback: () => {} }];
  return (
    <Wrapper>
      <Sidebar menuList={menuList} />
    </Wrapper>
  );
};
