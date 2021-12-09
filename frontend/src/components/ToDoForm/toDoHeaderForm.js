import React from "react";

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
}) {
  return (
    <div>
      <h2>To Do List</h2>
      <input
        className="todolist-form__search"
        type="text"
        value={searchTasks}
        placeholder="Search Here.."
        onChange={handleSearchItem}
      />
      <form className="todolist-form" onSubmit={handleOnSubmit}>
        <input
          className="todolist-form__input"
          type="text"
          placeholder="Add tasks here.."
          value={taskDescription}
          onChange={handleInputChange}
        />
        <button className="todolist-form__submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoHeaderForm;
