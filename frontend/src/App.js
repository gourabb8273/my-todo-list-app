import { useDispatch, useSelector } from 'react-redux';
// import {useNavigate} from 'react-router-dom';
import {Route, Redirect} from 'react-router-dom';

import NavBar from './components/NavBar/navbar';
import './App.css';
import ToDoList from './components/ToDoList/toDoList';

function App() {

  // const history = useNavigate();
  // console.log(history)
  const isLoggedIn = useSelector(state=> state.user.isLoggedIn);  

  return (    
    <div className="main-body__container">
      <NavBar />
       <div className="todo-container__box">
        <ToDoList />
      </div>
    </div> 
  
  );
}

export default App;
