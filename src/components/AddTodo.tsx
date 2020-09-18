import React, { useState } from "react";
import typeTodo from "../models/typeTodo";

interface Props {
  giveTodo: (todo: typeTodo) => void;
}

export const AddTodo: React.FC<Props> = ({ giveTodo }) => {
  const [todo, setName] = useState<typeTodo>({
    name: "",
    done: null,
  });

  return (
    <div>
      <input
        autoFocus
        type="text"
        value={todo.name}
        onChange={(e) => setName({ name: e.target.value, done: false })}
        placeholder={"ADD A TODO!!!"}
      />
      <br />
      <br />
      <button
        onClick={() => {
          giveTodo(todo);
          setName({ name: "", done: null });
        }}
      >
        Click me !!
      </button>
    </div>
  );
};
