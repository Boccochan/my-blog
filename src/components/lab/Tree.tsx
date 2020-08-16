import React from "react";
import { Tree } from "@src/types";
import Node from "./TreeNode";

type Props = {
  data?: Tree[];
};

const Child = (props: Props) => {
  const data = props.data;

  if (!data) {
    return <div></div>;
  }

  const callback = (key: string) => {
    console.log(key);
  };

  return (
    <div>
      {data.map((tree) => (
        <Node tree={tree} shift={0} callback={callback} />
      ))}
    </div>
  );
};

export default (props: Props) => {
  return <Child data={props.data} />;
};
