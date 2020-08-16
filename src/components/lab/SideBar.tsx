import React from "react";
import styled, { css } from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { theme } from "@src/styles/color";

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

type Props = {
  show: boolean;
  tree: string[];
  click: (key: string) => void;
};

export default (props: Props) => {
  const click = (key: string) => {
    props.click(key);
    1;
  };
  return (
    <React.Fragment>
      <Bar show={props.show}>
        {props.tree.map((key) => (
          <div onClick={() => click(key)}>{key}</div>
        ))}
      </Bar>
    </React.Fragment>
  );
};
