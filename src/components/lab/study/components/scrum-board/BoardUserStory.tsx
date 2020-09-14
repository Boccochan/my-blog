import React from "react";
import { useDrag } from "react-dnd";
import styled, { css } from "styled-components";
import { theme } from "@src/styles/color";

const UserStoryBoard = styled.div`
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.graySuperLight};
  border-radius: 2px;
  height: auto;
  width: 100%;
  opacity: 1;

  ${(props: { isDragging: boolean }) =>
    props.isDragging &&
    css`
      opacity: 0.5;
    `};
`;

// type Props = {
//   no: number;
//   title: string;
//   description: string;
//   point: number;
// };

// export default (props: Props) => {
export default () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "test" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <UserStoryBoard ref={drag} isDragging={isDragging}>
      Drag
    </UserStoryBoard>
  );
};
