import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const tasks = TASKS;

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter />
      <NewTaskForm />
      <TaskList key={TASKS.text} tasks={TASKS} />
      <Task />
    </div>
  );
}

export default App;
