import React from "react";
import { Button } from "react-bootstrap";

import "./toDoHeaderForm.css";
import ModalDialog from "../ModalDialog/modalDialog";

/**
 * TO DO LIST HEADER FORM COMPONENT
 */
function ToDoHeaderForm({
  searchText,
  handleSearchItem,
  handleOnSubmit,
  taskDescription,
  handleInputChange,
  handleClearAll,
  isListEmpty,
  isTextEntered,
}) {
  // ASSIGNING PROPS DATA FOR CLEAR ALL LIST MODAL
  const modalVariant = "danger";
  const modalName = "Clear All";
  const modalBodyTitle = "Do you really want to clear all?";
  const modalBodyDescription = "This will remove all your tasks";
  const modalCloseName = "Close";
  const modalActionName = "Clear All";
  const modalButtonBodyStyle = "todolist-clear";
  const modalButtonStyle = "todolist-clear__button";

  return (
    <div className="todolist-header__container">
      <h2>To Do List</h2>
      <div>
        <input
          disabled={!isListEmpty}
          className="todolist-search"
          type="text"
          value={searchText}
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
        <ModalDialog
          shouldModalEnable={isListEmpty}
          modalVariant={modalVariant}
          modalName={modalName}
          modalBodyTitle={modalBodyTitle}
          modalBodyDescription={modalBodyDescription}
          modalCloseName={modalCloseName}
          modalActionName={modalActionName}
          handleModalAction={handleClearAll}
          modalButtonBodyStyle={modalButtonBodyStyle}
          modalButtonStyle={modalButtonStyle}
        />
      </form>
    </div>
  );
}

export default ToDoHeaderForm;
