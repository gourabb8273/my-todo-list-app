import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, deleteItem } from '../../store/slices/toDoSlice';

const ToDoList = (props) => {
    const initialState = {
        toDoList: [8]
    }

    const dispatch = useDispatch();
    const list = useSelector((state) => state)
    const [state, setState] = useState('');


    /**FUNCTION :handleOnSubmit
     * ACTION: Dispatch the updated state to store
     **/
    function handleOnSubmit(e) {
        e.preventDefault();
        let stateToDispatch =
            dispatch(addItem(state), setState(''))
    }

    /**FUNCTION :handleInputChange
     * ACTION: Change the state of current state
     **/
    function handleInputChange(e) {
        e.preventDefault();        
        setState(e.target.value)       
    }

    return (

        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" placeholder="Add tasks.." value={state}
                        onChange={handleInputChange} />
                    <input type="submit" ></input>
                </form>
            </div>
            {
                list.todo.toDoList.map((item, i) => {
                    return (
                        <div id={i}>
                            <ul>
                            <li>{item.data}</li>
                            </ul>
                             
                        </div>
                       
                    )
                })
            }
        </div>
    )
}

export default ToDoList;