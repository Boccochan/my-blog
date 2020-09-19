import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import UserStory, { StoryType } from "./UserStory";

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
                      <UserStory
                        provided={provided}
                        snapshot={snapshot}
                        item={item}
                      />
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
