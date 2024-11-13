import { useState } from "react";

export default function ToDoInput(props) {
  const { handleAddTodos, todoValue, setTodoValue } = props;

  return (
    <header className="flex gap-4 p-4 container mx-auto">
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        className="p-4 bg-gray-200 rounded-xl w-full"
        type="text"
        placeholder="Enter to-do..."
      />
      <button
        onClick={() => {
          if (!todoValue) {
            return;
          } else {
            handleAddTodos(todoValue);
            setTodoValue("");
          }
        }}
        className="bg-black text-white py-4 px-8 rounded-xl"
      >
        Add
      </button>
    </header>
  );
}
