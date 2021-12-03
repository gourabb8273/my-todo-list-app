import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, removeAll, deleteItem, getItem } from '../../store/slices/toDoSlice';
import "./toDoList.css"

function ToDoList(props) {

    //fetching Inital Data From Backend API
    useEffect(()=>{
        fetch('http://localhost:8080/api/list')
        .then(res=>  res.text())
        .then(data=>{
            console.log(JSON.parse(data).dummyData)            
            dispatch(getItem(JSON.parse(data).dummyData))
        })
        .catch(err=> console.log(err))
    },[])
   

    const dispatch = useDispatch();
    const list = useSelector((state) => state)
    const [state, setState] = useState('');
    const [findValue, setFindValue] = useState('')

    /**FUNCTION :handleOnSubmit
     * ACTION: Dispatch the updated state to store
     **/
    function handleOnSubmit(e) {
        e.preventDefault();
        //check state is valid or not
        if (state.length)
            dispatch(addItem(state), setState(''))
        else alert("Enter valid task");
    }

    /**FUNCTION :handleInputChange
     * ACTION: Change the state of current state
     **/
    function handleInputChange(e) {
        e.preventDefault();
        setState(e.target.value)
    }
    /**FUNCTION :handleClearAll
     * ACTION: Clear all the tasks
     **/
    function handleClearAll(e) {
        e.preventDefault();
        dispatch(removeAll(state))

    }

    /**FUNCTION :handleDeleteItem
    * ACTION: Delete the selected Item
    **/
    function handleDeleteItem(key) {
        let newToDo = list.todo.toDoList.filter((val, ind) => ind !== key)
        dispatch(deleteItem({ toDoList: newToDo }))
        // dispatch(deleteItem(key))
    }

    /**FUNCTION :handleFindItem
    // ACTION: Set state to filter item list data 
    **/
    function handleFindItem(e) {
        e.preventDefault();
        let findKey = e.target.value;
        setFindValue(findKey)
    }    

    return (

        <div>

            <div className="todolist-form">
            <form onSubmit={handleOnSubmit}>
                <input className="todolist-form__input" type="text" placeholder="Add tasks here.." value={state}
                    onChange={handleInputChange} />
                <input className="todolist-form__submit" type="submit" value="Add" ></input>
                <input className="todolist-form__search" type="text" value={findValue} placeholder="Search Here.." onChange={handleFindItem} />                
                </form>
            </div>
            {
                list.todo.toDoList.filter(el => el.data.toLowerCase().includes(findValue.toLowerCase()))

                    .map((item, i) => {
                        return (
                            <div className="todolist-task__items" key={i}>
                                {/* <input type="checkbox" onChange={()=>handleCheckBox(i)}/>  */}
                                <h3>{i + 1}. {item.data}</h3>
                                <h5>created on {item.date}</h5>
                                <button onClick={() => handleDeleteItem(i)}>Delete</button>
                            </div>
                        )
                    })
            }
            <button className="todolist-form__clear" onClick={handleClearAll}>Clear All</button>
        </div>
    )
}

export default ToDoList;