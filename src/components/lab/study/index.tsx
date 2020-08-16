import React from "react";

export type Study = {
  key: string;
  component: React.LazyExoticComponent<() => JSX.Element>;
};

export const getStudyList = () => {
  let studyList = [] as Study[];
  // ************************* CAUTION **************************
  // You need to put a real path to lazy import. You CAN NOT USE
  // VARIABLES for it.
  // This is not REACT things, but it is from bandler.
  // ************************************************************
  studyList.push({
    key: "components/calender",
    component: React.lazy(() => import("./components/calender")),
  });

  studyList.push({
    key: "components/clock",
    component: React.lazy(() => import("./components/clock")),
  });

  return studyList;
};
