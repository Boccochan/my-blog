import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import React from "react";
import { Layout } from "@src/components/layout";
import { SEO } from "@src/components/seo";

type Props = PageRendererProps;

export const NotFoundPage = (props: Props) => {
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
    <Layout location={props.location} title={data.site.siteMetadata.title}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
