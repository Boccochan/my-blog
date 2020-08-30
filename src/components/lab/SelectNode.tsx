import React from "react";
import Calender from "@src/components/lab/study/components/calender";
import Clock from "@src/components/lab/study/components/clock";
import Intro from "./Intro";

export enum StudyList {
  CLOCK = "components/clock",
}

export default (props: { select: string }) => {
  const { select } = props;

  switch (select) {
    case StudyList.CLOCK:
      return <Clock />;
    default:
      return <Intro />;
  }
};
