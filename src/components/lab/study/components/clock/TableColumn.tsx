import React from "react";
import styled from "styled-components";
import { TIMEZONE } from "@src/components/lab/study/components/clock/Time";
import { D1 } from "@src/styles/typography";
import { theme } from "@src/styles/color";
import * as moment from "moment-timezone";

type Props = {
  country: string;
  location: string;
  utc: number;
  timezone: TIMEZONE;
  time: Date;
};

type BoxProps = {
  backgroundColor: string;
  color: string;
};

const Box = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background-color: ${(props: BoxProps) => props.backgroundColor};
  color: ${(props: BoxProps) => props.color};
  padding: 3px 3px;
`;

const Country = styled.div`
  width: 20%;
  padding-left: 2%;
`;

const City = styled.div`
  width: 20%;
  padding-left: 2%;
`;

const Date = styled.div`
  width: 20%;
  padding-left: 2%;
`;

const Time = styled.div`
  width: 20%;
  padding-left: 2%;
`;

const Utc = styled.div`
  width: 20%;
  padding-left: 2%;
`;

export default (props: Props) => {
  const curDate = moment
    .utc(props.time)
    .tz(props.timezone)
    .format("MMM Do YYYY HH:mm:ss")
    .split(" ");

  const sign = props.utc > 0 ? "+" : "-";
  const hours = moment.utc(props.time).tz(props.timezone).hours();

  let color = "";
  let backgroundColor = "";

  if (hours >= 5 && hours < 9) {
    color = theme.colors.whiteSuperLight;
    backgroundColor = "#40A2FC";
  } else if (hours >= 9 && hours < 16) {
    color = theme.colors.whiteSuperLight;
    backgroundColor = theme.colors.blue;
  } else if (hours >= 16 && hours < 19) {
    color = theme.colors.whiteSuperLight;
    backgroundColor = theme.colors.blueDark;
  } else {
    color = theme.colors.whiteSuperLight;
    backgroundColor = theme.colors.black;
  }

  return (
    <Box backgroundColor={backgroundColor} color={color}>
      <Country>
        <D1>{props.country}</D1>
      </Country>
      <City>
        <D1>{props.location}</D1>
      </City>
      <Date>
        <D1>{curDate.slice(0, 3).join(" ")}</D1>
      </Date>
      <Time>
        <D1>{curDate.slice(3).join(" ")}</D1>
      </Time>
      <Utc>
        <D1>
          UTC{sign}
          {Math.abs(props.utc)}
        </D1>
      </Utc>
    </Box>
  );
};
