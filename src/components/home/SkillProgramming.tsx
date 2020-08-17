import React from "react";
import styled from "styled-components";
import BarChart from "./SkillBarChart";
import { Title } from "@src/components/lib/Title";
import { graphql, useStaticQuery } from "gatsby";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  width: auto;
`;

export default function SkillProgramming() {
  const result = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          self {
            programmingLevels {
              name
              level
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <Title>Programming Skills</Title>
      {result.site.siteMetadata.self.programmingLevels.map(
        (prog: { name: string; level: number }, index: any) => {
          return <BarChart title={prog.name} level={prog.level} key={index} />;
        }
      )}
    </Container>
  );
}
