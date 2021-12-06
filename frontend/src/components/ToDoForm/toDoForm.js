import React from 'react';

import  './toDoForm.css';

function ToDoForm(props){
    return (
        <div >
            <h2>To Do List</h2>
             <input className="todolist-form__search" type="text" value={props.findValue} placeholder="Search Here.." onChange={props.handleFindItem} />            
        <form className ="todolist-form" onSubmit={props.handleOnSubmit}>       
            <input className="todolist-form__input" type="text" placeholder="Add tasks here.." value={props.state}
                onChange={props.handleInputChange} />            
            <button className="todolist-form__submit">Add</button>
           
        </form>
    </div>
    )
}

export default ToDoForm;