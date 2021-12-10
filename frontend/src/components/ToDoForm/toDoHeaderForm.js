import React from "react";
import { Button } from "react-bootstrap";

import "./toDoHeaderForm.css";
import ClearAllModal from "../ClearAllModal/clearAllModal";

/**
 * TO DO LIST HEADER FORM COMPONENT
 */
function ToDoHeaderForm({
  searchTasks,
  handleSearchItem,
  handleOnSubmit,
  taskDescription,
  handleInputChange,
  handleClearAll,
  isListEmpty,
  isTextEntered,
}) {
  return (
    <div className="todolist-header__container">
      <h2>To Do List</h2>
      <div>
        <input
          disabled={!isListEmpty}
          className="todolist-form__search"
          type="text"
          value={searchTasks}
          placeholder="Search Here.."
          onChange={handleSearchItem}
        ></input>
      </div>
      <form className="todolist-form">
        <input
          className="todolist-form__input"
          type="text"
          placeholder="Add tasks here.."
          value={taskDescription}
          onChange={handleInputChange}
        ></input>
        <Button
          onClick={handleOnSubmit}
          disabled={!isTextEntered}
          className="todolist-form__submit"
        >
          Add
        </Button>
        <ClearAllModal
          isListEmpty={isListEmpty}
          handleClearAll={handleClearAll}
        />
      </form>
    </div>
  );
}

export default ToDoHeaderForm;
