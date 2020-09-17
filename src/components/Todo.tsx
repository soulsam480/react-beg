import React from "react";

interface Todo {
  name: string;
  done: boolean;
}

interface Todos {
  data: Array<Todo>;
}

export const Todo: React.FC<Todos> = ({ data }) => {
  return (
    <div>
      <ol>
        {data.map((val) => {
          return (
            <li>
              <span>{val.name}</span>
              <span>{val.done}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
