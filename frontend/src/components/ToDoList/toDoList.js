import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import {
  addItem,
  removeAll,
  deleteItem,
  getItem,
} from "../../store/slices/toDoSlice";
import ToDoListItem from "../ToDoListItem/toDoListItem";
import ToDoHeaderForm from "../ToDoHeaderForm/toDoHeaderForm";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import filterToDoListItem from "../../services/filterToDoListItem";
import NoTaskAdded from "../NoTaskAdded/noTaskAdded";

/**
 * TO DO LIST BODY COMPONENT 
 */
function ToDoList() {
  const listApiURL = "http://localhost:8080/api/list";
  const [taskDescription, setTaskDescription] = useState("");
  const [initialTasks, setInitialTasks] = useState(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const toDoListItem = useSelector((state) => state.todo.toDoList);

  /**
   *  FETCHING INITIAL DATA
   */
  useEffect(() => {
    axios
      .get(listApiURL)
      .then((response) => {
        setInitialTasks(response.data);
        dispatch(getItem(response.data.dummyData.toDoList));
      })
      .catch((err) => console.log(err));
  }, []);

  /**
   * ACTION: DISPATCH THE UPDATED STATE TO STORE
   **/
  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(addItem(taskDescription), setTaskDescription(""));
  }

  /**
   * ACTION: CHANGE THE STATE OF CURRENT STATE
   **/
  function handleInputChange(e) {
    e.preventDefault();
    setTaskDescription(e.target.value);
  }

  /**
   * ACTION: CLEAR ALL THE TASKS
   **/
  function handleClearAll(e) {
    e.preventDefault();
    dispatch(removeAll(taskDescription));
  }

  /**
   * ACTION: DELETE THE SELECTED ITEM
   **/
  function handleDeleteItem(deleteTaskIndex) {    
    dispatch(deleteItem(deleteTaskIndex));
  }

  /**
   * ACTION: FILTER LIST ITEM DATA AND SET NEW STATE
   **/
  function handleSearchItem(e) {
    e.preventDefault();
    const searchedTask = e.target.value;
    setSearchText(searchedTask);
  }

  return (
    <div>
      <ToDoHeaderForm
        taskDescription={taskDescription}
        searchText={searchText}
        handleInputChange={handleInputChange}
        handleOnSubmit={handleOnSubmit}
        handleSearchItem={handleSearchItem}
        handleClearAll={handleClearAll}
        isListEmpty={!!toDoListItem.length}
        isTextEntered={!!taskDescription.length}
      />
      <div className="todolist-container">
        {initialTasks ? (
          !!toDoListItem.length ? (
            filterToDoListItem(toDoListItem, searchText).map(
              (taskItem, taskIndex) => {
                return (
                  <ToDoListItem
                    key={taskIndex}
                    taskIndex={taskIndex}
                    taskItem={taskItem}
                    handleDeleteItem={handleDeleteItem}
                  />
                );
              }
            )
          ) : (
            <NoTaskAdded />
          )
        ) : (
          <LoadingSpinner />
        )}
      </div>
    </div>
  );
}

export default ToDoList;
