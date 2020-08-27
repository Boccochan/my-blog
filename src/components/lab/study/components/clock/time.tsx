import React, { useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { theme } from "@src/styles/color";
import * as moment from "moment-timezone";

export enum TIMEZONE {
  TOKYO = "Asia/Tokyo",
  LOSANGELES = "America/Los_Angeles",
  NEWYORK = "America/New_York",
  LONDON = "Europe/London",
  SAOPAULO = "America/Sao_Paulo",
  GAZA = "Asia/Gaza",
  KARACHI = "Asia/Karachi",
  HONGKONG = "Asia/Hong_Kong",
  AUSTRALIA = "Australia/Sydney",
  WINDHOEK = "Africa/Windhoek",
}

const DateStyle = styled.div`
  font-size: 8px;
  color: ${theme.colors.red};
`;

const TimeStyle = styled.div`
  font-size: 10px;
  color: ${theme.colors.red};
`;

export default (props: { now: Date; timezone: TIMEZONE }) => {
  const curDate = moment
    .utc(props.now)
    .tz(props.timezone)
    .format("MMM Do HH:mm:ss")
    .split(" ");
  return (
    <React.Fragment>
      <TimeStyle>{curDate[2]}</TimeStyle>
      <DateStyle>{`${curDate[0]} ${curDate[1]}`}</DateStyle>
    </React.Fragment>
  );
};
