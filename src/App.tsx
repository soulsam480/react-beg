import React, { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";
import typeTodo from "./models/typeTodo";
function App() {
  const [todos, setTodos] = useState<typeTodo[]>([]);
  const addTodos = (todo: typeTodo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  /*  const setDone = (id: number) => {
    setTodos(todos.slice()[id].done = true)
  }; */

  return (
    <div>
      <Header />
      <Todo data={todos}></Todo>
      <AddTodo giveTodo={addTodos} />
    </div>
  );
}

export default App;
