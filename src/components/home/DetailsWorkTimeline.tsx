import React from "react";
import styled from "styled-components";
import { theme } from "../../styles/color";
import { myMedia } from "../../styles/custom-media";

const Container = styled.div`
  ${myMedia.lessThan("iphone5")`
    width: 0;
    opacity: 0;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    width: 0;
    opacity: 0;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    width: 0;
    opacity: 0;
  `}

  ${myMedia.between("ipad", "medium")`
    width: auto;
    opacity: 1;
  `}

  ${myMedia.greaterThan("medium")`
    width: auto;
    opacity: 1;
  `}

`;

const Circle = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background-color: ${(props: { color: string }) => props.color};
  border-radius: 50%;
  font-size: 12px;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  display: flex;
  color: ${theme.colors.white};
`;

type BarType = {
  height: number;
  color: string;
};

const Bar = styled.div`
  position: relative;
  left: 25px;
  width: 2px;
  height: ${(props: BarType) => props.height}px;
  background-color: ${(props: BarType) => props.color};
`;

export default function WorkTimeline() {
  return (
    <Container width={300}>
      <Circle color={theme.colors.red}>Now</Circle>
      <Bar color={theme.colors.red} height={160} />
      <Circle color={theme.colors.red}>2017</Circle>
      <Bar color={theme.colors.red} height={160} />
      <Circle color={theme.colors.red}>2005</Circle>
    </Container>
  );
}
