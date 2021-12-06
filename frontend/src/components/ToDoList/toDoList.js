import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { addItem, removeAll, deleteItem, getItem } from '../../store/slices/toDoSlice';
import "./toDoList.css";
import ToDoListItem from '../ToDoListItem/toDoListItem';
import ToDoForm from '../ToDoForm/toDoForm';
import LoadingSpinner from '../Spinner/LoadingSpinner';

function ToDoList(props) {

    const dispatch = useDispatch();
    const [state, setState] = useState('');
    const [initialData, setInitialData] = useState(null)
    const [findValue, setFindValue] = useState('')

    //fetching Inital Data From Backend API

    useEffect(() => {
        fetch('http://localhost:8080/api/list')
            .then(res => res.text())
            .then(data => {
                setInitialData(data);
                dispatch(getItem(JSON.parse(data).dummyData))
            })
            .catch(err => console.log(err))
    }, [])

    const list = useSelector((state) => state.todo)

    /**
     * ACTION: Dispatch the updated state to store
     **/
    function handleOnSubmit(e) {
        e.preventDefault();
        //check state is valid or not
        if (state.length)
            dispatch(addItem(state), setState(''))
        else alert("Enter valid task");
    }

    /**
     * ACTION: Change the state of current state
     **/
    function handleInputChange(e) {
        e.preventDefault();
        console.log(e.target.value)
        setState(e.target.value)
    }

    /**
     * ACTION: Clear all the tasks
     **/
    function handleClearAll(e) {
        e.preventDefault();
        dispatch(removeAll(state))

    }

    /**
    * ACTION: Delete the selected Item
    **/
    function handleDeleteItem(key) {
        let newToDo = list.toDoList.filter((val, ind) => ind !== key)
        dispatch(deleteItem({ toDoList: newToDo }))
        // dispatch(deleteItem(key))
    }

    /**
    // ACTION: Set state to filter item list data 
    **/
    function handleFindItem(e) {
        e.preventDefault();
        let findKey = e.target.value;
        setFindValue(findKey)
    }

    return (
        <div>
            <ToDoForm
                state={state}
                findValue={findValue}
                handleInputChange={handleInputChange}
                handleOnSubmit={handleOnSubmit}
                handleFindItem={handleFindItem}
            />

            {initialData ?
                list.toDoList.filter(el => el.data.toLowerCase().includes(findValue.toLowerCase()))
                    .map((item, i) => {
                        return (
                            <ToDoListItem
                                i={i}
                                item={item}
                                handleDeleteItem={handleDeleteItem}
                            />
                        )
                    }) : <LoadingSpinner />
            }

            <Button
                variant="danger"
                disabled={!list.toDoList.length}
                className="todolist-form__clear"
                onClick={handleClearAll}>Clear All</Button>
        </div>
    )
}

export default ToDoList;