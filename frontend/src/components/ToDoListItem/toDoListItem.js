import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Badge } from "react-bootstrap";

import "./toDoListItem.css";

/**
 * LIST TO DO ITEM COMPONENT
 */
function ToDoListItem({ taskItem, taskIndex, handleDeleteItem }) {
  return (
    <div className="todolist-items" key={taskIndex}>
      <div className="todolist-item__title">
        <h3>
          {taskIndex + 1 + ".  "} {taskItem.taskTitle}
        </h3>
      </div>
      <div className="todolist-item__date">
        <h5>
          <Badge bg="success">{taskItem.createdDate}</Badge>
        </h5>
      </div>
      <div className="todolist-item__delete">
        <FontAwesomeIcon
          className="list-group__icon"
          icon={faTrashAlt}
          onClick={() => handleDeleteItem(taskIndex)}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default ToDoListItem;
