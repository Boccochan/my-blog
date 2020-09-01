import React, { useState } from "react";
import { Layout } from "@src/components/layout";
import { PageRendererProps } from "gatsby";
import { SEO } from "@src/components/seo";
import Form from "@src/components/contact/Form";
import Explain from "@src/components/contact/Explain";
import styled from "styled-components";
import { myMedia } from "@src/styles/custom-media";
import Thanks from "@src/components/contact/Thanks";

type Props = PageRendererProps & { pageTitle: string };
const Box = styled.div`
  min-height: calc(100vh - 80px);
`;

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

const Contact = (props: Props) => {
  const [closeFlag, setClose] = useState(true);

  const openHandler = () => {
    setClose(false);
  };

  const closeHandler = () => {
    setClose(true);
  };

  return (
    <React.Fragment>
      {!closeFlag && <Thanks close={closeHandler} />}
      <Layout location={props.location} title="Contact">
        <SEO
          title="Contact"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Box>
          <Container>
            <Explain />
            <Form sent={openHandler} />
          </Container>
        </Box>
      </Layout>
    </React.Fragment>
  );
};

export default Contact;
