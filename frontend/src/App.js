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
    <ToDoList/>
    </div>
    </div>
  );
}

export default App;
