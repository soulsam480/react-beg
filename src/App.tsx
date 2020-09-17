import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
const todos: Array<{ name: string; done: boolean }> = [
  {
    name: "yolo",
    done: false,
  },
  {
    name: "yolo2",
    done: true,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Todo data={todos}></Todo>
    </div>
  );
}

export default App;
