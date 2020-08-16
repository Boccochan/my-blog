import React, { useState } from "react";
import styled, { css } from "styled-components";

type LineProps = {
  color: string;
  height: number;
};

const Line = styled.div`
  width: 100%;
  height: ${(props: LineProps) => props.height}px;
  background-color: ${(props: LineProps) => props.color};
`;

const LineTop = styled(Line)`
  position: absolute;
  top: 10%;
  ${(props: { close: boolean }) =>
    props.close &&
    css`
      transform: rotate(-45deg) translate(-40%, 100%);
      height: 10%;
    `}
`;

const LineCenter = styled(Line)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props: { close: boolean }) =>
    props.close &&
    css`
      opacity: 0;
    `}
`;

const LineBottom = styled(Line)`
  position: absolute;
  bottom: 10%;
  ${(props: { close: boolean }) =>
    props.close &&
    css`
      transform: rotate(45deg) translate(-40%, -100%);
      height: 10%;
    `}
`;

type ContainerProps = {
  width: number;
  border: number;
  color: string;
};

const Container = styled.div`
  position: relative;
  width: ${(props: ContainerProps) => props.width}px;
  height: ${(props: ContainerProps) => props.width}px;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const Box = styled.div`
  position: relative;
  width: 80%;
  height: 80%;
  margin-right: auto;
  margin-left: auto;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
`;

type Props = {
  width?: number;
  color?: string;
  isClose?: boolean;
  openHandler: () => void;
};

export default ({
  width = 40,
  color = "#333",
  isClose = false,
  ...props
}: Props) => {
  const [close, setClose] = useState(isClose);
  const border = width / 20 === 0 ? 1 : width / 20;
  const lineHeight = width / 10 === 0 ? 1 : width / 10;

  const handleClick = () => {
    setClose(!close);
    props.openHandler();
  };

  return (
    <Container
      width={width}
      border={border}
      color={color}
      onClick={handleClick}
    >
      <Box>
        <LineTop color={color} close={close} height={lineHeight} />
        {/* <Line color="transparent" height={lineHeight * 1.4} /> */}
        <LineCenter color={color} close={close} height={lineHeight} />
        {/* <Line color="transparent" height={lineHeight * 1.4} /> */}
        <LineBottom color={color} close={close} height={lineHeight} />
      </Box>
    </Container>
  );
};
