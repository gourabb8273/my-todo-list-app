import {useDispatch} from 'react-redux';

import Navbar from './components/NavBar/navbar';
import './App.css';
import ToDoList from './components/ToDoList/toDoList';
function App() {

  const dispatch = useDispatch()

  return (
    <div className="main-body__container">
      <Navbar/>    
    <div className="todo-container__box">
    {/* <h1>What's the plan for today</h1> */}
    <ToDoList/>
    </div>
    </div>
  );
}

export default App;
