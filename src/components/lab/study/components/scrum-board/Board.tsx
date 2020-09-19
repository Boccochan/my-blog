import React, { useState } from "react";
import Layout from "./BoardLayout";
import { DragDropContext } from "react-beautiful-dnd";
import BoardDroppable from "./BoardDroppable";
import { v4 as uuid } from "uuid";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Box = styled.div`
  // position: absolute;
  // width: 100%;
  // height: auto;
  // left: 0;
  // top: 20px;
`;

const Wrapper = styled.div`
  position: relative;
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const Flex = styled.div`
  display: flex;
`;

const itemsFromBackend = [
  { id: uuid(), content: "First task" },
  { id: uuid(), content: "Second task" },
  { id: uuid(), content: "Third task" },
  { id: uuid(), content: "Fourth task" },
  { id: uuid(), content: "Fifth task" },
  { id: uuid(), content: "6 task" },
  { id: uuid(), content: "7 task" },
  { id: uuid(), content: "8 task" },
  { id: uuid(), content: "9 task" },
  { id: uuid(), content: "10 task" },
  { id: uuid(), content: "11 task" },
  { id: uuid(), content: "12 task" },
  { id: uuid(), content: "13 task" },
  { id: uuid(), content: "14 task" },
  { id: uuid(), content: "15 task" },
  { id: uuid(), content: "16 task" },
  { id: uuid(), content: "17 task" },
  { id: uuid(), content: "18 task" },
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend,
  },
  [uuid()]: {
    name: "To do",
    items: [],
  },
  [uuid()]: {
    name: "In Progress",
    items: [],
  },
  [uuid()]: {
    name: "Done",
    items: [],
  },
};

const onDragEnd = (result: any, columns: any, setColumns: any) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

export default () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  let maxLength = 0;

  Object.entries(columns).forEach(([, column]) => {
    if (column.items.length > maxLength) {
      maxLength = column.items.length;
    }
  });

  const height = maxLength * 66;

  return (
    <Container>
      <Box>
        <Wrapper>
          <Layout
            sprint={102}
            description="Improve sql query performance and user experience"
          />

          <Flex>
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                    key={columnId}
                  >
                    <h2>{column.name}</h2>
                    <div style={{ margin: 8 }}>
                      <BoardDroppable
                        column={column}
                        columnId={columnId}
                        height={height}
                      />
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
          </Flex>
        </Wrapper>
      </Box>
    </Container>
  );
};
