import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { T3, D1 } from "@src/styles/typography";

const Layout = styled.div`
  margin: 12px;
`;

const Title = styled.div`
  background-color: ${theme.colors.green};
  color: ${theme.colors.white};
  border-radius: 20px;
  padding: 4px 12px;
  display: inline-block;
`;

const Description = styled.div`
  margin: 5px;
`;

type Layout = {
  sprint: number;
  description: string;
};

export default (props: Layout) => {
  return (
    <Layout>
      <Title>
        <T3>Sprint {props.sprint}</T3>
      </Title>
      <Description>
        <D1>{props.description}</D1>
      </Description>
    </Layout>
  );
};
