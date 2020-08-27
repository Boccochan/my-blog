import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import Burger from "@src/components/lib/Burger";
import SideBar from "./SideBar";
// import { getStudyList, Study } from "./study";
import SelectNode, { studyList } from "./SelectNode";

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
  width: 100%;
  height: 100vh;
`;

// const LyObj = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

// const SelectedComponent = (props: { select: string; studyList: Study[] }) => {
//   const { select, studyList } = props;

//   console.log("SelectedComponent!!!!!!!!!!");
//   return (
//     <Suspense fallback="loading..">
//       <LyObj>
//         <Clock />
//         {/* {studyList.map((study) => {
//           if (study.key === select) {
//             return <study.component />;
//           }
//         })} */}
//       </LyObj>
//     </Suspense>
//   );
// };

export default () => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [key, setKey] = useState("");

  const handleOpen = () => {
    setShowSideBar(!showSideBar);
  };

  const click = (key: string) => {
    if (studyList.includes(key)) {
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
        <SideBar show={showSideBar} tree={studyList} click={click} />
        <SelectNode select={key} />
      </LyContainer>
    </Wrapper>
  );
};
