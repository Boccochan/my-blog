import React from "react";
import { PageRendererProps } from "gatsby";
import UnderDevelopment from "../components/under-development";

type Props = PageRendererProps;

const Contact = (props: Props) => {
  return <UnderDevelopment location={props.location} pageTitle="Contact" />;
};

export default Contact;
