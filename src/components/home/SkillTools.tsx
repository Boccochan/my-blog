import React from "react";
import styled from "styled-components";
import KeyValue from "./SkillKeyValue";
import { myMedia } from "@src/styles/custom-media";
import { Title } from "@src/components/lib/Title";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

const KeyValueBox = styled.div`
  text-align: left;
  ${myMedia.lessThan("iphone5")`
    margin-top: 20px;
  `}

  ${myMedia.between("iphone5", "iphone678plus")`
    margin-top: 16px;
  `}

  ${myMedia.between("iphone678plus", "ipad")`
    margin-top: 18px;
  `}

  ${myMedia.between("ipad", "medium")`
    margin-top: 20px;
  `}

  ${myMedia.greaterThan("medium")`
    margin-top: 40px;
  `}
`;

export default function SkillTools() {
  const result = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          self {
            others {
              title
              name
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Title>Others</Title>
      <KeyValueBox>
        {result.site.siteMetadata.self.others.map(
          (tool: { title: string; name: string[] }, index: any) => (
            <KeyValue title={tool.title} name={tool.name} key={index} />
          )
        )}
      </KeyValueBox>
    </Container>
  );
}
