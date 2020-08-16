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
    props.show
      ? css`
          transform: translateX(0%);
        `
      : css`
          transform: translateX(-100%);
        `}
`;

type Props = {
  show: boolean;
};

export default (props: Props) => {
  return (
    <React.Fragment>
      <Bar show={props.show}>hello</Bar>
    </React.Fragment>
  );
};
