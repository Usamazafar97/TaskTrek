import React, { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (taskIndex) => {
    const newFilteredTask = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newFilteredTask);
  };

  return (
    <div className="app">
      <TaskForm setTasks={setTasks} />
      <main className="app_main">
        <TaskColumn
          columnName="To do"
          imageName={Todo}
          tasks={tasks}
          status="To do"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName="Doing"
          imageName={Doing}
          tasks={tasks}
          status="Doing"
          handleDelete={handleDelete}
        />
        <TaskColumn
          columnName="Done"
          imageName={Done}
          tasks={tasks}
          status="Done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
};

export default App;
