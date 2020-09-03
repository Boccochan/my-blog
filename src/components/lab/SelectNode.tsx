import React from "react";
import Calender from "@src/components/lab/study/components/calender";
import Clock from "@src/components/lab/study/components/clock";
import ScrumBoard from "@src/components/lab/study/components/scrum-board";
import Intro from "./Intro";

export enum StudyList {
  CLOCK = "components/clock",
  SCRUM_BOARD = "components/scrum-board",
}

export default (props: { select: string }) => {
  const { select } = props;

  switch (select) {
    case StudyList.CLOCK:
      return <Clock />;
    case StudyList.SCRUM_BOARD:
      return <ScrumBoard />;
    default:
      return <Intro />;
  }
};
