import React from "react";

import './noTaskAdded.css';

/**
 * RENDER WHEN NO TASK HAS BEEN ADDED IN TODOLIST
 */
function NoTaskAdded(){
    return (
        <div className="tasknotadded">
             <h3>No task has been added Yet.! </h3>
             <h4>Add your task now</h4>
        </div>
    )

}

export default NoTaskAdded;