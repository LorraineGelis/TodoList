import React from 'react';

export const PendingTask = (props) => {

    return(
    <h1>{props.userName} To-do Task Pending: {props.task.filter(e => !e.done).length} </h1>
    )
}

