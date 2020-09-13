import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sample from "./Sample";

export default () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Sample />
    </DndProvider>
  );
};

// import styled from "styled-components";
// import Layout from "./BoardLayout";
// import BoxTask from "./BoxTask";
// import { theme } from "@src/styles/color";

// const Wrapper = styled.div`
//   display: flex;
// `;

// export default () => {
//   const width = 300;

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <Layout
//         sprint={102}
//         description="Improve sql query performance and user experience"
//       />
//       <Wrapper>
//         <BoxTask title="User Story" color={theme.colors.purple} width={width} />
//         <BoxTask
//           title="In Progress"
//           color={theme.colors.yellow}
//           width={width}
//         />
//         <BoxTask title="Review" color={theme.colors.red} width={width} />
//         <BoxTask title="Done" color={theme.colors.green} width={width} />
//       </Wrapper>
//     </DndProvider>
//   );
// };
