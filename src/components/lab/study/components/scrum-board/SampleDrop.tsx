import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
`;

export interface BoardSquareProps {
  index: number;
  onDrop: (index: number) => void;
  children: any;
}

export default ({ index, onDrop, children }: BoardSquareProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "test",
    drop: () => {
      onDrop(index);
    },
  });

  console.log(isOver);
  console.log(children);

  return (
    <div
      ref={drop}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Box>{children}</Box>
    </div>
  );
};
