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
import LoadingSpinner from "../LoadingSpinner/loadingSpinner";
import filterToDoListItem from "../../services/filterToDoListItem";
import NoTaskAdded from "../NoTaskAdded/noTaskAdded";
import "./toDoList.css";

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
   *  DISPATCH THE UPDATED STATE TO STORE
   **/
  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(addItem(taskDescription), setTaskDescription(""));
  }

  /**
   *  CHANGE THE STATE OF CURRENT STATE
   **/
  function handleInputChange(e) {
    e.preventDefault();
    setTaskDescription(e.target.value);
  }

  /**
   *  CLEAR ALL THE TASKS
   **/
  function handleClearAll(e) {
    e.preventDefault();
    dispatch(removeAll(taskDescription));
  }

  /**
   *  DELETE THE SELECTED ITEM
   **/
  function handleDeleteItem(deleteTaskIndex) {
    dispatch(deleteItem(deleteTaskIndex));
  }

  /**
   *  FILTER LIST ITEM DATA AND SET NEW STATE
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
