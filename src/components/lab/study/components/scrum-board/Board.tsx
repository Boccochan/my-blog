import React from "react";
import styled from "styled-components";
import Layout from "./BoardLayout";
import BoxTask from "./BoxTask";
import { theme } from "@src/styles/color";

const Wrapper = styled.div`
  display: flex;
`;

export default () => {
  const width = 300;

  return (
    <div>
      <Layout
        sprint={102}
        description="Improve sql query performance and user experience"
      />
      <Wrapper>
        <BoxTask title="User Story" color={theme.colors.purple} width={width} />
        <BoxTask
          title="In Progress"
          color={theme.colors.yellow}
          width={width}
        />
        <BoxTask title="Review" color={theme.colors.red} width={width} />
        <BoxTask title="Done" color={theme.colors.green} width={width} />
      </Wrapper>
    </div>
  );
};
