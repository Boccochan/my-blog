import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

type Props = {
  column: any;
  columnId: string;
  height: number;
};

export default ({ column, columnId, height }: Props) => {
  return (
    <Droppable droppableId={columnId} key={columnId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              background: snapshot.isDraggingOver ? "lightblue" : "lightgrey",
              padding: 4,
              width: 250,
              minHeight: height,
            }}
          >
            {column.items.map((item: any, index: number) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          userSelect: "none",
                          padding: 16,
                          margin: "0 0 8px 0",
                          minHeight: "50px",
                          backgroundColor: snapshot.isDragging
                            ? "#263B4A"
                            : "#456C86",
                          color: "white",
                          ...provided.draggableProps.style,
                        }}
                      >
                        {item.content}
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
