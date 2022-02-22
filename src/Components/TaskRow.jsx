 import React from 'react';
 import './../App.css';

export const TaskRow = (props) => {

  return (
  <li className={"list-group-item d-flex justify-content-between align-items-center text-break text-white todo-row " + (props.task.done ? 'Is-done' : 'Is-undone')}>
    {props.task.name}
    <input className={"form-check-input me-1 ms-2"} type="checkbox" value="" aria-label="..." checked={props.task.done}
              onChange={() => props.toggleTask(props.task)}/>
  </li>
  )
} 
