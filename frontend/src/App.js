import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

import NavBar from "./components/NavBar/navbar";
import "./App.css";
import ToDoList from "./components/ToDoList/toDoList";

function App() {
  const buttonStatus = "Logout";  
  const isLoggedIn = Cookies.get("jwtAuth");
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="main-body__container">
      <NavBar
        buttonStatus={buttonStatus}
        shouldNavBarTitleRender
      />
      <div className="todo-container__box">
        <ToDoList />
      </div>
    </div>
  );
}

export default App;
