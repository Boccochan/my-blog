import React from "react";
import WorkEperience from "./DetailsWorkExperience";
import AboutMe from "./DetailsAboutMe";
import styled from "styled-components";
import { theme } from "../../styles/color";

const Container = styled.div`
  position: relative;
  display: grid;
  z-index: 100;
  padding-top: 20px;
  margin-bottom: 40px;
  background-color: ${theme.colors.blogBackground};
  gap: 25px;
  grid-template-columns: repeat(
    ${(props: { repeat: number }) => props.repeat},
    minmax(200px, 1fr)
  );
`;

export default function Details() {
  return (
    <Container repeat={2}>
      <WorkEperience />
      <AboutMe />
    </Container>
  );
}
