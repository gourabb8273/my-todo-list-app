import logo from './logo.svg';
import './App.css';
import {useDispatch} from 'react-redux';
import ToDoList from './components/ToDoList/todoList';
function App() {

  const dispatch = useDispatch()

  return (
    <>
    <h1>Add your Daily Task</h1>
    <ToDoList/>
    </>
  );
}

export default App;
