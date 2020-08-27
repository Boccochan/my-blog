import React from "react";
import Calender from "./components/calender";
import Clock from "./components/clock";

export type Study = {
  key: string;
  component: () => JSX.Element;
};

export const getStudyList = () => {
  let studyList = [] as Study[];
  // ************************* CAUTION **************************
  // You need to put a real path to lazy import. You CAN NOT USE
  // VARIABLES for it.
  // This is not REACT things, but it is from bandler.
  // ************************************************************
  // studyList.push({
  //   key: "components/calender",
  //   component: React.lazy(() => import("./components/calender")),
  // });

  // studyList.push({
  //   key: "components/clock",
  //   component: React.lazy(() => import("./components/clock")),
  // });
  studyList.push({
    key: "components/calender",
    component: () => <Calender />,
  });

  studyList.push({
    key: "components/clock",
    component: () => <Clock />,
  });

  return studyList;
};
