import React from "react";
import Calender from "@src/components/lab/study/components/calender";
import Clock from "@src/components/lab/study/components/clock";

export const studyList = ["components/calender", "components/clock"];

export default (props: { select: string }) => {
  const { select } = props;

  switch (select) {
    case studyList[0]:
      return <Calender />;
    case studyList[1]:
      return <Clock />;
    default:
      return <div>Hello</div>;
  }
};
