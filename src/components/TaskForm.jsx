import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  // const [taskData, setTask] = useState("");
  // const [tagData, setTagData] = useState("");
  // const [taskStatusData, setTaskStatusData] = useState("");

  const [taskData, setTaskData] = useState({
    name: "",
    status: "todo",
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

  console.log(taskData.tags);

  const selectedTags = (tag) => {
    return taskData.tags.some((item) => tag === item);
  };

  // const handleTaskStatusData = (event) => {
  //   setTaskStatusData(event.target.value);
  // };

  const handleSubmitDData = (event) => {
    event.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmitDData}>
        <input
          type="text"
          name="name"
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
              className="task_status"
              onChange={handleTaskData}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
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
