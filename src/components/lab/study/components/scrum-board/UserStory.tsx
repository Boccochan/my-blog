import React from "react";
import { DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import { T5, D1 } from "@src/styles/typography";
import BugReportIcon from "@material-ui/icons/BugReport";
import BuildIcon from "@material-ui/icons/Build";

export enum StoryType {
  DEVELOP = 0,
  BUG,
}

const UserStoryCard = styled.div`
  background-color: ${(props: { isDragging: boolean }) =>
    props.isDragging ? theme.colors.graySuperLight : theme.colors.white};
  padding: 16px;
  color: ${theme.colors.grayDark};
  margin: 0 0 8px 0;
  min-height: 50px;
`;

const Meta = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

const UserStoryNo = styled.div`
  width: 50%;
  color: ${theme.colors.blue};
`;

const UserStoryPoint = styled.div`
  width: 50%;
  color: ${theme.colors.green};
  text-align: right;
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

const Project = styled.div`
  margin-bottom: 8px;
  padding: 4px 2px;
  background-color: ${(props: { backgroundColor: string; color: string }) =>
    props.backgroundColor};
  color: ${(props: { backgroundColor: string; color: string }) => props.color};
  border-radius: 3px;
  padding: 3px 8px;
  display: inline-block;
`;

const Story = styled.div`
  text-align: right;
`;

type Props = {
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  item: any;
};

const UserStoryType = ({ type }: { type: StoryType }) => {
  if (type === StoryType.BUG) {
    return <BugReportIcon color="secondary" style={{ fontSize: 16 }} />;
  }

  return <BuildIcon color="action" style={{ fontSize: 12 }} />;
};

export default ({ provided, snapshot, item }: Props) => {
  console.log(item);
  return (
    <UserStoryCard
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      isDragging={snapshot.isDragging}
    >
      <Meta>
        <UserStoryNo>#{item.storyNo}</UserStoryNo>
        <UserStoryPoint>{item.point}</UserStoryPoint>
      </Meta>
      <Project
        backgroundColor={item.project.backgroundColor}
        color={item.project.color}
      >
        <T5>{item.project.name}</T5>
      </Project>
      <Title>
        <D1>{item.content}</D1>
      </Title>
      <Story>
        <UserStoryType type={item.type} />
      </Story>
    </UserStoryCard>
  );
};
