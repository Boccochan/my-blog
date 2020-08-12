import React from "react";
import { PageRendererProps } from "gatsby";
import UnderDevelopment from "@src/components/under-development";

type Props = PageRendererProps;

const About = (props: Props) => {
  return (
    <React.Fragment>
      <ul>
        <li>Idea list</li>
        <li>Side bar</li>
        <li>Calender</li>
        <li>Calculater</li>
        <li>Clock</li>
        <li>Virtual stock</li>
        <li>Chat</li>
      </ul>
    </React.Fragment>
  );
};

export default About;
