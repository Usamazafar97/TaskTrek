import React, { useState } from "react"; // useState -> Hook (functions to help converting functional components
// to class components)

function CreateTodo(params) {
  const [count, setCount] = useState(1); // 0, default value
  const [newTitle, setTitle] = useState("Write title here");

  const tasks = ["Task 1", "Task 2", "Task 4"];

  //   function checkIfEmpty() {
  //     return count != 0 ? `Tasks : ${count}` : "No tasks available";
  //   }

  const onClickButton = () => {
    setCount(count + 1);
    checkIfEmpty();
    console.log("added");
  };

  const handleTextChanged = (event) => {
    console.log(event.target.value);

    setTitle(event.target.value);
  };

  //   function setDisability() {
  //     return count != 0 ? false : true;
  //   }

  return (
    <React.Fragment>
      <h1>Title : {newTitle.length == 0 ? "Write something" : newTitle}</h1>
      <h2>Tasks : {count}</h2>
      <input onChange={handleTextChanged}></input>
      {/* <h1>{checkIfEmpty()}</h1> */}
      {/* <button onClick={onClickButton} disabled={setDisability()}> */}
      <button onClick={onClickButton}>Add me</button>

      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default CreateTodo;
