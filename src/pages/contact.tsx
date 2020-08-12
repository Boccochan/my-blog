import React from "react";
import { Layout } from "@src/components/layout";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { SEO } from "@src/components/seo";

type Props = PageRendererProps & { pageTitle: string };

const Contact = (props: Props) => {
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
    </Layout>
  );
};

export default Contact;
