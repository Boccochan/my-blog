import React from "react";

import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { Layout } from "@src/components/layout";
import { SEO } from "@src/components/seo";
import styled from "styled-components";

const MainBox = styled.div`
  position: relative;
  width: 100%;
  top: 140px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 32px;
  font-weight: 300;
`;

type Props = PageRendererProps & { pageTitle: string };

const UnderDevelopment = (props: Props) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO
        title={props.pageTitle}
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      ;<MainBox>Under development</MainBox>
    </Layout>
  );
};

export default UnderDevelopment;
