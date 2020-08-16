import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import Burger from "@src/components/lib/Burger";
import SideBar from "./SideBar";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const LyBurger = styled.div`
  border-top: 1px solid ${theme.colors.graySuperLight};
  border-bottom: 1px solid ${theme.colors.graySuperLight};

  background-color: ${theme.colors.whiteSuperLight};
  padding: 6px 1em;
`;

export default () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleOpen = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <Wrapper>
      <LyBurger>
        <Burger
          width={20}
          color={theme.colors.blueLight}
          openHandler={handleOpen}
        />
      </LyBurger>
      <SideBar show={showSideBar} />
    </Wrapper>
  );
};
