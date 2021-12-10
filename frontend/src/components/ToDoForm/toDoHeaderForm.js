import React from "react";
import { Button } from "react-bootstrap";

import "./toDoHeaderForm.css";

/**
 * TO DO HEADER COMPONENT
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
  const searchIconStyle = {
    color: "gray",
    fontSize: "2.7rem",
    top: "38%",
    width: "41px",
    height: "47px",
    margin: "3px 0 0px 0",
    left: "37%",
    padding: "4px",
    background: "#F0F0F0",
    color: "gray",
    position: "absolute",
  };
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
        <Button
          variant="danger"
          disabled={!isListEmpty}
          className="todolist-form__clear"
          onClick={handleClearAll}
        >
          Clear All
        </Button>
      </form>
    </div>
  );
}

export default ToDoHeaderForm;
