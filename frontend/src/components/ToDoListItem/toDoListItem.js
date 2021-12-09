import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import "./toDoListItem.css";

function ToDoListItem({ taskItem, taskIndex, handleDeleteItem }) {
  return (
    <div className="todolist-task__items" key={taskIndex}>
      <h3>
        {taskIndex + 1 + ".  "} {taskItem.taskTitle}
      </h3>
      <h5>{taskItem.createdDate}</h5>
      <FontAwesomeIcon
        className="list-group__icon"
        icon={faTrashAlt}
        onClick={() => handleDeleteItem(taskIndex)}
      ></FontAwesomeIcon>
    </div>
  );
}

export default ToDoListItem;
