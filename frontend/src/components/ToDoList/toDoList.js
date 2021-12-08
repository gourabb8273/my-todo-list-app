import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import {
  addItem,
  removeAll,
  deleteItem,
  getItem,
} from "../../store/slices/toDoSlice";
import "./toDoList.css";
import ToDoListItem from "../ToDoListItem/toDoListItem";
import ToDoForm from "../ToDoForm/toDoForm";
import LoadingSpinner from "../Spinner/LoadingSpinner";

/**
 * TO DO LIST BODY COMPONENT 
 */
function ToDoList(props) {
  const apiURL = "http://localhost:8080/api/list";
  const dispatch = useDispatch();
  const [taskDescription, setTaskDescription] = useState("");
  const [initialTasks, setInitialTasks] = useState(null);
  const [searchTasks, setSearchTasks] = useState("");
  const toDoistItem = useSelector((state) => state.todo.toDoList);

  /**
   *  FETCHING INITIAL DATA
   */
  useEffect(() => {
    axios
      .get(apiURL)
      .then((response) => {
        setInitialTasks(response.data);
        dispatch(getItem(response.data.dummyData));
      })
      .catch((err) => console.log(err));
  }, []);

  /**
   * ACTION: DISPATCH THE UPDATED STATE TO STORE
   **/
  function handleOnSubmit(e) {
    e.preventDefault();
    //check taskDescription is valid or not
    if (taskDescription.length)
      dispatch(addItem(taskDescription), setTaskDescription(""));
    else alert("Enter valid task");
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
  function handleDeleteItem(deleteTask) {
    let newToDo = toDoistItem.filter((listItem, listIndex) => listIndex !== deleteTask);
    dispatch(deleteItem({ toDoList: newToDo }));    
  }

  /**
    * ACTION: FILTER LIST ITEM DATA AND SET NEW STATE
    **/
  function handleSearchItem(e) {
    e.preventDefault();
    const searchedTask = e.target.value;
    setSearchTasks(searchedTask);
  }

  return (
    <div>
      <ToDoForm
        taskDescription={taskDescription}
        searchTasks={searchTasks}
        handleInputChange={handleInputChange}
        handleOnSubmit={handleOnSubmit}
        handleSearchItem={handleSearchItem}
      />

      {initialTasks ? (
        toDoistItem
          .filter((taskItem) =>
          taskItem.taskTitle.toLowerCase().includes(searchTasks.toLowerCase())
          )
          .map((taskItem, taskIndex) => {
            return (
              <ToDoListItem
                key={taskIndex}
                taskIndex={taskIndex}
                taskItem={taskItem}
                handleDeleteItem={handleDeleteItem}
              />
            );
          })
      ) : (
        <LoadingSpinner />
      )}

      <Button
        variant="danger"
        disabled={!toDoistItem.length}
        className="todolist-form__clear"
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </div>
  );
}

export default ToDoList;
