import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItem, removeAll, deleteItem } from '../../store/slices/toDoSlice';

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
        // let stateToDispatch =
        dispatch(addItem(state), setState(''))
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
    function handleClearAll(e){
        e.preventDefault(); 
        dispatch(removeAll(state)) 

    }

    function handleDeleteItem(key){        
        let newToDo =list.todo.toDoList.filter((val,ind)=> ind!==key)       
        dispatch(deleteItem({toDoList: newToDo}))
        
    }

    return (

        <div>
            <div>
                <form onSubmit={handleOnSubmit}>
                    <input type="text" placeholder="Add tasks.." value={state}
                        onChange={handleInputChange} />
                    <input type="submit" value="Add" ></input>
                </form>
            </div>
            {
                list.todo.toDoList.map((item, i) => {
                    return (
                        <div key={i}>
                            
                            <h3>{item.data}</h3>
                            <button onClick={()=>handleDeleteItem(i)}>Delete</button>
                            
                             
                        </div>
                       
                    )
                })
            }
            <button onClick={handleClearAll}>Clear All</button>
        </div>
    )
}

export default ToDoList;