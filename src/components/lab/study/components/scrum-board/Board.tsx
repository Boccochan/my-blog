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
import UserStory from "./BoardUserStory";
import { theme } from "@src/styles/color";

const Wrapper = styled.div`
  display: flex;
`;

type Task = {
  title: string;
  color: string;
  width: number;
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
    { title: "User Story", color: theme.colors.purple, width },
    { title: "In Progress", color: theme.colors.yellow, width },
    { title: "Review", color: theme.colors.red, width },
    { title: "Done", color: theme.colors.green, width },
  ] as Task[];

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <Layout
          sprint={102}
          description="Improve sql query performance and user experience"
        />
        <Wrapper>
          {taskList.map((task, index) => {
            return (
              <TaskList
                title={task.title}
                color={task.color}
                width={task.width}
                index={index}
                onDrop={(index: number) => setSelected(index)}
                task={SelectedTask(index === selected)}
              />
            );
          })}
        </Wrapper>
      </div>
    </DndProvider>
  );
};
