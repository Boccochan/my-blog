import React from "react";
import styled from "styled-components";
import { T1, T2, D1 } from "@src/styles/typography";
import { theme } from "@src/styles/color";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const Box = styled.div`
  position: relative;
  // top: 0;
  // left: 0;
  min-width: 320px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  padding: 2px 2px;
`;

const Title = styled(T1)`
  margin-top: 20px;
  font-size: 48px;
  font-weight: 300;
  padding-top: 12px;
  padding-bottom: 12px;
  border-bottom: 5px solid ${theme.colors.grayDark};
`;

const Description = styled(D1)`
  margin-top: 20px;
`;

const SubTitle = styled(T2)`
  margin-top: 20px;
  margin-bottom: 12px;
`;

export default () => {
  return (
    <Wrapper>
      <Box>
        <Title>Yasuhiro Lab</Title>
        <Description>
          Yasuhiro Lab is for studying Front-End, Back-End, Frameworks,
          Architecture, Programming Language and so forth. You can see them by
          clicking the tree diagram on the left side bar.
        </Description>
        <SubTitle>Components</SubTitle>
        <D1>
          Creating React components to study React, typescript, css animation
          and interaction with API.
        </D1>
      </Box>
    </Wrapper>
  );
};
