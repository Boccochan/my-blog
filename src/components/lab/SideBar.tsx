import React from "react";
import styled, { css } from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { theme } from "@src/styles/color";
import { T4 } from "@src/styles/typography";
import Tree from "./Tree";

const Bar = styled.div`
  position: relative;
  height: 100vh;
  width: 20%;
  border-right: 1px solid ${theme.colors.graySuperLight};
  transition: transform 0.5s ease;

  background-color: ${theme.colors.whiteSuperLight};
  ${myMedia.lessThan("ipadpro")`
    width: 90%;
  `}

  ${(props: { show: boolean }) =>
    !props.show &&
    css`
      display: none;
    `}
`;

const LyTree = styled.div`
  position: relative;
  top: 1%;
  left: 5%;
`;

type Props = {
  show: boolean;
  tree: string[];
  click: (key: string) => void;
};

const treeData = [
  {
    key: "components",
    node: [
      {
        key: "calender",
      },
      {
        key: "clock",
      },
    ],
  },
];

export default (props: Props) => {
  const click = (key: string) => {
    props.click(key);
  };

  return (
    <React.Fragment>
      <Bar show={props.show}>
        <LyTree>
          <Tree data={treeData} callback={click} />
        </LyTree>
      </Bar>
    </React.Fragment>
  );
};
