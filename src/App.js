import logo from './logo.svg';
import './App.css';
import {useDispatch} from 'react-redux';
import ToDoList from './components/ToDoList/toDoList';
function App() {

  const dispatch = useDispatch()

  return (
    <div className="todo-container__box">
    <h1>What's the plan for today</h1>
    <ToDoList/>
    </div>
  );
}

export default App;
