import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  background-color: transparent;
`;

type Props = {
  src: string;
  load: () => void;
};

export default function Img(props: Props) {
  return <StyledImg src={props.src} onLoad={() => props.load()}></StyledImg>;
}
