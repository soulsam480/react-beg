import React from "react";
import typeTodo from "../models/typeTodo";

interface Todos {
  data: Array<typeTodo>;
}

export const Todo: React.FC<Todos> = ({ data }) => {
  return (
    <div>
      <ol>
        {data.map((val, index) => {
          return (
            <li key={index} className={`${val.done ? "done" : ""} `}>
              <span>{val.name}</span>
              <span>{val.done}</span>
              <button
                onClick={() => {
                  val.done = true;
                  console.log(val.done);
                }}
              >
                Done
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
