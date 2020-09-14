import React, { useState } from "react";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Board from "./Board";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
`;

type Menu = {
  name: string;
  component: () => JSX.Element;
};

const NotSupportYet = () => {
  return <div>Not support yet</div>;
};

const menuList = [
  { name: "Board", component: Board },
  { name: "Progress", component: NotSupportYet },
  { name: "Ready", component: NotSupportYet },
  { name: "Backlog", component: NotSupportYet },
  { name: "Productivity", component: NotSupportYet },
  { name: "Bug", component: NotSupportYet },
  { name: "Released", component: NotSupportYet },
  { name: "Log", component: NotSupportYet },
] as Menu[];

const SelectedComponent = (props: { index: number }) => {
  const Component = menuList[props.index].component;

  return <Component />;
};

export default () => {
  const [selected, setSelect] = useState(0);

  const mList = menuList.map((menu) => {
    return { name: menu.name, callback: (index: number) => setSelect(index) };
  });

  return (
    <Wrapper>
      <Sidebar menuList={mList} />
      <SelectedComponent index={selected} />
    </Wrapper>
  );
};
