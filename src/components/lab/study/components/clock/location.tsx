import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@src/styles/color";
import Time, {
  TIMEZONE,
} from "@src/components/lab/study/components/clock/time";

type PointerProps = {
  top: number;
  left: number;
};

const Pointer = styled.div`
  position: absolute;
  top: ${(props: PointerProps) => props.top}px;
  left: ${(props: PointerProps) => props.left}px;
  width: 5px;
  height: 5px;
  background-color: ${theme.colors.red};
  border-radius: 50%;

  &:hover {
    width: 8px;
    height: 8px;
    top: ${(props: PointerProps) => props.top - 1.5}px;
    left: ${(props: PointerProps) => props.left - 1.5}px;
  }
`;

const LocationKeyframe = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 20px; 
    opacity: 1;
  }
`;

const LocationUnderBarKeyframe = keyframes`
  0% {
    width: 0%;
    opacity: 1;
  }
  100% {
    width: 60px;
    opacity: 1;
  }
`;

const LabelKeyFrame = keyframes`
  0% {
    opacity: 0;
  }
  90% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

type LocationProps = {
  top: number;
  left: number;
  click: boolean;
  content: string;
};

const Location = styled.div`
  position: absolute;
  top: ${(props: LocationProps) => props.top}px;
  left: ${(props: LocationProps) => props.left}px;
  width: 0px;
  height: 0px;
  border-right: 1px solid ${theme.colors.red};
  margin: 10px;
  background-color: transparent;
  opacity: 0;

  transform-origin: top left;
  transform: rotate(45deg);

  &::before {
    transform: rotate(-45deg);
    transform-origin: top left;
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    border-bottom: 1px solid ${theme.colors.red};
    width: 0px;
    ${(props: LocationProps) =>
      props.click &&
      css`
        animation: ${LocationUnderBarKeyframe} 0.2s ease-out forwards 0.2s;
      `}

    color: ${theme.colors.red};
    background-color: transparent;
  }

  &::after {
    font-size: 10px;
    transform: rotate(-45deg);
    transform-origin: top left;
    position: absolute;
    content: "${(props: LocationProps) => props.content}";
    top: -4px;
    left: -11.2px;
    padding-left: 10px;
    width: 100px;
    opacity: 0;
    ${(props: LocationProps) =>
      props.click &&
      css`
        animation: ${LabelKeyFrame} 0.3s ease-out forwards 0.3s;
      `}

    color: ${theme.colors.red};
    background-color: transparent;
  }

  ${(props: LocationProps) =>
    props.click &&
    css`
      animation: ${LocationKeyframe} 0.4s ease-out forwards;
    `}
`;

type TimeLocationProps = {
  top: number;
  left: number;
  click: boolean;
};

const TimeKeyFrame = keyframes`
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  40% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
`;

const TimeLocation = styled.div`
  position: absolute;
  top: ${(props: TimeLocationProps) => props.top + 16}px;
  left: ${(props: TimeLocationProps) => props.left + 16}px;
  opacity: 0;
  ${(props: TimeLocationProps) =>
    props.click &&
    css`
      animation: ${TimeKeyFrame} 0.4s ease forwards 0.5s;
    `}
`;

const BackgroundKeyFrame = keyframes`
  0% {
    transform: translateY(-5px);
    opacity: 0;
  }
  40% {
    opacity: 0;
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
    opacity: 0.7;
  }
`;

const Background = styled.div`
  position: absolute;
  top: ${(props: TimeLocationProps) => props.top - 8}px;
  left: ${(props: TimeLocationProps) => props.left + 8}px;
  width: 70px;
  height: 50px;
  background-color: black;
  opacity: 0;
  ${(props: TimeLocationProps) =>
    props.click &&
    css`
      animation: ${BackgroundKeyFrame} 0.4s ease forwards 0.5s;
    `}
`;

export default (props: {
  top: number;
  left: number;
  city: string;
  timezone: TIMEZONE;
  time: Date;
}) => {
  const [clicked, setClick] = useState(true);
  const locationTop = props.top - 22;
  const locationLeft = props.left + 7;

  const click = () => {
    setClick(!clicked);
  };

  return (
    <React.Fragment>
      <Pointer top={props.top} left={props.left} onClick={click} />

      <Background top={locationTop} left={locationLeft} click={clicked} />
      <Location
        click={clicked}
        top={locationTop}
        left={locationLeft}
        content={props.city}
      />
      <TimeLocation top={locationTop} left={locationLeft} click={clicked}>
        <Time now={props.time} timezone={props.timezone} />
      </TimeLocation>
    </React.Fragment>
  );
};
