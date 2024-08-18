import React from "react";
import "./App.css";
import TaskForm from "./components/taskForm";
import TaskColumn from "./components/TaskColumn";
import Todo from "./assets/direct-hit.png";
import Doing from "./assets/glowing-star.png";
import Done from "./assets/check-mark-button.png";

const App = () => {
  return (
    <div className="app">
      <TaskForm />
      <main className="app_main">
        <TaskColumn columnName="To do" imageName={Todo} />
        <TaskColumn columnName="Doing" imageName={Doing} />
        <TaskColumn columnName="Done" imageName={Done} />
      </main>
    </div>
  );
};

export default App;
