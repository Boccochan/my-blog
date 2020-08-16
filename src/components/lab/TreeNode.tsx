import React, { useState } from "react";
import { Tree } from "@src/types";
import styled, { css } from "styled-components";
import { T5 } from "@src/styles/typography";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

const NodeContainer = styled.div`
  position: relative;
  display: flex;
  left: ${(props: { shift: number }) => props.shift}px;
`;

type ArrowProps = {
  open: boolean;
  child: boolean;
};
const Arrow = styled(ArrowRightIcon)`
  ${(props: ArrowProps) =>
    props.open &&
    css`
      transform: rotate(90deg);
    `}
  ${(props: ArrowProps) =>
    props.child &&
    css`
      opacity: 0;
    `}
`;

const KeyBox = styled.div`
  position: relative;
`;

const Key = styled(T5)`
  font-weight: 300;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

type Props = {
  shift: number;
  tree: Tree;
  callback: (key: string) => void;
};

export default function Node(props: Props) {
  const [open, setOpen] = useState(true);
  const shift = props.shift;

  const toggle = () => {
    setOpen(!open);
  };

  const callback = (e: any) => {
    e.preventDefault();
    props.callback(props.tree.key);
  };

  const clickEvent = (key: string) => {
    props.callback(`${props.tree.key}/${key}`);
  };

  return (
    <React.Fragment>
      <NodeContainer shift={shift}>
        <Arrow onClick={toggle} open={open} child={!props.tree.node} />
        <KeyBox>
          <Key onClick={callback}>{props.tree.key}</Key>
        </KeyBox>
      </NodeContainer>
      {open &&
        props.tree.node?.map((node) => (
          <Node
            tree={node}
            shift={shift + 12}
            callback={(key) => clickEvent(`${key}`)}
          />
        ))}
    </React.Fragment>
  );
}
