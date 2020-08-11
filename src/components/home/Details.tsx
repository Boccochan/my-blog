import React from "react";
import WorkEperience from "./DetailsWorkExperience";
import AboutMe from "./DetailsAboutMe";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { myMedia } from "@src/styles/custom-media";

const Container = styled.div`
  position: relative;
  display: grid;
  z-index: 100;
  margin-bottom: 40px;
  background-color: ${theme.colors.blogBackground};
  gap: 25px;
  grid-template-columns: repeat(2, minmax(200px, 1fr));

  ${myMedia.lessThan("medium")`
    grid-template-columns: repeat(1, minmax(200px, 1fr));
  `}
`;

export default function Details() {
  return (
    <Container>
      <WorkEperience />
      <AboutMe />
    </Container>
  );
}
