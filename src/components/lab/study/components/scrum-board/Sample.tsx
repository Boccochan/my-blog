import React, { useState } from "react";
import SampleDrag from "./SampleDrag";
import SampleDrop from "./SampleDrop";

const SampleChild = (props: { selected: boolean }) => {
  if (props.selected) {
    return <SampleDrag />;
  } else {
    return null;
  }
};

export default () => {
  const [selected, setSelect] = useState(0);
  const indexs = [0, 1];

  return (
    <React.Fragment>
      {indexs.map((index) => {
        return (
          <SampleDrop index={index} onDrop={() => setSelect(index)}>
            <SampleChild selected={selected === index} />
          </SampleDrop>
        );
      })}
    </React.Fragment>
  );
};
