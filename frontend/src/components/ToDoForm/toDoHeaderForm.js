import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div className="todolist-header__container">
      <h2>To Do List</h2>

      <form className="todolist-form">
        <input
          className="todolist-form__input"
          type="text"
          placeholder="Add tasks here.."
          value={taskDescription}
          onChange={handleInputChange}
        />
        <Button
          onClick={handleOnSubmit}
          disabled={!isTextEntered}
          className="todolist-form__submit"
        >
          Add
        </Button>
        {/* <FontAwesomeIcon
        className="list-group__icon add-item" pull="left" size="4x" 
        icon={faPlus}
        // onClick={() => handleDeleteItem(taskIndex)}
      ></FontAwesomeIcon> */}
        <Button
          variant="danger"
          disabled={!isListEmpty}
          className="todolist-form__clear"
          onClick={handleClearAll}
        >
          Clear All
        </Button>
      </form>
      <div >
      <input
        className="todolist-form__search"
        type="text"
        value={searchTasks}
        placeholder="Search Here.."
        onChange={handleSearchItem}
      >        
      </input>      
      </div>
      {/* <i class="fa fa-search" aria-hidden="true"></i> */}

       {/* <FontAwesomeIcon
        className="list-group__icon search-item" pull="left" size="3x" 
        icon={faSearch}
        // onClick={() => handleDeleteItem(taskIndex)}
      ></FontAwesomeIcon> */}
    </div>
  );
}

export default ToDoHeaderForm;
