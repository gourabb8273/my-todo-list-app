import React from 'react';
import { Button, ListGroup, ListGroupItem, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


function ToDoListItem(props){
    return (
        <div className="list-group__container">
        <Table key={props.i} variant="white" className="list-group__task" striped bordered >
            <tbody>
                <tr>
                    <td>{props.i + 1}</td>
                    <td>{props.item.data}</td>
                    <td>{props.item.date}</td>
                </tr>
            </tbody>
        </Table>
        <FontAwesomeIcon className="list-group__icon" icon={faTrashAlt} onClick={() => props.handleDeleteItem(props.i)}></FontAwesomeIcon>
        {/* <Button className = "list-group__button" variant="danger"  onClick={() => handleDeleteItem(i)}>Delete</Button>         */}
    </div>
    )
}

export default ToDoListItem;