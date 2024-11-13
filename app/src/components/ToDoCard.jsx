import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function ToDoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  return (
    <li className="flex items-center gap-8 justify-between">
      {children}
      <span className="flex items-center gap-4">
        <button
          onClick={() => {
            handleEditTodo(index);
          }}
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </span>
    </li>
  );
}
