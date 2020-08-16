import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import Burger from "@src/components/lib/Burger";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-top: 1px solid ${theme.colors.graySuperLight};
`;

export default () => {
  const handleOpen = () => {
    console.log("Called");
  };

  return (
    <Wrapper>
      <Burger
        width={20}
        color={theme.colors.blueLight}
        openHandler={handleOpen}
      />
    </Wrapper>
  );
};
