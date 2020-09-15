import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { T3 } from "@src/styles/typography";
import { useDrop } from "react-dnd";
import BoardUserStory, { UserStoryInfo } from "./BoardUserStory";

const Wrapper = styled.div`
  width: ${(props: { width: number }) => props.width}px;
  text-align: center;
`;

const Title = styled.div`
  background-color: ${(props: { color: string }) => props.color};
  color: ${theme.colors.gray};
  padding: 2px 10px;
`;

type Props = {
  title: string;
  color: string;
  width: number;
  index: number;
  onDrop: (index: number) => void;
  userStories: UserStoryInfo[];
};

export default (props: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: "test",
    drop: () => {
      props.onDrop(props.index);
    },
  });

  console.log(isOver);
  console.log(props.userStories);

  return (
    <Wrapper ref={drop} width={props.width}>
      <Title color={props.color}>
        <T3>{props.title}</T3>
      </Title>
      {props.userStories.map((userStory) => (
        <BoardUserStory {...userStory} />
      ))}
      {/* {props.userStories} */}
      {/* 
      {props.userStories.map((userStory) => (
        <div>{userStory}</div>
      ))} */}
    </Wrapper>
  );
};
