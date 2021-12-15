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
import ToDoListHeaderForm from "../ToDoListHeaderForm/toDoListHeaderForm";
import LoadingSpinner from "../LoadingSpinner/loadingSpinner";
import filterToDoListItem from "../../services/filterToDoListItem";
import NoTaskAdded from "../NoTaskAdded/noTaskAdded";
import "../../../src/common.css";

/**
 * To do list body component
 */
function ToDoList() {
  const listApiURL = "http://localhost:8080/api/list";
  const [taskDescription, setTaskDescription] = useState("");
  const [initialTasks, setInitialTasks] = useState(null);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const toDoListItem = useSelector((state) => state.todo.toDoList);

  /**
   *  Fetching initial data
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
   *  Dispatch the updated state to store
   **/
  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(addItem(taskDescription), setTaskDescription(""));
  }

  /**
   *  Change task description to current state
   **/
  function handleInputChange(e) {
    e.preventDefault();
    setTaskDescription(e.target.value);
  }

  /**
   *  Clear all the tasks
   **/
  function handleClearAll(e) {
    e.preventDefault();
    dispatch(removeAll(taskDescription));
  }

  /**
   *  Delete the selected item
   **/
  function handleDeleteItem(deleteTaskIndex) {
    dispatch(deleteItem(deleteTaskIndex));
  }

  /**
   *  Dispatch searched task to filter the store
   **/
  function handleSearchItem(e) {
    e.preventDefault();
    const searchedTask = e.target.value;
    setSearchText(searchedTask);
  }

  return (
    <div>
      <ToDoListHeaderForm
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
