import React, { useState } from "react";
import { Layout } from "@src/components/layout";
import { graphql, PageRendererProps, useStaticQuery } from "gatsby";
import { SEO } from "@src/components/seo";
import Form from "@src/components/contact/Form";
import Explain from "@src/components/contact/Explain";
import styled from "styled-components";
import { myMedia } from "@src/styles/custom-media";
// import { theme } from "@src/styles/color";
import Thanks from "@src/components/contact/Thanks";

type Props = PageRendererProps & { pageTitle: string };

const Container = styled.div`
  border-radius: 10px;
  position: relative;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  ${myMedia.greaterThan("ipad")`
    width: 50%;
  `}
`;

const ThanksDialog = (props: {
  closeFlag: boolean;
  closeHandler: () => void;
}) => {
  if (!props.closeFlag) {
    return <Thanks close={props.closeHandler} />;
  } else {
    return <div></div>;
  }
};

const Contact = (props: Props) => {
  const [closeFlag, setClose] = useState(true);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const sent = () => {
    console.log(566666666, "Thanks!!!!!!!!!!!");
    setClose(false);
  };

  const closeHandler = () => {
    setClose(true);
  };

  const siteTitle = data.site.siteMetadata.title;

  return (
    <React.Fragment>
      <ThanksDialog closeFlag={closeFlag} closeHandler={closeHandler} />
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title={props.pageTitle}
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Container>
          <Explain />
          <Form sent={sent} />
        </Container>
      </Layout>
    </React.Fragment>
  );
};

export default Contact;
