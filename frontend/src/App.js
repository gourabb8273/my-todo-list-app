import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

import NavBar from './components/NavBar/navbar';
import './App.css';
import ToDoList from './components/ToDoList/toDoList';


function App() {

  const isLoggedIn = useSelector(state => state.user.auth)

  if (!isLoggedIn) {
    return (
      <Navigate to="/login" />
    )
  }

  return (
    <div className="main-body__container">
      <NavBar statusButton='Logout' />
      <div className="todo-container__box">
        <ToDoList />
      </div>
    </div>

  );
}

export default App;
