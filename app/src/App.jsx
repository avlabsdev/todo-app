import { useState, useEffect } from "react";

import ToDoList from "./components/ToDoList";
import ToDoInput from "./components/ToDoInput";

// fonts
import "@fontsource/figtree"; // Defaults to weight 400
import "@fontsource/figtree/300.css"; // Specify weight
import "@fontsource/figtree/300-italic.css"; // Specify weight and style
import "@fontsource/figtree/400.css"; // Specify weight
import "@fontsource/figtree/400-italic.css"; // Specify weight and style
import "@fontsource/figtree/500.css"; // Specify weight
import "@fontsource/figtree/500-italic.css"; // Specify weight and style
import "@fontsource/figtree/600.css"; // Specify weight
import "@fontsource/figtree/600-italic.css"; // Specify weight and style
import "@fontsource/figtree/700.css"; // Specify weight
import "@fontsource/figtree/700-italic.css"; // Specify weight and style
import "@fontsource/figtree/800.css"; // Specify weight
import "@fontsource/figtree/800-italic.css"; // Specify weight and style
import "@fontsource/figtree/900.css"; // Specify weight
import "@fontsource/figtree/900-italic.css"; // Specify weight and style

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);
  }, []);

  return (
    <>
      <h1 className="container mx-auto p-4 text-xl font-bold">
        To-Do App by AV Labs
      </h1>
      <ToDoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodos}
      />
      <ToDoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}
