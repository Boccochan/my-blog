import React from "react";
import { Tree } from "@src/types";
import Node from "./TreeNode";

type Props = {
  data?: Tree[];
  callback: (key: string) => void;
};

const Child = (props: Props) => {
  const data = props.data;

  if (!data) {
    return <div></div>;
  }

  const callback = (key: string) => {
    console.log(key);
    props.callback(key);
  };

  return (
    <div>
      {data.map((tree, index) => (
        <Node tree={tree} shift={0} callback={callback} key={index} />
      ))}
    </div>
  );
};

export default (props: Props) => {
  return <Child data={props.data} callback={props.callback} />;
};
