import React from "react";
import { useDrag } from "react-dnd";
import styled, { css } from "styled-components";
import { theme } from "@src/styles/color";
import { D1 } from "@src/styles/typography";

const UserStoryBoard = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.graySuperLight};
  border-radius: 2px;
  height: auto;
  width: 100%;
  opacity: 1;
  text-align: left;
  padding: 5px;

  ${(props: { isDragging: boolean }) =>
    props.isDragging &&
    css`
      opacity: 0.5;
    `};
`;

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

const UserStoryNo = styled.div`
  width: 50%;
  color: ${theme.colors.blue};
`;

const UserStoryPoint = styled.div`
  color: ${theme.colors.green};
  width: 50%;
  text-align: right;
`;

type ProjectProps = {
  backgroundColor: string;
  color: string;
};

const Project = styled.div`
  padding: 2px 10px;
  background-color: ${(props: ProjectProps) => props.backgroundColor};
  color: ${(props: ProjectProps) => props.color};
  display: inline-block;
  border-radius: 4px;
`;

const UserStory = styled.div`
  margin-top: 5px;
`;

type Props = {
  no: number;
  project: string;
  projectBackgroundColor: string;
  projectColor: string;
  userStory: string;
  point: number;
};

export default (props: Props) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "test" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <UserStoryBoard ref={drag} isDragging={isDragging}>
      <Wrapper>
        <UserStoryNo>
          <D1>#{props.no}</D1>
        </UserStoryNo>
        <UserStoryPoint>
          <D1>{props.point}</D1>
        </UserStoryPoint>
      </Wrapper>
      <Project
        backgroundColor={props.projectBackgroundColor}
        color={props.projectColor}
      >
        <D1>{props.project}</D1>
      </Project>
      <UserStory>
        <D1>{props.userStory}</D1>
      </UserStory>
    </UserStoryBoard>
  );
};
