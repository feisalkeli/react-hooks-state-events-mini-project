import React from "react";

function Task(data) {
  console.log(data);
  const { task } = data;
  console.log(task);
  return (
    <div className="task">
      <div className="label"></div>
      <div className="text"></div>
      {/* //<button className="delete">X</button> */}
    </div>
  );
}

export default Task;
