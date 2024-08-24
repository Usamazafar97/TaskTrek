import React from "react";
import Tag from "./Tag";
import DeleteIcon from "../assets/delete.png";
import "./TaskCard.css";

const TaskCard = ({ text, tags, handleDelete, index }) => {
  return (
    <article className="task_card">
      <p className="task_text">{text}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {tags.map((tag, index) => (
            <Tag tagName={tag} key={index} selected={true} />
          ))}
        </div>
        <div className="task_delete">
          <img
            className="delete_icon"
            src={DeleteIcon}
            onClick={() => handleDelete(index)}
          ></img>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
