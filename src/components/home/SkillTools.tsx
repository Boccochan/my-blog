import React from "react";
import styled from "styled-components";
import KeyValue from "./KeyValue";

const Title = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
`;

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: ${(props: { width: number }) => `${props.width}px`};
`;

const KeyValueBox = styled.div`
  margin-top: 40px;
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
