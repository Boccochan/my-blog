import React from "react";
import { useDrag } from "react-dnd";

const knightStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

export default () => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "test" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        Drag
      </div>
    </>
  );
};
