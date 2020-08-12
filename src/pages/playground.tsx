import React from "react";
import { PageRendererProps } from "gatsby";
import UnderDevelopment from "@src/components/under-development";

type Props = PageRendererProps;

const About = (props: Props) => {
  return <UnderDevelopment location={props.location} pageTitle="About" />;
};

export default About;
