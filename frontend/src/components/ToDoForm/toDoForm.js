import React from 'react';

function ToDoForm(props){
    return (
        <div className="todolist-form">
            {console.log(props)}
        <form onSubmit={props.handleOnSubmit}>
            <input className="todolist-form__input" type="text" placeholder="Add tasks here.." value={props.state}
                onChange={props.handleInputChange} />
            <input className="todolist-form__submit" type="submit" value="Add" ></input>
            <input className="todolist-form__search" type="text" value={props.findValue} placeholder="Search Here.." onChange={props.handleFindItem} />
        </form>
    </div>
    )
}

export default ToDoForm;