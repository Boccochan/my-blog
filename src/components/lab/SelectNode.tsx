import React, { useState, Suspense } from "react";
import styled from "styled-components";
import { Study } from "./study";
import Calender from "@src/components/lab/study/components/calender";
import Clock from "@src/components/lab/study/components/clock";

// const LyObj = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// `;

export const studyList = ["components/calender", "components/clock"];

export default (props: { select: string }) => {
  const { select } = props;

  // const keys = studyList.map((study) => study.key);
  // console.log(keys, select);

  switch (select) {
    case studyList[0]:
      return <Calender />;
    case studyList[1]:
      return <Clock />;
    default:
      return <div>Hello</div>;
  }
};
