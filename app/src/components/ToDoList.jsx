import React from "react";

import ToDoCard from "./ToDoCard";

export default function ToDoList(props) {
  const { todos } = props;
  return (
    <div className="container mx-auto p-4">
      <ul className="flex flex-col gap-4">
        {todos.map((todo, todoIndex) => (
          <ToDoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </ToDoCard>
        ))}
      </ul>
    </div>
  );
}
