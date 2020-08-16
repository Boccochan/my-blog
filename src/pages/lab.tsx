import React from "react";
import { PageRendererProps } from "gatsby";
import { Layout } from "@src/components/layout";
import { SEO } from "@src/components/seo";
import LabMain from "@src/components/lab";

type Props = PageRendererProps;

const Lab = (props: Props) => {
  return (
    <Layout location={props.location} title="Lab">
      <SEO title="Lab" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <LabMain />
    </Layout>
  );
};

export default Lab;
