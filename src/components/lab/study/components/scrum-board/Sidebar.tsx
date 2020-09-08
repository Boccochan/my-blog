import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";

const Container = styled.div`
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.graySuperLight};
  height: 100%;
  min-width: 200px;
`;

type Menu = {
  name: string;
  callback: () => void;
};

export default (props: { menuList: Menu[] }) => {
  return (
    <Container>
      {props.menuList.map((menu) => (
        <h1>{menu.name}</h1>
      ))}
    </Container>
  );
};
