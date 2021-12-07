import React from 'react';
// import { Button, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import './toDoListItem.css'

function ToDoListItem(props) {
    return (
        <div className="todolist-task__items" key={props.i}>           
            <h3>{props.i + 1 + ".  "} {props.item.data}</h3>
            <h5>{props.item.date}</h5>           
            <FontAwesomeIcon className="list-group__icon" icon={faTrashAlt} onClick={() => props.handleDeleteItem(props.i)}></FontAwesomeIcon>
        </div>
    )
}

export default ToDoListItem;