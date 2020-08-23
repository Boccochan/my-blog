import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import Burger from "@src/components/lib/Burger";
import SideBar from "./SideBar";
import { getStudyList, Study } from "./study";

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

const LyContainer = styled.div`
  position: relative;
  display: flex;
`;

const LyObj = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const SelectedComponent = (props: { select: string; studyList: Study[] }) => {
  const { select, studyList } = props;

  return (
    <Suspense fallback="loading..">
      <LyObj>
        {studyList.map((study) => {
          if (study.key === select) {
            return <study.component />;
          }
        })}
      </LyObj>
    </Suspense>
  );
};

export default () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [key, setKey] = useState("");
  const studyList = getStudyList();

  const handleOpen = () => {
    setShowSideBar(!showSideBar);
  };

  const click = (key: string) => {
    const result = studyList.some((study) => study.key === key);

    if (result) {
      setKey(key);
    }
  };

  return (
    <Wrapper>
      <LyBurger>
        <Burger
          isClose={showSideBar}
          width={20}
          color={theme.colors.blueLight}
          openHandler={handleOpen}
        />
      </LyBurger>
      <LyContainer>
        <SideBar
          show={showSideBar}
          tree={studyList.map((study) => study.key)}
          click={click}
        />
        <SelectedComponent select={key} studyList={studyList} />
      </LyContainer>
    </Wrapper>
  );
};
