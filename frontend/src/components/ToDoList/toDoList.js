import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button} from 'react-bootstrap';
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
     * ACTION: DISPATCH THE UPDATED STATE TO STORE
     **/
    function handleOnSubmit(e) {
        e.preventDefault();
        //check state is valid or not
        if (state.length)
            dispatch(addItem(state), setState(''))
        else alert("Enter valid task");
    }

    /**
     * ACTION: CHANGE THE STATE OF CURRENT STATE
     **/
    function handleInputChange(e) {
        e.preventDefault();       
        setState(e.target.value)
    }

    /**
     * ACTION: CLEAR ALL THE TASKS 
     **/
    function handleClearAll(e) {
        e.preventDefault();
        dispatch(removeAll(state))

    }

    /**
    * ACTION: DELETE THE SELECTED ITEM 
    **/
    function handleDeleteItem(key) {
        let newToDo = list.toDoList.filter((val, ind) => ind !== key)
        dispatch(deleteItem({ toDoList: newToDo }))
        // dispatch(deleteItem(key))
    }

    /**
    // ACTION: FILTER LIST ITEM DATA AND SET NEW STATE
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
                                key={i}
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