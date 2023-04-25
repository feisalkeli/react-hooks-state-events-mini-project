import React from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList({ tasks }) {
  console.log(tasks);
  const myTasks = tasks;
  myTasks.map((x, i) => {
    <ul>
      <li key={i}>
        {x.text}
        {x.category}
      </li>
    </ul>;
  });

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      <Task data={myTasks} />
    </div>
  );
}

export default TaskList;
