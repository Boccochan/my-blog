import React from "react";
import { DragSource } from "react-dnd";

DragSource(
  "BLOCK",
  {
    beginDrag(props) {
      console.log("beginDrag");
      return props;
    },
  },
  (connect) => {
    return {
      connectDragSource: connect.dragSource(),
    };
  }
)(
  class extends React.Component {
    render() {
      return this.props.connectDargSource(
        <div style={{ style: "orange", width: 100, height: 100 }} />
      );
    }
  }
);
