import React from "react";

function Task({ data }) {
  console.log(data);

  return (
    <div className="task">
      <div className="label"></div>
      <div className="text"></div>
      {/* //<button className="delete">X</button> */}
    </div>
  );
}

export default Task;
