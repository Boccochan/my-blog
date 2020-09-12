import React, { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "@src/styles/color";
import { T5 } from "@src/styles/typography";

const Container = styled.div`
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.graySuperLight};
  height: 100%;
  min-width: 200px;
  padding-top: 30px;
`;

const Box = styled.div`
  margin-top: 20px;
`;

const StyledMenu = styled.div`
  padding: 12px;
  ${(props: { selected: boolean }) =>
    props.selected &&
    css`
      background-color: rgba(33, 190, 240, 0.2);
      color: ${theme.colors.blue};
    `};
  &:hover {
    background-color: ${theme.colors.blueLight};
    color: ${theme.colors.white};
    cursor: pointer;
  }
`;

type Menu = {
  name: string;
  callback: (index: number) => void;
};

export default (props: { menuList: Menu[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <Container>
      {props.menuList.map((menu, index) => {
        return (
          <StyledMenu
            onClick={() => {
              menu.callback(index);
              setCurrent(index);
            }}
            selected={current === index}
          >
            <T5>{menu.name}</T5>
          </StyledMenu>
        );
      })}
    </Container>
  );
};
