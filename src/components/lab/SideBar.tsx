import React from "react";
import styled, { css } from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { theme } from "@src/styles/color";
import Tree from "./Tree";
import { parseLabTree } from "@src/lib/parse";

const Bar = styled.div`
  position: relative;
  // min-height: calc(100vh-50px);
  min-height: 100vh;
  // height: 100%;
  min-width: 310px;
  width: 20%;
  border-right: 1px solid ${theme.colors.graySuperLight};
  transition: transform 0.5s ease;
  z-index: 1000;
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
  top: 10px;
  left: 10px;
`;

type Props = {
  show: boolean;
  tree: string[];
  click: (key: string) => void;
};

export default (props: Props) => {
  const click = (key: string) => {
    props.click(key);
  };

  const treeData = parseLabTree(props.tree);

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
