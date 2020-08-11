import React from "react";
import styled from "styled-components";
import KeyValue from "./SkillKeyValue";
import { myMedia } from "../../styles/custom-media";
import { Title } from "./Title";

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
  return (
    <Container>
      <Title>Others</Title>
      <KeyValueBox>
        <KeyValue title="Framework" name={["Vue", "Nuxt", "React", "Gatsby"]} />
        <KeyValue title="DB" name={["MariaDB", "DynamoDB", "Redus", "MySQL"]} />
        <KeyValue
          title="DevTools"
          name={["VScode", "Github", "Actions", "Circle CI"]}
        />
        <KeyValue
          title="Environment"
          name={["Linux", "Docker", "ECS", "Sentry"]}
        />
        <KeyValue title="Unit Test" name={["jest", "pytest"]} />
        <KeyValue title="Architecture" name={["Serverless", "SPA"]} />
        <KeyValue title="API" name={["REST", "GraphQL"]} />
        <KeyValue title="Communication" name={["Slack", "MS Teams"]} />
      </KeyValueBox>
    </Container>
  );
}
