import React from "react";
import styled from "styled-components";
import { T1, T2, D1 } from "@src/styles/typography";
import { theme } from "@src/styles/color";
import { myMedia } from "@src/styles/custom-media";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  min-height: 100vh;
`;

const Box = styled.div`
  position: relative;
  min-width: 320px;
  min-height: 100vh;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  height: auto;
  padding: 2px 2px;
  ${myMedia.lessThan("ipadpro")`
    overflow-x: auto;
  `}
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
    <Box>
      <Title>Yasuhiro Lab</Title>
      <Description>
        Yasuhiro Lab is for studying Front-End, Back-End, Frameworks,
        Architecture, Programming Language and so forth. You can see them by
        clicking the tree diagram on the left side bar.
      </Description>
      <SubTitle>Components</SubTitle>
      <D1>
        Creating React components to study React, typescript, css animation and
        interaction with API.
      </D1>
    </Box>
  );
};
