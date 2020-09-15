import React, { useState, useCallback } from "react";
import Card from "./Card";
import update from "immutability-helper";
import { theme } from "@src/styles/color";

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const Container: React.FC = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        no: 120,
        userStory: "Let's make our future!",
        point: 3,
        project: "Future",
        projectBackgroundColor: theme.colors.purple,
        projectColor: theme.colors.white,
      },
      {
        id: 2,
        no: 121,
        userStory: "I do not know what I should do",
        point: 4,
        project: "Lost children",
        projectBackgroundColor: theme.colors.blue,
        projectColor: theme.colors.white,
      },
      {
        id: 3,
        no: 122,
        userStory: "Heyhey mymy",
        point: 4,
        project: "Neil Young",
        projectBackgroundColor: theme.colors.red,
        projectColor: theme.colors.white,
      },
    ]);

    const moveCard = useCallback(
      (dragIndex: number, hoverIndex: number) => {
        const dragCard = cards[dragIndex];
        setCards(
          update(cards, {
            $splice: [
              [dragIndex, 1],
              [hoverIndex, 0, dragCard],
            ],
          })
        );
      },
      [cards]
    );

    const renderCard = (
      card: {
        id: number;
        no: number;
        userStory: string;
        point: number;
        project: string;
        projectBackgroundColor: string;
        projectColor: string;
      },
      index: number
    ) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          moveCard={moveCard}
          no={card.no}
          userStory={card.userStory}
          point={card.point}
          project={card.project}
          projectBackgroundColor={card.projectBackgroundColor}
          projectColor={card.projectColor}
        />
      );
    };

    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
