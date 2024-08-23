import React from "react";
import "./Tag.css";

const Tag = ({ tagName, handleTags, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4c8" },
    Javascript: { backgroundColor: "#ffd12c" },
    React: { backgroundColor: "#4adafc" },
    Default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      style={selected ? tagStyle[tagName] : tagStyle.Default}
      type="button"
      className="tag"
      onClick={() => {
        handleTags(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Tag;
