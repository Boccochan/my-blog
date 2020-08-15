import React from "react";
import { Layout } from "@src/components/layout";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { SEO } from "@src/components/seo";
import Form from "@src/components/contact/Form";
import Explain from "@src/components/contact/Explain";
import styled from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import { theme } from "@src/styles/color";
import Thanks from "@src/components/contact/Thanks";

type Props = PageRendererProps & { pageTitle: string };

const Container = styled.div`
  // background-color: ${theme.colors.gray};
  border-radius: 10px;
  position: relative;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  ${myMedia.greaterThan("ipad")`
    width: 50%;
  `}
`;

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
    <React.Fragment>
      <Thanks />
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title={props.pageTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Container>
          <Explain />
          <Form />
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default Contact;
