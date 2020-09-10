import React from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
`;

export default () => {
  const menuList = [
    { name: "Board", callback: () => {} },
    { name: "Progress", callback: () => {} },
    { name: "Ready", callback: () => {} },
    { name: "Backlog", callback: () => {} },
    { name: "Productivity", callback: () => {} },
    { name: "Bug", callback: () => {} },
    { name: "Released", callback: () => {} },
  ];
  return (
    <Wrapper>
      <Sidebar menuList={menuList} />
    </Wrapper>
  );
};
