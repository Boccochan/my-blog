import React from "react";
import { PageRendererProps } from "gatsby";
import UnderDevelopment from "@src/components/under-development";

type Props = PageRendererProps;

const Lab = (props: Props) => {
  return <UnderDevelopment location={props.location} pageTitle="Lab" />;
};

export default Lab;
