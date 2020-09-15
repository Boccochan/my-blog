import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import Sample from "./Sample";
import SampleDrage from "./SampleDrag";

// export default () => {
//   return (
//     <DndProvider backend={HTML5Backend}>
//       <Sample />
//     </DndProvider>
//   );
// };

import styled from "styled-components";
import Layout from "./BoardLayout";
import TaskList from "./BoardTaskList";
import UserStory, { UserStoryInfo } from "./BoardUserStory";
import { theme } from "@src/styles/color";
import { Container } from "./Container";

const Wrapper = styled.div`
  display: flex;
`;

type Task = {
  title: string;
  color: string;
  width: number;
  userStories: UserStoryInfo[];
};

const SelectedTask = (selected: boolean) => {
  if (selected) {
    console.log("Selectedd !!!!!!!!!!!!!");
    return (
      <UserStory
        no={120}
        userStory="Let's make hello world by serverless"
        point={3}
        project="scrum board"
        projectBackgroundColor={theme.colors.green}
        projectColor={theme.colors.white}
      />
    );
  }
  return null;
};

export default () => {
  const [selected, setSelected] = useState(0);
  const width = 300;
  const taskList = [
    {
      title: "User Story",
      color: theme.colors.purple,
      width,
      userStories: [
        {
          no: 120,
          userStory: "Let's make our future!",
          point: 3,
          project: "Future",
          projectBackgroundColor: theme.colors.purple,
          projectColor: theme.colors.white,
        },
        {
          no: 121,
          userStory: "I do not know what I should do",
          point: 4,
          project: "Lost children",
          projectBackgroundColor: theme.colors.blue,
          projectColor: theme.colors.white,
        },
        {
          no: 122,
          userStory: "Heyhey mymy",
          point: 4,
          project: "Neil Young",
          projectBackgroundColor: theme.colors.red,
          projectColor: theme.colors.white,
        },
      ],
    },
    {
      title: "In Progress",
      color: theme.colors.yellow,
      width,
      userStories: [],
    },
    { title: "Review", color: theme.colors.red, width, userStories: [] },
    { title: "Done", color: theme.colors.green, width, userStories: [] },
  ] as Task[];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Layout
          sprint={102}
          description="Improve sql query performance and user experience"
        />
        <Wrapper>
          {/* {taskList.map((task, index) => {
            return (
              <TaskList
                title={task.title}
                color={task.color}
                width={task.width}
                index={index}
                onDrop={(index: number) => setSelected(index)}
                userStories={task.userStories}
              />
            );
          })} */}
          <Container />
        </Wrapper>
      </div>
    </DndProvider>
  );
};
