import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    name: "",
    status: "To do",
    tags: [],
  });

  const handleTaskData = (event) => {
    const { name, value } = event.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleTags = (tag) => {
    // logic for checking if the tag is already in the array or not
    if (taskData.tags.some((item) => tag === item)) {
      const filteredTags = taskData.tags.filter((item) => tag !== item);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  // console.log(taskData.tags);

  const selectedTags = (tag) => {
    return taskData.tags.some((item) => tag === item);
  };

  // const handleTaskStatusData = (event) => {
  //   setTaskStatusData(event.target.value);
  // };

  const handleSubmitDData = (event) => {
    event.preventDefault();
    // console.log(taskData);

    setTasks((prev) => {
      return [...prev, taskData];
    });

    // reset the UI to normal
    setTaskData({
      name: "",
      status: "To do",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmitDData}>
        <input
          type="text"
          name="name"
          value={taskData.name}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleTaskData}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              handleTags={handleTags}
              selected={selectedTags("HTML")}
            />
            <Tag
              tagName="CSS"
              handleTags={handleTags}
              selected={selectedTags("CSS")}
            />
            <Tag
              tagName="Javascript"
              handleTags={handleTags}
              selected={selectedTags("Javascript")}
            />
            <Tag
              tagName="React"
              handleTags={handleTags}
              selected={selectedTags("React")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleTaskData}
            >
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>

            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
