import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Card from "./Card.jsx";
import CreateTodo from "./CreateTodo.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CreateTodo />
  </StrictMode>
);
