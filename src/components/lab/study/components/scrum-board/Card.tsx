import React, { useRef } from "react";
import { useDrag, useDrop, DropTargetMonitor } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { XYCoord } from "dnd-core";
import styled, { css } from "styled-components";
import { theme } from "@src/styles/color";
import { D1 } from "@src/styles/typography";

const style = {
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  marginBottom: ".5rem",
  backgroundColor: "white",
  cursor: "move",
};

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

export type UserStoryInfo = {
  no: number;
  project: string;
  projectBackgroundColor: string;
  projectColor: string;
  userStory: string;
  point: number;
  id: any;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
};

export interface CardProps {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  index: number;
  id: string;
  type: string;
}

export default (props: UserStoryInfo) => {
  const { id, index, moveCard } = props;

  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex);

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  // const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    // <div ref={ref} style={{ ...style, opacity }}>
    //   {text}
    // </div>
    <UserStoryBoard ref={ref} isDragging={isDragging}>
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
