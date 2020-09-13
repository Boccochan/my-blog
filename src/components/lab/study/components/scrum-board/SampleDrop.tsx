import React from "react";
import { useDrop } from "react-dnd";
import styled from "styled-components";
// import { Square } from "./Square";
// import { canMoveKnight, moveKnight } from "./Game";
// import { ItemTypes } from "./ItemTypes";
// import { Overlay } from "./Overlay";

const Box = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid black;
  // background-color: red;
`;

export interface BoardSquareProps {
  index: number;
  onDrop: (index: number) => void;
  children: any;
}

export let currentIndex = 0;

const move = (index: number) => {
  currentIndex = index;
  console.log("dropped!!!!!!!!!!!1", index);
};

export default ({ index, onDrop, children }: BoardSquareProps) => {
  const [{ isOver }, drop] = useDrop({
    accept: "test",
    // canDrop: () => {
    //   return true;
    // },
    drop: () => {
      onDrop(index);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });
  console.log(1111, isOver);
  // console.log(2222, canDrop);
  console.log(333, children);
  // const black = (x + y) % 2 === 1;

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
      {/* <Square black={black}>{children}</Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />} */}
    </div>
  );
};
