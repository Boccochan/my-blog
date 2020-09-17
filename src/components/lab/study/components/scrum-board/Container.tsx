// import React, { useState, useCallback } from "react";
// import Card from "./Card";
// import update from "immutability-helper";
// import { theme } from "@src/styles/color";

// const style = {
//   width: 400,
// };

// export interface Item {
//   id: number;
//   text: string;
// }

// export interface ContainerState {
//   cards: Item[];
// }

// export const Container: React.FC = () => {
//   {
//     const [cards, setCards] = useState([
//       {
//         id: 1,
//         no: 120,
//         userStory: "Let's make our future!",
//         point: 3,
//         project: "Future",
//         projectBackgroundColor: theme.colors.purple,
//         projectColor: theme.colors.white,
//       },
//       {
//         id: 2,
//         no: 121,
//         userStory: "I do not know what I should do",
//         point: 4,
//         project: "Lost children",
//         projectBackgroundColor: theme.colors.blue,
//         projectColor: theme.colors.white,
//       },
//       {
//         id: 3,
//         no: 122,
//         userStory: "Heyhey mymy",
//         point: 4,
//         project: "Neil Young",
//         projectBackgroundColor: theme.colors.red,
//         projectColor: theme.colors.white,
//       },
//     ]);

//     const moveCard = useCallback(
//       (dragIndex: number, hoverIndex: number) => {
//         const dragCard = cards[dragIndex];
//         setCards(
//           update(cards, {
//             $splice: [
//               [dragIndex, 1],
//               [hoverIndex, 0, dragCard],
//             ],
//           })
//         );
//       },
//       [cards]
//     );

//     const renderCard = (
//       card: {
//         id: number;
//         no: number;
//         userStory: string;
//         point: number;
//         project: string;
//         projectBackgroundColor: string;
//         projectColor: string;
//       },
//       index: number
//     ) => {
//       return (
//         <Card
//           key={card.id}
//           index={index}
//           id={card.id}
//           moveCard={moveCard}
//           no={card.no}
//           userStory={card.userStory}
//           point={card.point}
//           project={card.project}
//           projectBackgroundColor={card.projectBackgroundColor}
//           projectColor={card.projectColor}
//         />
//       );
//     };

//     return (
//       <>
//         <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
//       </>
//     );
//   }
// };

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// fake data generator
const getItems = (count: any, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

// a little function to help us with reordering the result
const reorder = (list: any, startIndex: any, endIndex: any) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (
  source: any,
  destination: any,
  droppableSource: { index: number; droppableId: number },
  droppableDestination: { index: number; droppableId: number }
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = [] as any[];
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const grid = 8;

const getItemStyle = (isDragging: any, draggableStyle: any) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver: any) => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250,
});

class Container extends Component {
  state = {
    items: getItems(10),
    selected: getItems(5, 10),
  };

  /**
   * A semi-generic way to handle multiple lists. Matches
   * the IDs of the droppable container to the names of the
   * source arrays stored in the state.
   */
  id2List = {
    droppable: "items",
    droppable2: "selected",
  };

  getList = (id: number) => this.state[this.id2List[id]];

  onDragEnd = (result) => {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === "droppable2") {
        state = { selected: items };
      }

      this.setState(state);
    } else {
      const result = move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="droppable2">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.selected.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

// Put the things into the DOM!
ReactDOM.render(<App />, document.getElementById("root"));
